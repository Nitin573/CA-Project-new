import React, { useEffect } from 'react'
import {
    Box, Button, Flex,
    useDisclosure,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Icon,
    Link,
} from '@chakra-ui/react'
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company_name/Company_name';
import { FiDownload, FiShare2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { getInvoiceAction, postSaleInvoice } from '../../../../Redux/Invoice/invoice.action';
import { Heading } from '@chakra-ui/react';
import moment from 'moment';

const Invoice = ({ formData, setFormData }) => {
    const getCurrentDate = () => {
      return moment().format('YYYY-MM-DD');
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      const formattedValue = e.target.type === 'date' ? getCurrentDate() : value;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: formattedValue,
      }));
    };
  
    const paymentOptions = ['Cash on Delivery', 'UPI/Wallet', 'Credit/Debit'];
  
    return (
      <Box p="2">
        <Heading size="md" mb="4">
          INVOICE
        </Heading>
        {/* ... your existing invoice code ... */}
      </Box>
    );
  };

const Sale = () => {
    const Company = {
        name: "Company Name"
    }
    const Items = [
        {
            id: 1,
            Name: "name",
            quantity: 10,
            price: 1000,
            tax: 0,
            total: 1000,
        }
    ]
    const modal1 = useDisclosure()
    const token = localStorage.getItem("token");
    const { firmId } = useSelector((store) => store.FirmRegistration);
    console.log("🚀 ~ file: Sale.jsx:41 ~ Sale ~ firmId:", firmId)
    const { getAllInvoice } = useSelector((store) => store.invoiceReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleViewClick = (invoiceId) => {
        navigate(`/billing-software/${invoiceId}`);
    };

    useEffect(() => {
        dispatch(getInvoiceAction(token, firmId));
    }, [firmId])
    return (

        <>
            <Company_name company_name={Company.name} />
            <Flex >
                <Slidebar />
                <Box margin={"auto"} marginTop="20px" overflow={"hidden"} width="80%">
                    <Link as={RouterLink} to={"/billing-software"}>
                        <Button backgroundColor="blue.400" px='2' margin={"10px"}
                            onClick={modal1.onOpen}>Add Sales +</Button>
                    </Link>
                    <TableContainer width="100%" alignItems='center'
                        justifyContent='center'
                        bg="white" boxShadow="md" p="4"
                    >
                        <Table width="100%">
                            <Thead>
                                <Tr>
                                    <Th style={{ border: '1px solid gray' }}>Invoice No</Th>
                                    <Th style={{ border: '1px solid gray' }}>Date</Th>
                                    <Th style={{ border: '1px solid gray' }}>Amount</Th>
                                    <Th style={{ border: '1px solid gray' }}>Tax</Th>
                                    <Th style={{ border: '1px solid gray' }}>Total Amount</Th>
                                    <Th style={{ border: '1px solid gray' }}>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    getAllInvoice.map((data) =>
                                        <Tr key={data.id}>
                                            <Td style={{ border: '1px solid gray' }}>{data.invoiceNo}</Td>
                                            <Td style={{ border: '1px solid gray' }}>{data.invoiceDate}</Td>
                                            <Td style={{ border: '1px solid gray' }}>{data.dueAmount}</Td>
                                            <Td style={{ border: '1px solid gray' }}>0</Td>
                                            <Td style={{ border: '1px solid gray' }}>{data.finalAmount}</Td>
                                            <Td style={{ border: '1px solid gray' }}>
                                                <Link color="blue.500" mr="2" textDecoration='underline' onClick={() => handleViewClick(data._id)}>
                                                    view
                                                </Link>
                                                <Link color="blue.500" mr="2">
                                                    <Icon as={FiDownload} />
                                                </Link>
                                                <Link color="blue.500">
                                                    <Icon as={FiShare2} />
                                                </Link>
                                            </Td>
                                        </Tr>
                                    )

                                }

                            </Tbody>

                        </Table>
                    </TableContainer>
                </Box>
                {/* <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Add New Item</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>

                                <FormControl margin={"10px"}>

                                    <FormLabel>Item Name :</FormLabel>
                                    <Input type="text" placeholder="Item Name" />
                                </FormControl>
                                <FormControl margin={"10px"}>

                                    <FormLabel>Item Quantity :</FormLabel>
                                    <Input type="number" placeholder="Item Quantity" />
                                </FormControl>
                                <FormControl margin={"10px"}>

                                    <FormLabel>Item Price :</FormLabel>
                                    <Input type="number" placeholder="Item Price" />
                                </FormControl>
                                <FormControl margin={"10px"}>

                                    <FormLabel>Tax :</FormLabel>
                                    <Input type="number" placeholder="Tax" />
                                </FormControl>
                                <FormControl margin={"10px"}>

                                    <FormLabel>Total :</FormLabel>
                                    <Input type="number" placeholder="Total" />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={modal1.onClose}>
                                    Close
                                </Button>
                                <Button colorScheme='green'>Add</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal> */}
            </Flex>

        </>
    )
}

export default Sale





