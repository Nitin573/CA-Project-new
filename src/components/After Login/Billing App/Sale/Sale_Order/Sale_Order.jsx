import React, { useState } from 'react';

import {
    Box, Button, Flex, HStack, Image, Input, Select, Text, VStack, Wrap, Heading, List,
    ListItem,
    ListIcon,
    OrderedList,

    UnorderedList,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    AspectRatio,
    useDisclosure,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Option,


} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Slidebar from '../../Slidebar/Slidebar';
import { postSaleInvoice } from '../../../../../Redux/SaleInvoice/saleInvoice.Action';
import { postInvoiceAction } from '../../../../../Redux/Invoice/invoice.action';




const Sale_Order = () => {

    const userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) || {};
    const { token } = userDetails;
    const clientsData = [
        { id: 1, name: "John Doe", phone: "123-456-7890" },
        { id: 2, name: "ane Doe", phone: "234-567-8901" },
        { id: 3, name: "Bob Smith", phone: "345-678-9012" },
        { id: 4, name: "ohn Doe", phone: "663-456-7890" },
        { id: 5, name: "Jane Doe", phone: "534-567-8901" },
        { id: 6, name: "ob Smith", phone: "945-678-9012" },
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedClient, setSelectedClient] = useState(null);
    const [referenceNumber, setReferenceNumber] = useState("");
    const [OrderDate, setOrderDate] = useState("");
    const [DueDate, setDueDate] = useState("");
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

    const { firmId } = useSelector((store) => store.FirmRegistration);

    const dispatch = useDispatch();
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleClientSelect = (client) => {
        setSelectedClient(client);
    };

    const handleCalculatorClick = () => {
        // handle calculator button click
        window.open("calc.exe");
    };

    const filteredClients = clientsData.filter(
        (client) =>
            client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            client.phone.includes(searchQuery)
    );


    ////
    const [tableData, setTableData] = useState([
        { id: 1, item: 'Item 1', quantity: 1, unitPrice: 10, taxPercent: 10, amount: 11 },
        { id: 2, item: 'Item 2', quantity: 2, unitPrice: 20, taxPercent: 10, amount: 44 },
        { id: 3, item: 'Item 3', quantity: 3, unitPrice: 30, taxPercent: 10, amount: 99 },
    ]);

    const [newRowData, setNewRowData] = useState({
        id: null,
        item: '',
        quantity: 0,
        unitPrice: 0,
        taxPercent: 0,
        amount: 0,
    });

    let partiesData = useSelector((store) => store.partiesReducer.getPartiesData);
    console.log('partiesData', partiesData);


    const handleTableInputChange = (event, index, key) => {
        const newData = [...tableData];
        newData[index][key] = event.target.value;
        setTableData(newData);
    };

    const handleAddRow = () => {
        const newId = Math.max(...tableData.map((data) => data.id)) + 1;
        setTableData([...tableData, { ...newRowData, id: newId }]);
    };

    const handleDeleteRow = (index) => {
        const newData = [...tableData];
        newData.splice(index, 1);
        setTableData(newData);
    };

    const handleSaveTableData = () => {
        // Check if all required data is available
        if (!selectedClient || !referenceNumber || !OrderDate || !DueDate || tableData.length === 0 || !selectedPaymentMethod) {
            // You may want to display an error message or handle this case appropriately
            console.error("Missing required data");
            return;
        }
    
        // Gather all the data to be saved
        const orderData = {
            clientId: selectedClient.id,
            referenceNumber,
            OrderDate,
            DueDate,
            paymentMethod: selectedPaymentMethod,
            items: tableData.map(item => ({
                item: item.item,
                quantity: item.quantity,
                unitPrice: item.unitPrice,
                taxPercent: item.taxPercent,
                amount: calculateAmount(item.quantity, item.unitPrice, item.taxPercent)
            }))
        };
    
        // You can now send this data to your API endpoint to save the order
        // Use your postInvoiceAction or any other relevant API call
        dispatch(postInvoiceAction(orderData, firmId, token));
    };
    

    const calculateAmount = (quantity, unitPrice, taxPercent) => {
        const amount = quantity * unitPrice;
        const taxAmount = (taxPercent / 100) * amount;
        return amount + taxAmount;
    };
    const calop = () => {
        window.href = ("%WINDOWS%\system32\calc.exe");
    }
    const calculateTotalOreder_SaleAmount = () => {
        const Oreder_SaleAmounts = tableData.map((row) => {
            const amount = row.quantity * row.unitPrice;
            const taxAmount = (row.taxPercent / 100) * amount;
            return amount + taxAmount;
        });
        const totalOreder_SaleAmount = Oreder_SaleAmounts.reduce((total, amount) => total + amount, 0);
        return totalOreder_SaleAmount;
    };



    return (

        <>


            <Flex  >

                <Slidebar />



                <Box width={"80%"} padding="10px" m={"auto"} marginTop={"20px"}>
                    <h1>Sale Order Page</h1>
                    <Flex justifyContent={"space-between"} flexDirection={{

                        base: "column",
                        md: "row",
                        lg: "row"
                    }}>

                        <Box >
                            <div>

                                <Input
                                    type="text"
                                    id="searchQuery"
                                    placeholder='Search by name or phone number'
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            <h2>Client List</h2>
                            <VStack h={"130px"} overflow={"scroll"} p={"5px"} scroll={{}}>
                                {partiesData.map((client) => (
                                    <Box
                                        key={client.id}  // <-- Add this key prop
                                        onClick={() => handleClientSelect(client)}
                                        style={{
                                            border: "1px solid black",
                                            boxShadow: "2px black",
                                            padding: "5px",
                                            width: "90%",
                                            borderRadius: "10px",
                                        }}
                                    >
                                        <Text>
                                            {client._id
                                            } <br /> {client.partyName
                                            } <br /> {client.phoneNumber}
                                        </Text>
                                    </Box>
                                ))}
                            </VStack>


                        </Box>

                        <Box>
                            <h2>Selected Client</h2>
                            {selectedClient ? (
                                <div>
                                    <p>id: {selectedClient._id}</p>
                                    <p>Name: {selectedClient.partyName}</p>
                                    <p>Phone: {selectedClient.phoneNumber}</p>
                                </div>
                            ) : (
                                <p>No client selected.</p>
                            )}
                        </Box>
                        <Box>
                            <Box p="5px" borderRadius={"20px"} border="1px solid black">
                                <label htmlFor="referenceNumber">Order Number: </label>
                                <input
                                    type="text"
                                    id="referenceNumber"
                                    value={referenceNumber}
                                    onChange={(e) => setReferenceNumber(e.target.value)}
                                />
                            </Box>
                            <div>
                                <label htmlFor="OrderDate">Order Date:</label>
                                <input
                                    type="date"
                                    id="OrderDate"
                                    value={OrderDate}
                                    onChange={(e) => setOrderDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="DueDate">Due Date:</label>
                                <input
                                    type="date"
                                    id="DueDate"
                                    value={DueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                />
                            </div>
                        </Box>
                    </Flex>

                    {/* {table} */}

                    <Box width="100%" height="">


                        <h2>Items</h2>
                        <TableContainer width="100%" margin={"auto"}>
                            <Table >
                                <Thead>
                                    <Tr>
                                        <Th>Item No</Th>
                                        <Th>Item</Th>
                                        <Th>Quantity</Th>
                                        <Th>Per Unit Price</Th>
                                        <Th>Tax %</Th>
                                        <Th>Amount</Th>
                                        <Th>Delete</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {tableData.map((data, index) => (
                                        <Tr key={data.id}>
                                            <Td>{data.id}</Td>
                                            <Td>
                                                <input type="text" value={data.item} onChange={(e) => handleTableInputChange(e, index, 'item')} />
                                            </Td>
                                            <Td>
                                                <input type="number" value={data.quantity} onChange={(e) => handleTableInputChange(e, index, 'quantity')} />
                                            </Td>
                                            <Td>
                                                <input type="number" value={data.unitPrice} onChange={(e) => handleTableInputChange(e, index, 'unitPrice')} />
                                            </Td>
                                            <Td>
                                                <input type="number" value={data.taxPercent} onChange={(e) => handleTableInputChange(e, index, 'taxPercent')} />
                                            </Td>
                                            <Td> {calculateAmount(data.quantity, data.unitPrice, data.taxPercent)}</Td>
                                            <Td>
                                                <button onClick={() => handleDeleteRow(index)}>Delete</button>
                                            </Td>
                                        </Tr>

                                    ))}
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Td>
                                            <Button onClick={handleAddRow}>Add Row +</Button>
                                        </Td>
                                        <Td colSpan="6"></Td>


                                    </Tr>

                                </Tfoot>

                            </Table>
                        </TableContainer>
                        <Box m={"10px"}>
                            <Text fontSize={"15px"} fontWeight={"bold"}>Total Oreder_Sale Amount: ₹{calculateTotalOreder_SaleAmount()}

                            </Text>
                        </Box>
                        <Select
                    m={"10px"}
                    w={"90%"}
                    value={selectedPaymentMethod}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                >
                            <option value="Cash">Cash</option>
                            <option value="Credit Card/Debit Card">Credit/Debit Card</option>
                            <option value="UPI">UPI</option>
                        </Select>
                        <Box margin="10px" p={"20px"}>
                            <Button width="100%" onClick={handleSaveTableData} bg={"gold"}>Save</Button>
                        </Box>
                    </Box>
                </Box>






            </Flex>

        </>
    )
}


export default Sale_Order