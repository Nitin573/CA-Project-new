import React, { useState, useEffect } from 'react'
import {
    Box, Button, Flex, Input, Select, Text, Heading,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer,
} from '@chakra-ui/react'
import Slidebar from '../../Slidebar/Slidebar';
import Company_name from '../../Company_name/Company_name';
import { useNavigate } from 'react-router-dom';
import { FaPrint, FaShare } from 'react-icons/fa';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { useDispatch, useSelector } from 'react-redux';
import { getPurchaseReturnAction } from "../../../../../Redux/PurchaseReturn/purchaseReturn.action";


const company = {
    name: 'Company Name'
}




const Purchase_Return = () => {
    const purchaseReturnData = useSelector((state) => state.purchaseReturn.getPurchaseReturnData.data)
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const { firmId } = useSelector((store) => store.FirmRegistration);

    useEffect(() => {
        try {
            // Do something with the response, e.g., update your component's state
            dispatch(getPurchaseReturnAction(token, firmId))
        } catch (error) {
            // Handle errors
            console.error('API Error:', error);
        }
    }, []);

    const navigate = useNavigate();
    const [selectedParty, setSelectedParty] = useState('All Parties');


    const handlePartySelect = (e) => {
        setSelectedParty(e.target.value);
    };
    const filteredParties = selectedParty === 'All Parties'
        ? purchaseReturnData
        : purchaseReturnData.filter(party => party.name === selectedParty);



    return (
        <>
            <Company_name company_name={company.name} />
            <Flex>
                <Slidebar />
                <Box flex='1' width='100%'>
                    <Flex p='4' justifyContent='center'>
                        <Heading size='md'>Purchase Return</Heading>
                    </Flex>
                    {/* Select date & Txns*/}
                    <Flex justifyContent='space-between' alignItems='center'
                        margin='15px'
                        flexDirection={{ base: 'column', md: 'row' }}
                    >
                        {/* select date */}
                        <Flex>
                            <Select
                                width='32%'
                                size='sm'
                                mr='2'
                                rightIcon={<ChevronDownIcon />}
                                defaultValue='default'
                                placeholder="Select date"
                            >
                                <option>Today</option>
                                <option>This week</option>
                                <option>This Month</option>
                                <option>This Quarter</option>
                                <option>This Financial Year</option>
                                <option>Custom</option>
                            </Select>
                            <Flex>
                                <Input type='date' size='sm' mr='2' />
                                <Text size='lg' mr='2' mt='1'>to</Text>
                                <Input type='date' size='sm' mr='4' />
                            </Flex>
                        </Flex>
                        <Button colorScheme='red' onClick={() => navigate('/add-purchase-return')}>Add Purchase Return + </Button>
                        {/* select party */}
                        {/* <Flex width='200px'>
                                <Select
                                    size='sm'
                                    rightIcon={<ChevronDownIcon />}
                                    placeholder="Select Party"
                                    value={selectedParty}
                                    onChange={handlePartySelect}
                                >
                                    <option value='All Parties'>All Parties</option>
                                    {parties.map((party)=>(
                                        <option key={party.id} value={party.name}>
                                            {party.name}
                                        </option>
                                    ))}
                                </Select>
                            </Flex> */}
                    </Flex>

                    {/* three boxes */}
                    <Flex margin='15px' flex='1'>
                        <Box border='0.1px solid lightgray'
                            boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                            height='80px'
                            width='100%'
                            p='2'
                        >
                            <Text>No of Txns</Text>
                            <Text fontSize='20px' mt='-2'>4</Text>
                        </Box>
                        <Box border='0.1px solid lightgray'
                            boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                            ml='4'
                            height='80px'
                            width='100%'
                            p='2'
                        >
                            <Text>Total Purchase Return</Text>
                            <Text fontSize='20px' mt='-2'>₹ 3500 </Text>
                        </Box>
                        <Box border='0.1px solid lightgray'
                            boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                            ml='4'
                            height='80px'
                            width='100%'
                            p='2'
                        >
                            <Text>Balance Due</Text>
                            <Text fontSize='20px' mt='-2'>₹ 1000 </Text>
                        </Box>
                    </Flex>
                    {/* table */}
                    <TableContainer marginX='15px' boxShadow='md' mt='2'>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th style={{ border: '0.1px solid lightgray' }}>Party Name</Th>
                                    <Th style={{ border: '0.1px solid lightgray' }}>Phone No</Th>
                                    <Th style={{ border: '0.1px solid lightgray' }}>Bill No</Th>
                                    <Th style={{ border: '0.1px solid lightgray' }}>Bill Date</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {purchaseReturnData?.map((data) => (
                                    <Tr key={data._id}>
                                        <Td style={{ border: '0.1px solid lightgray' }}>
                                            {data.partyName}
                                        </Td>
                                        <Td style={{ border: '0.1px solid lightgray' }}>
                                            {data.phoneNo}
                                        </Td>
                                        <Td style={{ border: '0.1px solid lightgray' }}>
                                            {data.billNo}
                                        </Td>
                                        <Td style={{ border: '0.1px solid lightgray' }}>
                                            {new Date(data.billDate).toDateString()}
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>

                        </Table>
                    </TableContainer>
                </Box>
            </Flex>
        </>
    )
}

export default Purchase_Return