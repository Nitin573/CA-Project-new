import {
  Box,
  Text,
  Flex,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Icon,
  TableContainer,
  TableCaption,
  Heading,
  Divider,
  Select,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Company_name from "../../Company_name/Company_name";
import Slidebar from "../../Slidebar/Slidebar";
import AddPurchaseItems from "./AddPurchaseItems";

const options = [1, 2, 3, 4, 5];

const AddPurchaseOrder = () => {
  const [items, setItems] = useState([
    {
      name: "",
      quantity: 0,
      rate: 0,
      amount: 0,
    },
  ]);
  const [orderNo, setOrderNo] = useState(1);
  const [dueDate, setDueDate] = useState(new Date());

  const navigate = useNavigate();
  const Company = {
    name: "Company Name",
  };
  /**
   *   @param {} - action perform to add the new items
   */

  const addRow = () => {
    setItems([
      ...items,
      {
        name: "",
        quantity: 0,
        rate: 0,
        amount: 0,
      },
    ]);
  };

  /**
   * @param {} - saving the items details
   */
  const savePurchaseItems = () => {
    console.log(items, orderNo, dueDate);
  };

  return (
    <>
      <Company_name company_name={Company.name} />
      <Flex>
        <Slidebar />
        <Box bg="white" py="4" px="6" minH="80vh" flex="1" boxShadow="md">
          {/* top box */}
          <Flex
            margin="15px"
            justifyContent="space-between"
            p="4"
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          >
            <Heading size="md" color="gray.500">
              {" "}
              Add Purchase Order{" "}
            </Heading>
            <Flex>
              <Select
                rightIcon={<ChevronDownIcon />}
                placeholder="Order No."
                size="sm"
                value={orderNo}
                onChange={(e) => setOrderNo(e?.target?.value)}
              >
                {options.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </Select>
              <Input ml="4" type="date" placeholder="Select date" size="sm" />
            </Flex>
          </Flex>

          {/* Mid */}
          <Box
            margin="15px"
            mt="4"
            p="2"
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          >
            <Flex justifyContent="space-between">
              <Flex margin="15px" justifyContent="center" width="40%">
                <Text mr="4" mt="1">
                  {" "}
                  Party Name :{" "}
                </Text>
                <Input placeholder="Enter Party Name" size="sm" width="60%" />
              </Flex>
              <Flex margin="15px" justifyContent="center" width="40%">
                <Text mr="4" mt="1">
                  {" "}
                  Due Date :{" "}
                </Text>
                <Input
                  placeholder="Due Date"
                  size="sm"
                  type="date"
                  width="45%"
                  value={dueDate}
                  onChange={(e) => setDueDate(e?.target?.value)}
                />
              </Flex>
            </Flex>
            <Divider />
            <Flex justifyContent="space-between" margin="15px">
              <Heading size="sm"> Add Items </Heading>
              <Button
                onClick={addRow}
                colorScheme="teal"
                size="sm"
                title="add row"
              >
                + New Item
              </Button>
            </Flex>
            <Table>
              <Thead>
                <Tr>
                  <Th style={{ border: "1px solid gray" }}>ID</Th>
                  <Th style={{ border: "1px solid gray" }}>Item Name</Th>
                  <Th style={{ border: "1px solid gray" }}>Qty</Th>
                  <Th style={{ border: "1px solid gray" }}>Rate</Th>
                  <Th style={{ border: "1px solid gray" }}>Amount</Th>
                  <Th style={{ border: "1px solid gray" }}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {items.map((row, index) => (
                  <AddPurchaseItems
                    key={index}
                    index={index}
                    items={items}
                    setItems={setItems}
                  />
                ))}
              </Tbody>
            </Table>
            <Flex justifyContent="flex-end" margin="15px">
              <Text mr="2"> Total Amount (₹): </Text>
              <Text fontSize="md" color="blue">
                {" "}
                0{" "}
              </Text>
            </Flex>
          </Box>
          {/* Buttons */}
          <Flex margin="30px">
            <Button mr="4" size="md">
              Save & New
            </Button>
            <Button mr="4" size="md" onClick={savePurchaseItems}>
              Save
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default AddPurchaseOrder;
