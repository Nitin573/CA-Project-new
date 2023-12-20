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

} from '@chakra-ui/react'
import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company_name/Company_name';
import ExpenseTab from './ExpenseTab';
import { useNavigate } from 'react-router-dom';

const itemExpense = [
    {
        description:'Item 1',
        amount:30
    },
    {
        description:'Item 2',
        amount:47
    },
    {
        description:'Item 3',
        amount:70
    },
    {
        description:'Item 4',
        amount:45
    },
    {
        description:'Item 5',
        amount:30
    }
]

const CategoryExpense = [
    {
        description:'Petrol',
        amount:10
    },
    {
        description:'Tea',
        amount:40
    },
    {
        description:'Electronics',
        amount:400
    },
    {
        description:'Decor',
        amount:40
    },
    {
        description:'Books',
        amount:30
    }
]

const Expenses = () => {
        const navigate = useNavigate();
        const [tab, setTab] = useState('categories')
        const Company = {
            name: "Company Name"
        }

        return (

            <>
                <Company_name company_name={Company.name} />
                <Flex >
                    <Slidebar />
                    <Box flex='1' margin='15px'>
                        <Flex p='4' justifyContent='space-between'>
                            <Flex>
                                <Button onClick={()=>setTab('categories')} size='sm'
                                    colorScheme={tab === 'categories'?'blue':'gray'}
                                    borderRadius='0'
                                    width='200px'
                                >
                                    Categories
                                </Button>
                                <Button onClick={()=> setTab('items')} size='sm'
                                    colorScheme={tab === 'items'?'blue':'gray'}
                                    borderRadius='0'
                                    width='200px'
                                >
                                    Items
                                </Button>
                            </Flex>
                            <Button colorScheme='red' onClick={()=>navigate('/add-expense-item')}>Add Expense + </Button>
                        </Flex>
                        <Box p='4' border='1px solid lightgray'>
                            {tab === 'categories' && <ExpenseTab expenses={CategoryExpense}/>}
                            {tab === 'items' && <ExpenseTab expenses={itemExpense}/>}
                        </Box>
                    </Box>
                    
                </Flex>

            </>
        )
    }

export default Expenses





