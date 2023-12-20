import React, { useState } from 'react'
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
    FormControl,
    FormLabel,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    InputGroup,
    InputRightAddon,
    InputRightElement,
    InputLeftElement,

} from '@chakra-ui/react'
import Slidebar from '../../Slidebar/Slidebar';
import Company_name from '../../Company_name/Company_name';
import { useNavigate } from 'react-router-dom';
import { FaPrint, FaSearch, FaShare } from 'react-icons/fa';
import { ChevronDownIcon } from '@chakra-ui/icons';


const parties = [
    { id: 1, name: "Party 1", date:'28-08-2023', totalAmount: 1500, dueAmount: 300 },
    { id: 2, name: "Party 2", date:'27-08-2023', totalAmount: 2000, dueAmount: 400 },
    { id: 3, name: "Party 3", date:'27-08-2023', totalAmount: 1200, dueAmount: 100 },
    { id: 4, name: "Party 4", date:'25-08-2023', totalAmount: 800, dueAmount: 200 },
];

const InPayments = () => {
        const navigate = useNavigate();
        const [selectedParty, setSelectedParty] = useState('All Parties');
    
        const handlePartySelect = (e) => {
            setSelectedParty(e.target.value);
        };
    
        const filteredParties = selectedParty === 'All Parties'
            ? parties
            : parties.filter(party => party.name === selectedParty);
    
        
        return (
            <>
                <Box flex='1' width='100%'>
                    <Flex p='4'justifyContent='space-between'>
                        <Heading size='md'>Payment-Ins</Heading>
                        <Button colorScheme='green' onClick={()=>navigate('/add-payment-out')}>Add Payment-In + </Button>
                    </Flex>
                    {/* Select date & Txns*/}
                    <Flex justifyContent='space-between' alignItems='center'
                        margin='15px'
                        flexDirection={{base:'column', md:'row'}}
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
                                <Input type='date' size='sm' mr='2'/>
                                <Text size='lg' mr='2'>to</Text>
                                <Input type='date' size='sm' mr='4'/>
                            </Flex>
                        </Flex>
                        {/* select party */}
                        <Flex width='200px'>
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
                        </Flex>
                    </Flex>
                    
                    {/* three boxes */}
                    <Flex margin='15px' flex='1'>
                        <Box border= '0.1px solid lightgray'
                        boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        height='80px'
                        width='100%'
                        p='2'
                        >
                            <Text>No of Txn</Text>
                            <Text fontSize='20px' mt='-2'>2</Text>
                        </Box>
                        <Box border= '0.1px solid lightgray'
                        boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        ml='4'
                        height='80px'
                        width='100%'
                        p='2'
                        >
                            <Text>Total Amount</Text>
                            <Text fontSize='20px' mt='-2'>₹ 100 </Text>
                        </Box>
                        <Box border= '0.1px solid lightgray'
                        boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        ml='4'
                        height='80px'
                        width='100%'
                        p='2'
                        >
                            <Text>Total Balance</Text>
                            <Text fontSize='20px' mt='-2'>₹ 12 </Text>
                        </Box>
                    </Flex>
                    <TableContainer marginX='15px' boxShadow='md' mt='2'
                    >
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th style={{border:'0.1px solid lightgray'}}>Party Name</Th>
                                    <Th style={{border:'0.1px solid lightgray'}}>Date</Th>
                                    <Th style={{border:'0.1px solid lightgray'}}>Total Amount</Th>
                                    <Th style={{border:'0.1px solid lightgray'}}>Due Amount</Th>
                                    <Th style={{border:'0.1px solid lightgray'}}>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {filteredParties.map((party)=>(
                                    <Tr>
                                        <Td style={{border:'0.1px solid lightgray'}}>
                                            {party.name}
                                        </Td>
                                        <Td style={{border:'0.1px solid lightgray'}}>
                                            {party.date}
                                        </Td>
                                        <Td style={{border:'0.1px solid lightgray'}}>
                                            ₹ {party.totalAmount} 
                                        </Td>
                                        <Td style={{border:'0.1px solid lightgray'}}>
                                            ₹ {party.dueAmount}
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
            </>
        )
    }

export default InPayments