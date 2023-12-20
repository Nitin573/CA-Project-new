import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStockAction,
  postStockAction,
  deleteStockAction,
} from "../../../../Redux/Stocks/stock.action";

const TableOptions = () => {
  const modal1 = useDisclosure();
  const dispatch = useDispatch();
  const { firmId } = useSelector((store) => store.FirmRegistration);
  const stockData = useSelector((store) => store.stockReducer.getStockData);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsData, setSelectedItemsData] = useState([]);
  const userDetails =
    JSON.parse(sessionStorage.getItem("companyDetails")) || {};
  const { token } = userDetails;

  useEffect(() => {
    dispatch(getStockAction(userDetails?.token, firmId));
  }, [firmId]);

  const openAddItemModal = () => {
    modal1.onOpen();
  };

  const handleItemsAdd = () => {
    // Handle the logic for adding selected items
    console.log("Selected Items:", selectedItems);
    console.log("Selected Items Data:", selectedItemsData);
    modal1.onClose();
  };

  const handleCheckboxChange = (itemId) => {
    // Toggle the selected state of the item
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });

    // Set the details of the selected items
    const selectedItem = stockData.find((item) => item._id == itemId);
    setSelectedItemsData((prevSelectedItemsData) => {
      const updatedSelectedItemsData = [...prevSelectedItemsData];
      const existingItemIndex = updatedSelectedItemsData.findIndex(
        (item) => item._id == itemId
      );

      if (existingItemIndex != -1) {
        // If item data exists, update it
        updatedSelectedItemsData[existingItemIndex] = selectedItem;
      } else {
        // If item data doesn't exist, add it
        updatedSelectedItemsData.push(selectedItem);
      }

      return updatedSelectedItemsData;
    });
  };

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Button size="sm" colorScheme="gray" variant="none">
        Line Count 23
      </Button>
      <Button
        size="sm"
        colorScheme="gray"
        variant="outline"
        onClick={openAddItemModal}
      >
        Add New Line
      </Button>
      <Button
        size="sm"
        colorScheme="gray"
        variant="outline"
        onClick={modal1.onOpen}
      >
        Add Item
      </Button>
      <Button size="sm" colorScheme="gray" variant="outline">
        Update Bill
      </Button>
      <Button size="sm" colorScheme="gray" variant="outline">
        Delete Item
      </Button>

      {/* Add Item Modal */}
      <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
        <ModalOverlay />
        <ModalContent maxWidth="80%">
          <ModalHeader>Add New Item</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Select</Th>
                  <Th>Item ID</Th>
                  <Th>Item Name</Th>
                  <Th>Category</Th>
                  <Th>Quantity</Th>
                  <Th>Item Price</Th>
                  <Th>GST</Th>
                  <Th>Total Price</Th>
                </Tr>
              </Thead>
              <Tbody>
                {stockData.map((item) => (
                  <Tr key={item._id}>
                    <Td>
                      <Checkbox
                        isChecked={selectedItems.includes(item._id)}
                        onChange={() => handleCheckboxChange(item._id)}
                      />
                    </Td>
                    <Td>{item._id}</Td>
                    <Td>{item.brand}</Td>
                    <Td>{item.category}</Td>
                    <Td>{item.stockQuantity}</Td>
                    <Td>{item.cost}</Td>
                    <Td>{item.gstRate}</Td>
                    <Td>{item.price * item.stockQuantity}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={modal1.onClose}>
              Close
            </Button>
            <Button colorScheme="green" onClick={handleItemsAdd}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default TableOptions;
