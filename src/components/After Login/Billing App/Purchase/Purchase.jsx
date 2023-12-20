import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, Tbody, Td, Text, Th, Thead, Tr, useDisclosure,
  TableContainer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company_name/Company_name';
import remove from '../../../assets/remove.png';
import print4 from '../../../assets/print4.png';
import { getPurchaseAction, postPurchaseAction, deletePurchaseAction } from '../../../../Redux/Purchase/purchase.action';

const Purchase = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const firmId = useSelector((state) => state.auth.firmId);
  const purchaseData = useSelector((state) => state.purchase.purchaseData);

  useEffect(() => {
    dispatch(getPurchaseAction(token, firmId));
  }, [dispatch, token, firmId]);

  const modal1 = useDisclosure();
  const [newItem, setNewItem] = React.useState({
    name: '',
    quantity: '',
    price: '',
    tax: '',
    total: '',
  });

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    const newPurchase = {
      name: newItem.name,
      quantity: newItem.quantity,
      price: newItem.price,
      tax: newItem.tax,
      total: newItem.total,
    };

    dispatch(postPurchaseAction(newPurchase, token, firmId));
    setNewItem({
      name: '',
      quantity: '',
      price: '',
      tax: '',
      total: '',
    });
    modal1.onClose();
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deletePurchaseAction(token, itemId, firmId));
  };

  return (
    <>
      <Company_name company_name="Company Name" />

      <Flex>
        <Slidebar />
        <Box margin="auto" marginTop="20px" overflow="hidden" width="80%">
          <Button backgroundColor="blue.400" width="100px" margin="10px" onClick={modal1.onOpen}>
            Add +
          </Button>
          <TableContainer width="100%">
            <Table width="100%">
              <Thead>
                <Tr>
                  <Th isNumeric>Invoice No</Th>
                  <Th>Item Name</Th>
                  <Th isNumeric>Quantity</Th>
                  <Th isNumeric>Price/Unit <br /> With Out Tax</Th>
                  <Th isNumeric>Tax</Th>
                  <Th isNumeric>Amount</Th>
                  <Th>Print</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {purchaseData.map((data) => (
                  <Tr key={data.id}>
                    <Td isNumeric>{data.id}</Td>
                    <Td>{data.Name}</Td>
                    <Td isNumeric>{data.quantity}</Td>
                    <Td isNumeric>{data.price}</Td>
                    <Td isNumeric>{data.tax}</Td>
                    <Td isNumeric>{data.total}</Td>
                    <Td>
                      <Image src={print4} width="20px" borderRadius="50%" />
                    </Td>
                    <Td>
                      <Image
                        src={remove}
                        width="20px"
                        borderRadius="50%"
                        onClick={() => handleDeleteItem(data.id)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl margin="10px">
                <FormLabel>Item Name :</FormLabel>
                <Input type="text" name="name" placeholder="Item Name" value={newItem.name} onChange={handleInputChange} />
              </FormControl>
              <FormControl margin="10px">
                <FormLabel>Item Quantity :</FormLabel>
                <Input type="number" name="quantity" placeholder="Item Quantity" value={newItem.quantity} onChange={handleInputChange} />
              </FormControl>
              <FormControl margin="10px">
                <FormLabel>Item Price :</FormLabel>
                <Input type="number" name="price" placeholder="Item Price" value={newItem.price} onChange={handleInputChange} />
              </FormControl>
              <FormControl margin="10px">
                <FormLabel>Tax :</FormLabel>
                <Input type="number" name="tax" placeholder="Tax" value={newItem.tax} onChange={handleInputChange} />
              </FormControl>
              <FormControl margin="10px">
                <FormLabel>Total :</FormLabel>
                <Input type="number" name="total" placeholder="Total" value={newItem.total} onChange={handleInputChange} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={modal1.onClose}>
                Close
              </Button>
              <Button colorScheme="green" onClick={handleAddItem}>
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export default Purchase;