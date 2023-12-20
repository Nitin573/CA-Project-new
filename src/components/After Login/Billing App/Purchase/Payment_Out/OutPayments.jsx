import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import {
    getPurchaseOutAction
} from "../../../../../Redux/Purchaseout/purchaseout.action";
import { getPartiesAction } from '../../../../../Redux/Parties/parties.action';
import { userDetails } from '../../../../../Redux/config/Commen';



const parties = [
    { id: 1, name: "Party 1", date: '28-08-2023', totalAmount: 1500, dueAmount: 300 },
    { id: 2, name: "Party 2", date: '27-08-2023', totalAmount: 2000, dueAmount: 400 },
    { id: 3, name: "Party 3", date: '27-08-2023', totalAmount: 1200, dueAmount: 100 },
    { id: 4, name: "Party 4", date: '25-08-2023', totalAmount: 800, dueAmount: 200 },
];

const OutPayments = () => {
    const navigate = useNavigate();
    const [selectedParty, setSelectedParty] = useState('All Parties');
    const token = localStorage.getItem("token");
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const { firmId } = useSelector((store) => store.FirmRegistration);
    const { purchaseOutData } = useSelector((store) => store.purchaseoutReducer);
    const [selectedDateFilter, setSelectedDateFilter] = useState('Select Date');
    const dispatch = useDispatch();
    const { getPartiesData } = useSelector((store) => store.partiesReducer);

    useEffect(()=>{
        dispatch(getPartiesAction(userDetails?.token, firmId));
    },[])

    // console.log(getPartiesData , "<<<getPartiesData");
    const handlePartySelect = (e) => {
        setSelectedParty(e.target.value);
    };

    const filteredParties = selectedParty === 'All Parties'
        ? parties
        : parties.filter(party => party.name === selectedParty);

    useEffect(() => {
        dispatch(getPurchaseOutAction(token, firmId))
    }, [firmId])

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };


    const dateFilterOptions = [
        { label: 'All Dates', value: 'All Dates' },
        { label: 'Today', value: 'Today' },
        { label: 'This Week', value: 'This Week' },
        { label: 'This Month', value: 'This Month' },
        { label: 'This Quarter', value: 'This Quarter' },
    ];

    const filterDataByDate = (selectedFilter) => {
        const currentDate = new Date();
        switch (selectedFilter) {
            case 'Today':
                return purchaseOutData.filter((party) => {
                    const partyDate = new Date(party.date);
                    return (
                        partyDate.getDate() === currentDate.getDate() &&
                        partyDate.getMonth() === currentDate.getMonth() &&
                        partyDate.getFullYear() === currentDate.getFullYear()
                    );
                });
            case 'This Week':
                const startOfWeek = new Date(currentDate);
                startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Start of the week (Sunday)
                const endOfWeek = new Date(currentDate);
                endOfWeek.setDate(startOfWeek.getDate() + 7); // End of the week (Sunday of next week)
                return purchaseOutData.filter((party) => {
                    const partyDate = new Date(party.date);
                    return partyDate >= startOfWeek && partyDate < endOfWeek;
                });
            case 'This Month':
                const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
                const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
                return purchaseOutData.filter((party) => {
                    const partyDate = new Date(party.date);
                    return partyDate >= startOfMonth && partyDate <= endOfMonth;
                });
            case 'This Quarter':
                const currentQuarter = Math.floor(currentDate.getMonth() / 3); // Get current quarter (0, 1, 2, or 3)
                const startOfQuarter = new Date(currentDate.getFullYear(), currentQuarter * 3, 1);
                const endOfQuarter = new Date(currentDate.getFullYear(), currentQuarter * 3 + 3, 0);
                return purchaseOutData.filter((party) => {
                    const partyDate = new Date(party.date);
                    return partyDate >= startOfQuarter && partyDate <= endOfQuarter;
                });
            default:
                return purchaseOutData;
        }
    };

    const filterStartDateByEndDate = () => {
        return purchaseOutData?.filter((party) => {
            const partyDate = new Date(party.date);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;

            if (start && end) {
                // Filter between start and end dates
                return partyDate >= start && partyDate <= end;
            } else if (start) {
                // Filter from start date onwards
                return partyDate >= start;
            } else if (end) {
                // Filter up to end date
                return partyDate <= end;
            } else {
                // No date filter
                return true;
            }
        });
    }
    // console.log("🚀 ~ file: OutPayments.jsx:135 ~ filterDataByDate ~ filterDataByDate:", filterDataByDate())
    // console.log("🚀 ~ file: OutPayments.jsx:139 ~ filterStartDateByEndDate ~ filterStartDateByEndDate:", filterStartDateByEndDate)

    const handleDateFilterChange = (e) => {
        setSelectedDateFilter(e.target.value);
    };

    const calculateTotalAmount = () => {
        return filterStartDateByEndDate().reduce((total, party) => total + party.total_amount, 0);
    };

    const calculateTotalBalance = () => {
        let totalBalance = 0;
        filterStartDateByEndDate().forEach((party) => {
          totalBalance += party.total_amount - party.paid_amount;
        });
        return totalBalance;
      };

    return (
        <>
            <Box flex='1' width='100%'>
                <Flex p='4' justifyContent='space-between'>
                    <Heading size='md'>Payment-Outs</Heading>
                    <Button colorScheme='green' onClick={() => navigate('/add-payment-out')}>Add Payment-Out + </Button>
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
                            defaultValue='All Dates'
                            value={selectedDateFilter}
                            onChange={handleDateFilterChange}
                        >
                            {dateFilterOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Select>
                        <Flex>
                            <Input type='date' size='sm' mr='2' value={startDate}
                                onChange={(e) => setStartDate(e.target.value)} />
                            <Text size='lg' mr='2'>to</Text>
                            <Input type='date' size='sm' mr='4' value={endDate}
                                onChange={(e) => setEndDate(e.target.value)} />
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
                            {getPartiesData?.map((party) => (
                                <option key={party?._id} value={party?.partyName}>
                                    {party?.partyName}
                                </option>
                            ))}
                        </Select>
                    </Flex>
                </Flex>

                {/* three boxes */}
                <Flex margin='15px' flex='1'>
                    <Box border='0.1px solid lightgray'
                        boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        height='80px'
                        width='100%'
                        p='2'
                    >
                        <Text>No of Txn</Text>
                        <Text fontSize='20px' mt='-2'>{filterStartDateByEndDate().length  || 0}</Text>
                    </Box>
                    <Box border='0.1px solid lightgray'
                        boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        ml='4'
                        height='80px'
                        width='100%'
                        p='2'
                    >
                        <Text>Total Amount</Text>
                        <Text fontSize='20px' mt='-2'>₹ { calculateTotalAmount() || 0 } </Text>
                    </Box>
                    <Box border='0.1px solid lightgray'
                        boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        ml='4'
                        height='80px'
                        width='100%'
                        p='2'
                    >
                        <Text>Total Balance</Text>
                        <Text fontSize='20px' mt='-2'>₹ { calculateTotalBalance() || 0 } </Text>
                    </Box>
                </Flex>
                <TableContainer marginX='15px' boxShadow='md' mt='2'
                >
                    <Table>
                        <Thead>
                            <Tr>
                                <Th style={{ border: '0.1px solid lightgray' }}>Party Name</Th>
                                <Th style={{ border: '0.1px solid lightgray' }}>Date</Th>
                                <Th style={{ border: '0.1px solid lightgray' }}>Total Amount</Th>
                                <Th style={{ border: '0.1px solid lightgray' }}>Due Amount</Th>
                                <Th style={{ border: '0.1px solid lightgray' }}>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filterStartDateByEndDate().map((party) => (
                                <Tr>
                                    <Td style={{ border: '0.1px solid lightgray' }}>
                                        {party?.party_name}
                                    </Td>
                                    <Td style={{ border: '0.1px solid lightgray' }}>
                                        {formatDate(party.date)}
                                    </Td>
                                    <Td style={{ border: '0.1px solid lightgray' }}>
                                        ₹ {party?.total_amount}
                                    </Td>
                                    <Td style={{ border: '0.1px solid lightgray' }}>
                                        ₹ {party?.total_amount - party?.paid_amount}
                                    </Td>
                                    <Td style={{ border: '0.1px solid lightgray' }}>
                                        <Flex gap='8px'>
                                            <FaShare />
                                            <FaPrint />
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

export default OutPayments