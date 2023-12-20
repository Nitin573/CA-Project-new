import React, { useState } from 'react';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  IconButton,
  useDisclosure,
  Heading,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const PaymentDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const paymentData = [
    { id: 1, date: '2023-08-10', transactionNumber: 'T123', amount: 100, method: 'Credit Card' },
    { id: 2, date: '2023-08-11', transactionNumber: 'T124', amount: 150, method: 'PayPal' },
    { id: 3, date: '2023-08-12', transactionNumber: 'T125', amount: 200, method: 'Bank Transfer' },
    { id: 4, date: '2023-08-12', transactionNumber: 'T125', amount: 200, method: 'Bank Transfer' },
    { id: 5, date: '2023-08-12', transactionNumber: 'T125', amount: 200, method: 'Bank Transfer' },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = paymentData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = paymentData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Box bg="gray.100" p="4" minH="100vh" m='4'>
      <Card bg="white" boxShadow="lg" borderRadius="md" p="8">
        <Heading as="h1" mb="4" align="left" mt={4} pl={4} color='gray.600'>
          Payment Details
        </Heading>
        <Divider mb={4} style={{ opacity: '0.2' }} />
        <Table variant="simple" mt="4">
          <TableCaption>
            Showing {startIndex + 1} - {Math.min(endIndex, totalItems)} of {totalItems} entries
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Transaction Date</Th>
              <Th>Transaction Number</Th>
              <Th>Amount</Th>
              <Th>Payment Method</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentItems.map((item) => (
              <Tr key={item.id}>
                <Td>{item.date}</Td>
                <Td>{item.transactionNumber}</Td>
                <Td>${item.amount}</Td>
                <Td>{item.method}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Box mt="4" display="flex" justifyContent="space-between">
          <Button
            leftIcon={<ChevronLeftIcon />}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <Button
            rightIcon={<ChevronRightIcon />}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default PaymentDetails;
