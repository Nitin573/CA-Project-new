import React, { useState } from 'react'
import {
    Box, Button, Flex, Input, Select, Text, Heading,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer, InputGroup, InputLeftElement,
} from '@chakra-ui/react'
import Slidebar from '../../Slidebar/Slidebar';
import Company_name from '../../Company_name/Company_name';
import { useNavigate } from 'react-router-dom';
import { FaPrint, FaSearch, FaShare } from 'react-icons/fa';
import { ChevronDownIcon } from '@chakra-ui/icons';


const company = {
    name : 'Company Name'
}
const parties = [
    { id: 1, name: "Party 1", dueDate:'28-08-2023', advanced: 1500, balance: 300 },
    { id: 2, name: "Party 2", dueDate:'27-08-2023', advanced: 2000, balance: 400 },
    { id: 3, name: "Party 3", dueDate:'27-08-2023', advanced: 1200, balance: 100 },
    { id: 4, name: "Party 4", dueDate:'25-08-2023', advanced: 800, balance: 200 },
];

const Purchase_Order = () => {
        const navigate = useNavigate();
        const [selectedOrderType, setSelectedOrderType] = useState('All');

        return (
            <>
                <Company_name company_name={company.name}/>
                <Flex>
                    <Slidebar/>
                    <Box flex='1' width='100%'>
                        <Flex p='4'justifyContent='center'>
                            <Heading size='md'>Purchase Order</Heading>
                        </Flex>
                        
                        <Flex alignItems='center'
                        justifyContent='space-between'
                        margin='15px'
                        flexDirection={{base:'column', md:'row'}}
                        >
                            {/* select to view */}
                            <Flex width={{ base: '100%', md: '150px' }} margin={{ base: '0 0 10px 0', md: '0' }}>
                                <Select
                                size='sm'
                                rightIcon={<ChevronDownIcon />}
                                placeholder="Choose to View"
                                defaultValue='All'
                                value={selectedOrderType}
                                onChange={(e)=>setSelectedOrderType(e.target.value)}
                                >
                                    <option value='All'>All</option>
                                    <option value='Open Orders'>Open Orders</option>
                                    <option value='Closed Orders'>Closed Orders</option>
                                </Select>
                            </Flex>
                            <Flex width={{ base: '100%', md: '300px' }} margin={{ base: '0 0 10px 0', md: '0' }}>
                                <InputGroup>
                                    <InputLeftElement>
                                        <FaSearch mt='-1'/>
                                    </InputLeftElement>
                                    <Input placeholder='Search Order' size='sm'/>
                                </InputGroup>
                            </Flex>
                            <Button colorScheme='red' onClick={()=>navigate('/add-purchase-order')}
                                width={{ base: '100%', md: '200px' }}
                                size='md'
                            >
                                Add Purchase Order + 
                            </Button>
                        </Flex>
                        
                        {/* table */}
                        <TableContainer marginX='15px' boxShadow='md' mt='2'
                        >
                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th style={{border:'0.1px solid lightgray'}}>Party Name</Th>
                                        <Th style={{border:'0.1px solid lightgray'}}>Advanced</Th>
                                        <Th style={{border:'0.1px solid lightgray'}}>Balance</Th>
                                        <Th style={{border:'0.1px solid lightgray'}}>Due Date</Th>
                                        <Th style={{border:'0.1px solid lightgray'}}>Actions</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {parties.map((party)=>(
                                        <Tr>
                                            <Td style={{border:'0.1px solid lightgray'}}>
                                                {party.name}
                                            </Td>
                                            <Td style={{border:'0.1px solid lightgray'}}>
                                                ₹ {party.advanced}
                                            </Td>
                                            <Td style={{border:'0.1px solid lightgray'}}>
                                                ₹ {party.balance} 
                                            </Td>
                                            <Td style={{border:'0.1px solid lightgray'}}>
                                                {party.dueDate}
                                            </Td>
                                            <Td style={{border:'0.1px solid lightgray'}}>
                                                <Flex gap='8px'>
                                                    <FaShare/>
                                                    <FaPrint/>
                                                </Flex>
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

export default Purchase_Order