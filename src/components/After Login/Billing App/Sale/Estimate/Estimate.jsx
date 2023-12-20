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

} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Slidebar from '../../Slidebar/Slidebar';

import Company_name from '../../Company_name/Company_name';

const Estimate = () => {
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
    const [invoiceDate, setInvoiceDate] = useState("");
    const [supplyDate, setSupplyDate] = useState("");

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
        console.log(tableData);
        // Perform save logic here
    };

    const calculateAmount = (quantity, unitPrice, taxPercent) => {
        const amount = quantity * unitPrice;
        const taxAmount = (taxPercent / 100) * amount;
        return amount + taxAmount;
    };
    const calop = () => {
        window.href=("%WINDOWS%\system32\calc.exe");
    }
    const calculateTotalEstimateAmount = () => {
        const estimateAmounts = tableData.map((row) => {
            const amount = row.quantity * row.unitPrice;
            const taxAmount = (row.taxPercent / 100) * amount;
            return amount + taxAmount;
        });
        const totalEstimateAmount = estimateAmounts.reduce((total, amount) => total + amount, 0);
        return totalEstimateAmount;
    };
    const Company = { name:"CompanyName"}
    return (

        <>

            <Company_name company_name={Company.name} />

            <Flex  >

                <Slidebar />

                

                <Box width={"80%"} padding="10px" m={"auto"} marginTop={"20px"}>
                    <h1>Estimate Page</h1>
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
                            <VStack h={"130px"} overflow={"scroll"} p={"5px"} scroll={{

                            }} >

                                {filteredClients.map((client) => (
                                    <Box key={client.id} onClick={() => handleClientSelect(client)}
                                        style={{
                                            border: "1px solid black",
                                            boxShadow: "2px black",
                                            padding: "5px",
                                            width: "90%",
                                            borderRadius: "10px"
                                        }}
                                    >
                                        <Text>
                                            {client.id} <br /> {client.name} <br /> {client.phone}
                                        </Text>
                                    </Box>
                                ))}
                            </VStack>

                        </Box>

                        <Box>
                            <h2>Selected Client</h2>
                            {selectedClient ? (
                                <div>
                                    <p>id: {selectedClient.id}</p>
                                    <p>Name: {selectedClient.name}</p>
                                    <p>Phone: {selectedClient.phone}</p>
                                </div>
                            ) : (
                                <p>No client selected.</p>
                            )}
                        </Box>
                        <Box>
                            <div>
                                <label htmlFor="referenceNumber">Reference Number:</label>
                                <input
                                    type="text"
                                    id="referenceNumber"
                                    value={referenceNumber}
                                    onChange={(e) => setReferenceNumber(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="invoiceDate">Invoice Date:</label>
                                <input
                                    type="date"
                                    id="invoiceDate"
                                    value={invoiceDate}
                                    onChange={(e) => setInvoiceDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="supplyDate">Supply Date:</label>
                                <input
                                    type="date"
                                    id="supplyDate"
                                    value={supplyDate}
                                    onChange={(e) => setSupplyDate(e.target.value)}
                                />
                            </div>
                        </Box>
                    </Flex>

                    {/* {table} */}

                    <Box width="100%" height="">


                        <h2>Items</h2>
                        <TableContainer width="100%" margin={"auto"} height="" overflow="scroll">
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
                                        <Td colSpan="3"></Td>
                                        <Td>Total Estimate Amount: </Td>
                                        <Td>
                                            ₹{calculateTotalEstimateAmount()}
                                        </Td>

                                    </Tr>

                                </Tfoot>

                            </Table>
                        </TableContainer>
                        <Box margin="10px" >
                            <Button width="100%" onClick={handleSaveTableData} bg={"gold"}>Save</Button>
                        </Box>
                    </Box>
                </Box>






            </Flex>

        </>
    )
}


export default Estimate