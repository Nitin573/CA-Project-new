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
import TransactionTable from './TransactionTable';

const Export_to_Tally
    = () => {
        const [selectedOption, setSelectedOption] = useState('');
        const [fromDate, setFromDate] = useState('');
        const [toDate, setToDate] = useState('');

        const handleOptionChange = (event) => {
            setSelectedOption(event.target.value);
        };

        const handleFromDateChange = (event) => {
            setFromDate(event.target.value);
        };

        const handleToDateChange = (event) => {
            setToDate(event.target.value);
        };

        const handleExportClick = () => {
            // Logic for exporting to Tally
            console.log("Exporting to Tally...");
            console.log("Selected Option:", selectedOption);
            console.log("From Date:", fromDate);
            console.log("To Date:", toDate);
        };
        const transactions = [
            {
                date: '2023-05-10',
                invoiceNumber: 'INV-001',
                partyName: 'John Doe',
                transactionType: 'Sale',
                paymentType: 'Credit Card',
                amount: 100.0,
                balance: 0.0
            },

        ];
        return (

            <>


                <Flex bg={"whitesmoke"}>

                    <Slidebar />


                    <Box w={{base:"75%", md:"80%",lg:"100%"}} m={"20px"}>
                        <Box w="100%" bg={"white"} p={"20px"}>
                            <h2>Export to Tally</h2>
                            <HStack w="100%" justifyContent={"space-evenly"}
                                flexDirection={{ base: "column", md: "column", lg: "row" }}
                                gap={"20px"}
                            >

                                <Box>

                                    <Select id="selectOption" value={selectedOption} onChange={handleOptionChange}
                                        fontSize="20"
                                    >

                                        <option value="thisMonth">This Month</option>
                                        <option value="thisYear">This Year</option>
                                    </Select>
                                </Box>
                                <HStack m={"auto"} flexDirection={{ base: "column", md: "row", lg: "row" }}>
                                    <Text m={"auto"}>Between</Text>

                                    <input id="fromDate" type="date" value={fromDate} onChange={handleFromDateChange} />
                                    <Text m={"auto"}>To</Text>

                                    <input id="toDate" type="date" value={toDate} onChange={handleToDateChange} />
                                </HStack>
                                <Button bg={"red.400"} onClick={handleExportClick}>Export to Tally</Button>
                            </HStack>
                        </Box>

                        {/* table */}
                        <Box w="100%" bg={"white"} p={"10px"} m={"auto"} marginTop={"20px"} >
                            <h3>Transactions</h3>
                            <TransactionTable transactions={transactions} />

                        </Box>
                    </Box>

                </Flex>

            </>
        )
    }






export default Export_to_Tally
