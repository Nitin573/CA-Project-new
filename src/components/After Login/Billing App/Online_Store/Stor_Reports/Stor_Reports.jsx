
// import React from 'react'
// import {
//     Box, Button, Flex, HStack, Image, Input, Select, Text, VStack, Wrap, Heading, List,
//     ListItem,
//     ListIcon,
//     OrderedList,

//     UnorderedList,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     AspectRatio,
//     useDisclosure,

// } from '@chakra-ui/react'
// import { Link } from "react-router-dom";
// import Slidebar from '../../Slidebar/Slidebar';
// import Company_name from '../../Company_name/Company_name'
// import Online_Store from "../Online_Store"


// const Stor_Reports = () => {

//         const Company = {
//             name: "Company Name"
//         }

//         return (

//             <>
//                 {/* <Company_name company_name={Company.name} />

//                 <Flex >
//                     <Slidebar />
//                 </Flex> */}
//                 <Online_Store/>

//             </>
//         )
//     }

// export default Stor_Reports



import React from 'react';
import Slidebar from '../../Slidebar/Slidebar';
import Company_name from '../../Company_name/Company_name';
import {
  Box, Flex, VStack, Wrap, Heading, Text, List,
  ListItem, ListIcon, OrderedList, UnorderedList, AspectRatio,
  useDisclosure, Button, HStack, Modal,Table, Thead,Tbody,Td,Tr,Th,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';

// monthly data
const salesData = [
  { date: '2023-08', totalAmount: 500 },
  { date: '2023-09', totalAmount: 800 },
  { date: '2023-10', totalAmount: 600 },
  { date: '2023-11', totalAmount: 900 },
  { date: '2023-12', totalAmount: 700 },
];

const purchasesData = [
  { date: '2023-08', totalAmount: 200 },
  { date: '2023-09', totalAmount: 300 },
  { date: '2023-10', totalAmount: 250 },
  { date: '2023-11', totalAmount: 400 },
  { date: '2023-12', totalAmount: 300 },
];

// Function to calculate profit/loss data
const calculateProfitLossData = () => {
  return salesData.map((sale) => ({
    date: sale.date,
    profitLoss: sale.totalAmount - (purchasesData.find((purchase) => purchase.date === sale.date)?.totalAmount || 0),
  }));
};

// Function to calculate balance data
const calculateBalanceData = () => {
  const profitLossData = calculateProfitLossData();
  return salesData.map((sale) => ({
    date: sale.date,
    balance: sale.totalAmount - profitLossData.find((pl) => pl.date === sale.date)?.profitLoss,
  }));
};

// Function to calculate monthly summary
const calculateMonthlySummary = () => {
  const profitLossData = calculateProfitLossData();
  const balanceData = calculateBalanceData();

  return salesData.map((sale) => {
    const purchase = purchasesData.find((purchase) => purchase.date === sale.date) || { totalAmount: 0 };
    const profitLoss = profitLossData.find((pl) => pl.date === sale.date)?.profitLoss || 0;
    const balance = balanceData.find((balance) => balance.date === sale.date)?.balance || 0;

    return {
      date: sale.date,
      totalSales: sale.totalAmount,
      totalPurchases: purchase.totalAmount,
      profitLoss,
      balance,
    };
  });
};

const Stor_Reports = () => {

  const monthlySummaryData = calculateMonthlySummary();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const Company = {
    name: "Company Name"
  }

  return (
    <>
    <Company_name company_name={Company.name} />
      <Flex>
        <Slidebar/>
        {/* Our Monthly Report */}
        <Box flex='1' minWidth={0} pt={6}>

          {/* Main heading */}
          {/* <Box p={4} bgGradient="linear(to-r, teal.500, teal.300)">
            <Heading as="h1" size="lg" color="white" textAlign="center">
              Monthly Reports for {Company.name}
            </Heading>
          </Box> */}
          
          <Flex direction={{ base: 'column', md: 'row' }} mb={6} justifyContent={'space-around'}>

            {/* Sales Chart */}
            <Box width={{ base: '98%', md: '48%', lg: '48%' }} boxShadow="md" borderRadius="md" bg="teal.50" p={4}>
              <Heading size="lg" mb={2} color="teal.600" fontWeight="bold">
                Sales Chart
              </Heading>
            <ResponsiveContainer width="100%" height={300}>

              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="totalAmount" stroke="#8884d8" name="Total Sales" />
              </LineChart>

            </ResponsiveContainer>

            </Box>

            {/* Purchases Chart */}
            <Box width={{ base: '98%', md: '48%', lg: '48%' }} boxShadow="md" borderRadius="md" bg="teal.50" p={4}>
              <Heading size="lg" mb={2} color="teal.600" fontWeight="bold">
                Purchases Chart
              </Heading>
            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={purchasesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalAmount" fill="#82ca9d" name="Total Purchases" />
              </BarChart>

            </ResponsiveContainer>
            </Box>

          </Flex>

          <Flex direction={{ base: 'column', md: 'row' }} mb={6} justifyContent={'space-around'}>

            {/* Profit/Loss Chart */}
            <Box width={{ base: '98%', md: '48%', lg: '48%' }} boxShadow="md" borderRadius="md" bg="teal.50" p={4}>
              <Heading size="lg" mb={2} color="teal.600" fontWeight="bold">
                Profit/Loss Chart
              </Heading>
            <ResponsiveContainer width="100%" height={300}>

              <LineChart data={calculateProfitLossData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="profitLoss" stroke="#8884d8" name="Profit/Loss" />
              </LineChart>
            </ResponsiveContainer>
            </Box>

            {/* Balance Chart */}
            <Box width={{ base: '98%', md: '48%', lg: '48%' }} boxShadow="md" borderRadius="md" bg="teal.50" p={4}>
              <Heading size="lg" mb={2} color="teal.600" fontWeight="bold">
                Balance Chart
              </Heading>
            <ResponsiveContainer width="100%" height={300}>

              <LineChart data={calculateBalanceData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="balance" stroke="#82ca9d" name="Balance" />
              </LineChart>
            </ResponsiveContainer>
            </Box>
          </Flex>

          {/* Monthly Summary */}
          <Box mb={6} mt={8} boxShadow="md" borderRadius="md" p={4} flex="1" overflowX='auto'>
            <Heading size="lg" mb={2} color="purple.600" fontWeight="bold" borderBottom="2px" pb={1}>
              Monthly Summary
            </Heading>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>Month</Th>
                  <Th>Total Sales</Th>
                  <Th>Total Purchases</Th>
                  <Th>Profit/Loss</Th>
                  <Th>Balance</Th>
                </Tr>
              </Thead>
              <Tbody>
                {monthlySummaryData.map((summary) => (
                  <Tr key={summary.date}>
                    <Td>{summary.date}</Td>
                    <Td>${summary.totalSales}</Td>
                    <Td>${summary.totalPurchases}</Td>
                    <Td>${summary.profitLoss}</Td>
                    <Td>${summary.balance}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
        
      </Flex>
    </>
  );
};

export default Stor_Reports;
