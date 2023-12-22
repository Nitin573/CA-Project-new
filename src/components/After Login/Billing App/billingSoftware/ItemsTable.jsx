import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

const ItemsTable = () => {
  // Fetch stored selected items from localStorage
  const storedSelectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    console.log(storedSelectedItems)
  return (
    <TableContainer
      bg="white"
      margin="15px"
      border="0.1px solid lightgray"
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th style={{ border: '1px solid lightgray' }}>Item ID</Th>
            <Th style={{ border: '1px solid lightgray' }}>Item Name</Th>
            <Th style={{ border: '1px solid lightgray' }}>Category</Th>
            <Th style={{ border: '1px solid lightgray' }}>Quantity</Th>
            <Th style={{ border: '1px solid lightgray' }}>Item Price</Th>
            <Th style={{ border: '1px solid lightgray' }}>GST</Th>
            <Th style={{ border: '1px solid lightgray' }}>Total Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {storedSelectedItems.map((item) => (
            <Tr key={item.id} height="50px">
              <Td style={{ border: '1px solid lightgray' }}>{item.id}</Td>
              <Td style={{ border: '1px solid lightgray' }}>{item.name}</Td>
              <Td style={{ border: '1px solid lightgray' }}>{item.category || "-"}</Td>
              <Td style={{ border: '1px solid lightgray' }}>{item.stockQuantity}</Td>
              <Td style={{ border: '1px solid lightgray' }}>{item.price}</Td>
              <Td style={{ border: '1px solid lightgray' }}>{item.gst}%</Td>
              <Td style={{ border: '1px solid lightgray' }}>{item.totalPrice}</Td>
            </Tr>
          ))}
        </Tbody>  
      </Table>
    </TableContainer>
  );
};

export default ItemsTable;
