import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
    Box,
    Flex,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Button,
    Input,
    InputRightAddon,
    InputGroup,
    Select,
    Text,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';

import { getReport } from '../../../../Redux/Report/Report.Action';

const Company = {
    name: 'Company Name',
};

const DayBook = () => {
    const token = localStorage.getItem("token");
    const { firmId } = useSelector((store) => store.FirmRegistration);
    // const token =
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTMxMDFkNjBhNDQwOTNhYTMzMzA5NmMiLCJpYXQiOjE2OTkzNjE0MjEsImV4cCI6MTY5OTQ0NzgyMX0.4RYp1i0SyHdsiHaWSyFbM3qJwyJ1mlhVr649O1hOGxg"
    // const firmId = '652d0f5d4115c16957111ed4';

    const dispatch = useDispatch();

    const [filteredDayBook, setFilteredDayBook] = useState([]);
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        dispatch(getReport(token, firmId));
    }, [firmId]);

    const DayBook = useSelector((state) => state.reportReducer.reportData?.user);
    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        const dataForCurrentDay = DayBook?.filter((data) => {
            const itemDate = (data.invoiceDate)?.split('T')[0];
            return itemDate === currentDate;
        });
        setFilteredDayBook(dataForCurrentDay);
    }, [DayBook]);
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (query === '') {
            setFilteredDayBook(DayBook.filter((data) => {
                const currentDate = new Date().toISOString().split('T')[0];
                return (data.invoiceDate)?.split('T')[0] === currentDate;
            }));
        } else {
            setFilteredDayBook(
                DayBook.filter((data) =>
                    data.shipToCustomerName && data.shipToCustomerName.toLowerCase().includes(query)
                )
            );
        }
    };

    const handleRowClick = (invoiceId) => {
        navigate(`/billing-software/${invoiceId}`);
    };

    const handleEditClick = (invoiceId) => {
        navigate(`/billing-software/${invoiceId}?q=edit`);
    };

    const totalTransactions = filteredDayBook?.length || 0;
    const totalSales = filteredDayBook?.reduce((acc, data) => acc + (data.finalAmount || 0), 0) || 0;
    const totalDue = filteredDayBook?.reduce((acc, data) => acc + (data.dueAmount || 0), 0) || 0;

    return (
        <>
            <Box Flex="1" padding="15px">
                <Heading size="md" mt="2">
                    Sale Reports
                </Heading>
                <Flex alignItems="right" position="absolute" right="230" top="140">
                    <Button fontSize="10px" bg="blue.400" marginLeft="10px">
                        Print
                    </Button>
                    <Button fontSize="10px" bg="blue.400" marginLeft="10px">
                        Excel
                    </Button>
                </Flex>

                <Flex
                    justifyContent="space between"
                    alignItems="center"
                    margin="30px"
                    flexDirection={{ base: 'column', md: 'row' }}
                >
                    <InputGroup mt="-2">
                        <Input
                            placeholder="search..."
                            value={searchQuery}
                            onChange={handleSearch}
                            size="sm"
                            width="60%"
                        />
                        <InputRightAddon size="sm" outline="none" height="32px" mr="-10">
                            <SearchIcon color="black" />
                        </InputRightAddon>
                    </InputGroup>
                </Flex>
                <Flex>
                    <Box
                        border="0.1px solid lightgray"
                        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                        ml="4"
                        height="80px"
                        width="100%"
                        p="2"
                    >
                        <Text>No of Txn</Text>
                        <Text fontSize="20px" mt="-2">
                            {totalTransactions}
                        </Text>
                    </Box>
                    <Box
                        border="0.1px solid lightgray"
                        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                        ml="4"
                        height="80px"
                        width="100%"
                        p="2"
                    >
                        <Text>Total Sale</Text>
                        <Text fontSize="20px" mt="-2">
                            {totalSales} ₹
                        </Text>
                    </Box>
                    <Box
                        border="0.1px solid lightgray"
                        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                        ml="4"
                        height="80px"
                        width="100%"
                        p="2"
                    >
                        <Text>Balance Due</Text>
                        <Text fontSize="20px" mt="-2">
                            {totalDue} ₹
                        </Text>
                    </Box>
                </Flex>
                <TableContainer m="2" margin="15px" border="0.1px solid lightgray" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
                    <Table>
                        <Thead>
                            <Tr>
                                <Th style={{ border: '1px solid gray' }}>Invoice No</Th>
                                <Th style={{ border: '1px solid gray' }}>Customer Name</Th>
                                <Th style={{ border: '1px solid gray' }}>Amount</Th>
                                <Th style={{ border: '1px solid gray' }}>Balance</Th>
                                <Th style={{ border: '1px solid gray' }}>Due Date</Th>
                                <Th style={{ border: '1px solid gray' }} colSpan={2}>
                                    Actions
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filteredDayBook?.map((data) => (
                                <Tr key={data._id} style={{ cursor: 'pointer' }}>
                                    <Td style={{ border: '1px solid gray' }} onClick={() => handleRowClick(data.invoiceNo)}>
                                        {data.invoiceNo}
                                    </Td>
                                    <Td style={{ border: '1px solid gray' }} onClick={() => handleRowClick(data.invoiceNo)}>
                                        {data.shipToCustomerName}
                                    </Td>
                                    <Td style={{ border: '1px solid gray' }} onClick={() => handleRowClick(data.invoiceNo)}>
                                        {data.finalAmount} ₹
                                    </Td>
                                    <Td style={{ border: '1px solid gray' }} onClick={() => handleRowClick(data.invoiceNo)}>
                                        {data.dueAmount}
                                    </Td>
                                    <Td style={{ border: '1px solid gray' }} onClick={() => handleRowClick(data.invoiceNo)}>
                                        {new Date(data.dueDate).toLocaleDateString()}
                                    </Td>
                                    <Td onClick={() => handleEditClick(data.invoiceNo)} style={{ border: '1px solid gray' }}>
                                        Edit
                                    </Td>
                                    <Td
                                        onClick={() => {
                                            // Log the data when the "Delete" button is clicked
                                        }}
                                        style={{ border: '1px solid gray' }}
                                    >
                                        Delete
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default DayBook;
