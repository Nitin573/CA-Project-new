import { Box, Text, Flex, Link, Table, Thead, Tbody, Tr, Th, Td, Icon, TableContainer, TableCaption, Heading, Divider } from '@chakra-ui/react';
import { FiDownload, FiShare2 } from 'react-icons/fi'; // Import the icons
import React, { useEffect } from 'react';
import Company_name from '../Company_name/Company_name';
import Slidebar from '../Slidebar/Slidebar';
import { useDispatch, useSelector } from 'react-redux';
import {
  getInduvidualPartiesAction
} from "../../../../Redux/Parties/parties.action";
import { useParams } from 'react-router-dom';

const PartyInvoice = () => {
  const Company = {
    name: "Company Name",
  };

  const partyData = {
    id: "P12345",
    name: "ABC Corporation",
    gst: "GST12345678",
    phone: "123-456-7890",
    email: "abc@gmail.com",
    billingAddress: "123 Main street, City, state, pincode",
    shippingAddress: "456 Secondary Street, Town, state, pincode",
    invoices: [
      {
        invoiceNo: "INV2023001",
        invoiceDate: "2023-08-23",
        paidAmount: 0,
        dueAmount: 0,
      },
      {
        invoiceNo: "INV2023002",
        invoiceDate: "2023-08-30",
        paidAmount: 0,
        dueAmount: 0,
      },
      // ...other invoices...
    ],
  };

  const calculateTotal = (key) => {
    return partyData.invoices.reduce((total, invoice) => total + invoice[key], 0);
  };

  const { firmId } = useSelector((store) => store.FirmRegistration);
  const dispatch = useDispatch();
  const { induvidualParty } = useSelector((store) => store.partiesReducer);
  // console.log("🚀 ~ file: PartyInvoice.jsx:49 ~ PartyInvoice ~ getPartiesData:", induvidualParty)
  const { id } = useParams();

  const totalPaidAmount = calculateTotal("paidAmount");
  const totalDueAmount = calculateTotal("dueAmount");
  const userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) ?JSON.parse(sessionStorage.getItem("companyDetails")):null

  useEffect(() => {
    dispatch(getInduvidualPartiesAction(userDetails?.token, firmId , id));
  }, [firmId]);

  return (
    <>
     
      <Company_name company_name={Company.name} />
      <Flex>
        <Slidebar />
        <Box bg="white" py="4" px="6" minH="80vh" flex="1" boxShadow="md">
          {/* basic details */}
          <Flex p="4">
            {/* party details */}
            <Box flex="1" textAlign='left' justifyContent='space-between'>
              {/* <Text fontSize="lg" fontWeight="semibold">Party Details</Text> */}
              <Text mt="2">
                <strong>Party ID: </strong> {induvidualParty?._id}
              </Text>
              <Text>
                <strong>Party Name: </strong> {induvidualParty?.partyName}
              </Text>
              <Text>
                <strong>GST No.: </strong> {induvidualParty?.GSTNo} (gst type)
              </Text>
              <Text>
                <strong>Phone: </strong> {induvidualParty?.phoneNumber}
              </Text>
              <Text>
                <strong>Email: </strong> {induvidualParty?.email}
              </Text>
            </Box>
            {/* total paid & due amounts */}
            <Box
            flex="0.8"
            justifyContent="center"
            border="1px solid #E2E8F0"
            borderRadius="1rem"
            alignItems="center"
            display="flex"
            flexDirection="column"
            height='100%'
            py='4'
            >
              {/* total due */}
              <Text fontSize="md" fontWeight="semibold">
                Total Due Amount
              </Text>
              <Box
                border="1px solid #A0AEC0"
                borderRadius="5px"
              >
                <Text color="blue.600" fontSize="lg" mb='0' pb='0' px='6'>
                  {totalDueAmount} ₹
                </Text>
              </Box>
              {/* total paid */}
              <Text fontSize="md" fontWeight="semibold" mt='4'>
                Total Paid Amount
              </Text>
              <Box
                border="1px solid #A0AEC0"
                borderRadius="5px"
              >
                <Text color="blue.600" fontSize="lg" mb='0' pb='0' px='6'>
                {totalPaidAmount} ₹
                </Text>
              </Box>
            </Box>

            {/* addresses */}
            <Box flex="1" textAlign='center'>
              <Flex direction='column'>
                <Text fontSize='md' fontWeight='semibold'>Billing Address</Text>
                <Text mt="2" px='12'>
                  {induvidualParty?.billingAddress}
                </Text>
              </Flex>
              <Flex direction='column'>
                <Text fontSize='md' fontWeight='semibold'> Shipping Address</Text>
                <Text px='12'>
                  {induvidualParty?.shippingAddress}
                </Text>
              </Flex>
            </Box>
          </Flex>
          {/* Invoice Details */}
          <Divider/>
          <Text fontSize="xl" fontWeight="semibold" textAlign='left' mt='2'>Invoice Details</Text>
          <TableContainer bg="white" boxShadow="md">
            <Table variant="simple" w="full">
            <Thead>
              <Tr>
                <Th style={{ border: '1px solid gray' }}>Invoice No.</Th>
                <Th style={{ border: '1px solid gray' }}>Invoice Date</Th>
                <Th style={{ border: '1px solid gray' }}>Paid Amount</Th>
                <Th style={{ border: '1px solid gray' }}>Due Amount</Th>
                <Th style={{ border: '1px solid gray' }}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
            {induvidualParty?.invoices?.map((invoice, index) => (
            <Tr key={index}>
              <Td style={{ border: '1px solid gray' }}>{invoice.invoiceNo}</Td>
              <Td style={{ border: '1px solid gray' }}>{invoice.invoiceDate}</Td>
              <Td style={{ border: '1px solid gray' }}>{invoice.paidAmount} ₹</Td>
              <Td style={{ border: '1px solid gray' }}>{invoice.dueAmount} ₹</Td>
              <Td style={{ border: '1px solid gray' }}>
                <Link color="blue.500" mr="2" textDecoration='underline'>
                  view
                </Link>
                <Link color="blue.500" mr="2">
                  <Icon as={FiDownload} />
                </Link>
                <Link color="blue.500">
                  <Icon as={FiShare2} />
                </Link>
              </Td>
            </Tr>
            ))}
            </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    
      
    </>
  );
}

export default PartyInvoice;