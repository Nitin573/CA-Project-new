import React, { useEffect, useState } from 'react'
import Company_name from '../../Company_name/Company_name'
import Slidebar from '../../Slidebar/Slidebar'
import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Input, InputRightAddon, InputGroup, Select, Text } from '@chakra-ui/react'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getInvoiceAction } from '../../../../../Redux/Invoice/invoice.action'


const Company = {
  name: "Company Name"
}
const tableData = [
  {
    gstIn_UIN_No: '1',
    receiverName: 'aa',
    invoiceDate: '20-08-2023',
    invoiceValue: 20,
    placeOfSupply: 'SAMSDDSN',
    reverseCharge: '10%',
    taxRate: '20%',
    invoiceType: 'XYZ',
    eCommerceGSTIN: 'SAMSDDSN',
    rate: 10,
    taxableValue: 100,
    cessAmount: 1020
  },
  {
    gstIn_UIN_No: '1',
    receiverName: 'aa',
    invoiceDate: '20-08-2023',
    invoiceValue: 20,
    placeOfSupply: 'SAMSDDSN',
    reverseCharge: '10%',
    taxRate: '20%',
    invoiceType: 'XYZ',
    eCommerceGSTIN: 'SAMSDDSN',
    rate: 10,
    taxableValue: 100,
    cessAmount: 1020
  },
  {
    gstIn_UIN_No: '1',
    receiverName: 'aa',
    invoiceDate: '20-08-2023',
    invoiceValue: 20,
    placeOfSupply: 'SAMSDDSN',
    reverseCharge: '10%',
    taxRate: '20%',
    invoiceType: 'XYZ',
    eCommerceGSTIN: 'SAMSDDSN',
    rate: 10,
    taxableValue: 100,
    cessAmount: 1020
  },

]

const GSTR1_b2b = () => {
  const navigate = useNavigate();

  const handleRowClick = (reportNo) => {
    navigate('/individual-report')
  }

  const token = localStorage.getItem("token");
  const { firmId } = useSelector((store) => store.FirmRegistration);
  const { getAllInvoice } = useSelector((store) => store.invoiceReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoiceAction(token, firmId));
  }, [firmId])

  const calculateTaxableValue = (finalAmount, taxRate) => {
    // Calculate the taxable value (invoice value excluding GST)
    const taxRateDecimal = parseFloat(taxRate) / 100;
    const taxableValue = finalAmount / (1 + taxRateDecimal);
    return taxableValue.toFixed(2); // Round to 2 decimal places
  };

  const calculateCessAmount = (finalAmount, taxRate, cessRate) => {
    // Calculate the cess amount (if applicable)
    const taxRateDecimal = parseFloat(taxRate) / 100;
    const cessRateDecimal = parseFloat(cessRate) / 100;
    const taxableValue = calculateTaxableValue(finalAmount, taxRate);
    const cessAmount = (taxableValue * cessRateDecimal).toFixed(2); // Round to 2 decimal places
    return cessAmount;
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState(getAllInvoice);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setSearchData(getAllInvoice?.filter((data) =>
      data?.soldToCustomerName?.toLowerCase().includes(searchQuery?.toLowerCase())
    ))
    setSearchData(
      getAllInvoice?.filter((data) => {
        const lowerCaseName = data?.soldToCustomerName?.toLowerCase();
        const isInDateRange = (
          (!startDate || new Date(data.dueDate) >= new Date(startDate)) &&
          (!endDate || new Date(data.dueDate) <= new Date(endDate))
        );

        return lowerCaseName.includes(searchQuery?.toLowerCase()) && isInDateRange;
      })
    );
  }

  return (
    <>

      <Box Flex='1' padding='15px'
      >
        <Heading size='md' mt='2'> GSTR1 B2B</Heading>
        <Flex alignItems='right' position='absolute' right="230" top="140">
          <Button fontSize={"10px"} bg={"blue.400"} marginLeft="10px">Print</Button>
          <Button fontSize={"10px"} bg={"blue.400"} marginLeft="10px">Excel</Button>
        </Flex>
        <Flex justifyContent='space-between' alignItems='center'
          margin='30px'
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Flex>
            <Flex>
              <Input
                type='date'
                size='sm'
                mr='2'
                value={startDate}
                onChange={(e) => {setStartDate(e.target.value);handleSearch(e)}}
              />
              <Text size='lg' mr='2'>to</Text>
              <Input
                type='date'
                size='sm'
                mr='4'
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Flex>

          </Flex>
          <InputGroup mt='-2'>
            <Input
              placeholder="search..."
              value={searchQuery}
              onChange={handleSearch}
              size='sm'
              width='60%'

            />
            <InputRightAddon size='sm' outline='none' height='32px' mr='-10'>
              <SearchIcon color='black' />
            </InputRightAddon>
          </InputGroup>
        </Flex>
        <TableContainer m='2' margin='15px'
          border='0.1px solid lightgray'
          boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
          width="1100px"
        >
          <Table>
            <Thead>
              <Tr>
                <Th style={{ border: '1px solid gray' }}>GSTIN/UIN of Recipient</Th>
                <Th style={{ border: '1px solid gray' }}>Receiver Name</Th>
                <Th style={{ border: '1px solid gray' }}>Invoice date</Th>
                <Th style={{ border: '1px solid gray' }}>Invoice Value</Th>
                <Th style={{ border: '1px solid gray' }}>Place Of Supply</Th>
                <Th style={{ border: '1px solid gray' }}>Reverse Charge</Th>
                <Th style={{ border: '1px solid gray' }}>Applicable % of Tax Rate</Th>
                <Th style={{ border: '1px solid gray' }}>Invoice Type</Th>
                <Th style={{ border: '1px solid gray' }}>E-Commerce GSTIN</Th>
                <Th style={{ border: '1px solid gray' }}>Rate</Th>
                <Th style={{ border: '1px solid gray' }}>Taxable Value</Th>
                <Th style={{ border: '1px solid gray' }}>Cess Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {searchData?.map((data) => (
                <Tr onClick={() => handleRowClick(data.reportNo)} style={{ cursor: 'pointer' }}
                >
                  <Td style={{ border: '1px solid gray' }}>{data.gstNo}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.soldToCustomerName}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.dueDate}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.finalAmount} </Td>
                  <Td style={{ border: '1px solid gray' }}>{data.placeOfSupply}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.reverseCharge}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.taxRate}</Td>
                  <Td style={{ border: '1px solid gray' }}>SALE</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.eCommerceGSTIN}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.rate}</Td>
                  <Td style={{ border: '1px solid gray' }}>
                    {calculateTaxableValue(data.finalAmount, data.taxRate)}
                  </Td>
                  <Td style={{ border: '1px solid gray' }}>
                    {calculateCessAmount(data.finalAmount, data.taxRate, data.cessRate)}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default GSTR1_b2b;