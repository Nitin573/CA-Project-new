import React, { useState } from 'react';
import { Box, Flex, Heading, Progress, SimpleGrid,Table, Thead, Tbody, Tr, Th, Td, Card } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Layout from './Layout';



const VendorDashboard = () => {
    
    const totalTarget = 1000;
    const achieved = 750;
    const remaining = totalTarget - achieved;
    const achievementPercentage = (achieved / totalTarget) * 100;
  
    const [activeIndex, setActiveIndex] = useState(null);
  
    const targetData = [
      { name: 'Total Target', value: totalTarget },
      { name: 'Achieved', value: achieved },
      { name: 'Remaining', value: remaining },
    ];
  
    const handleClick = (data, index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Vendor Performance',
        data: [65, 59, 80, 81, 56, 55],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  const achievementData = [
    { name: 'January', value: 50 },
    { name: 'February', value: 75 },
    { name: 'March', value: 60 },
  ];
  const incentiveData = [
      { month: 'January', incentive: '$1000' },
      { month: 'February', incentive: '$1200' },
      { month: 'March', incentive: '$1100' },
  ];
  const holidayData = [
      { date: '2023-08-15', name: 'Independence Day' },
      { date: '2023-12-25', name: 'Christmas' },
      { date: '2023-01-01', name: 'New Year' },
  ];


  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Layout>
      <Box p="2" width='100%'>
      <Heading as="h2" size="lg" mb="4">
        Vendor Working Performance
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb='4'>
        <Card p="4" boxShadow="md">
          <Heading as="h3" size="md" mb="2">
            Target
          </Heading>
          <SimpleGrid columns={1} spacing={4}>
            <Box>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart width={400} height={300} data={targetData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="value"
                    fill="#8884d8"
                    onClick={handleClick}
                    onMouseLeave={() => setActiveIndex(null)}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
            {/* {targetData.map((dataPoint, index) => (
              <Box key={index} textAlign="center">
                <p>{dataPoint.name}</p>
                {activeIndex === index && <p>{dataPoint.value}</p>}
              </Box>
            ))} */}
          </SimpleGrid>
        </Card>
        <Card p="4" boxShadow="md">
          <Heading as="h3" size="md" mb="2">
            Achievement
          </Heading>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart width={500} height={300} data={achievementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card p="4" boxShadow="md">
          <Heading as="h3" size="md" mb="2">
            Incentive
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Month</Th>
                <Th>Incentive</Th>
              </Tr>
            </Thead>
            <Tbody>
              {incentiveData.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.month}</Td>
                  <Td>{item.incentive}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Card>
        <Card p="4" colSpan={{ base: 1, md: 2 }} boxShadow="md">
          <Heading as="h3" size="md" mb="2">
            Holidays
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Holiday Name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {holidayData.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.date}</Td>
                  <Td>{item.name}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Card>
      </SimpleGrid>
      <Card p="4" boxShadow="md" width="100%" alignItems='center' justifyContent='center'>
        <Heading as="h3" size="md" mb="2">
          Working Performance graph
        </Heading>
        <Flex justifyContent="center">
          <Box w="100%" width={{base:'300px', md:'500px' }}  height='auto'> {/* Set a minimum width here */}
            <Line data={data} options={options} />
          </Box>
        </Flex>
      </Card>

      </Box>
    </Layout>
  );
};

export default VendorDashboard;
