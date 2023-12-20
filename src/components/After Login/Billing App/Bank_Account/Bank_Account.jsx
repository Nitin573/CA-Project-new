import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Select,
  Text,
  VStack,
  Wrap,
  Heading,
  List,
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slidebar from "../Slidebar/Slidebar";
import Company_name from "../Company_name/Company_name";
const Bank_Account = () => {
  const Company = {
    name: "Company Name",
  };
  return (
    <>
      <Company_name company_name={Company.name} />

      <Flex>
        <Slidebar />
        <Box margin={"auto"} padding={"5px"}>
          <Heading fontSize={"18px"}>Banking With Us</Heading>
          <HStack
            padding={"5px"}
            margin="auto"
            gap={"10px"}
            flexDirection={{ base: "column", md: "column", lg: "row" }}
          >
            <Box
              background={"orange"}
              padding={"15px"}
              minHeight="210px"
              maxWidth="350px"
              borderRadius={"10px"}
            >
              <Heading fontSize={"15px"}>
                Print Bank Details on Invoices
              </Heading>
              <Text color={"black"}>
                Print account details on your invoices and get payments via
                NEFT/RTGS/IMPS etc.
              </Text>
            </Box>

            <Box
              background={"orange"}
              padding={"15px"}
              minHeight="210px"
              maxWidth="350px"
              borderRadius={"10px"}
            >
              <Heading fontSize={"15px"}>Connect Bank Online</Heading>
              <Text color={"black"}>
                Get transactions and balance in real time on Vyapar from your
                bank.
              </Text>
            </Box>

            <Box
              background={"orange"}
              padding={"15px"}
              minHeight="210px"
              maxWidth="350px"
              borderRadius={"10px"}
            >
              <Heading fontSize={"15px"}>Receive Online Payments</Heading>
              <Text color={"black"}>
                Print QR code on your invoices or send payment links to your
                customers.
              </Text>
            </Box>
          </HStack>

          <Button background={"red.500"} color={"white"}>
            + Add Account
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Bank_Account;
