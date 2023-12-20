import { Flex, Text, Grid } from '@chakra-ui/react';
import React from 'react';

const ExpenseTab = ({ expenses }) => {
        const totalAmount = expenses.reduce((total,exp)=>
            total+exp.amount, 0
        )
  return (
    <>
        <Flex justifyContent='flex-end' mr={{base:'10px', md:'40px'}} mb='-3.5'>
            <Text mr='2' color='gray.900'>Total : </Text>
            <Text color='blue'> ₹ {totalAmount}</Text>
        </Flex>
        <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={6}
        width='100%'
        p='4'
        >
        {expenses.map((exp, index) => (
            <Flex
            key={index}
            border="1px solid lightgray"
            px='4'
            py='2'
            justifyContent="space-between"
            alignItems="center"
            borderRadius='5px'
            >
            <Text color='gray.900' mb='-1'>{exp.description}</Text>
            <Text alignItems='center' color='gray.900' mb='-1'>
                ₹ {exp.amount}
            </Text>
            </Flex>
        ))}
        </Grid>
    </>
  );
};

export default ExpenseTab;
