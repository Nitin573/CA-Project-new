import React from 'react';
import {
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
const TransactionTable = ({ transactions }) => {
  
  return (
    <TableContainer overflow={"scroll"}>
    <Table>
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Invoice No.</Th>
          <Th>Party Name</Th>
          <Th>Transaction Type</Th>
          <Th>Payment Type</Th>
          <Th>Amount</Th>
          <Th>Balance</Th>
        </Tr>
      </Thead>
      <Tbody>
        {transactions.map((transaction, index) => (
          <Tr key={index}>
            <Td>{transaction.date}</Td>
            <Td>{transaction.invoiceNumber}</Td>
            <Td>{transaction.partyName}</Td>
            <Td>{transaction.transactionType}</Td>
            <Td>{transaction.paymentType}</Td>
            <Td>{transaction.amount}</Td>
            <Td>{transaction.balance}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
  );
};

export default TransactionTable;
