import React, { useState } from 'react'
import Company_name from '../../Company_name/Company_name'
import Slidebar from '../../Slidebar/Slidebar'
import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Input, InputRightAddon, InputGroup, Select, Text } from '@chakra-ui/react'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

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
    reverseCharge:'10%',
    taxRate:'20%',
    invoiceType:'XYZ',
    eCommerceGSTIN:'SAMSDDSN',
    rate: 10,
    taxableValue:100,
    cessAmount:1020
  },
  {
    gstIn_UIN_No: '1',
    receiverName: 'aa',
    invoiceDate: '20-08-2023',
    invoiceValue: 20,
    placeOfSupply: 'SAMSDDSN',
    reverseCharge:'10%',
    taxRate:'20%',
    invoiceType:'XYZ',
    eCommerceGSTIN:'SAMSDDSN',
    rate: 10,
    taxableValue:100,
    cessAmount:1020
  },
  {
    gstIn_UIN_No: '1',
    receiverName: 'aa',
    invoiceDate: '20-08-2023',
    invoiceValue: 20,
    placeOfSupply: 'SAMSDDSN',
    reverseCharge:'10%',
    taxRate:'20%',
    invoiceType:'XYZ',
    eCommerceGSTIN:'SAMSDDSN',
    rate: 10,
    taxableValue:100,
    cessAmount:1020
  },

]

const headers = [
    "Invoice No. of Reg Recipient",
    "Invoice Date",
    "Invoice Value",
    "Place of Supply",
    "Rate",
    "Taxable Value",
    "Integrated Tax Paid",
    "Cess Paid",
    "Eligibility For ITC",
    "Availed ITC Integrated Tax",
    "Availed ITC Cess"
  ];

const GSTR2_imps = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState(tableData);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setSearchData(tableData.filter((data) =>
      data.name.toLowerCase().includes(searchQuery.toLowerCase())
    ))
  }

  const handleRowClick = (reportNo) => {
    navigate('/individual-report')
  }
  return (
    <>

      <Box Flex='1' padding='15px'
      >
        <Heading size='md' mt='2'>GSTR2 IMPS</Heading>
        <Flex alignItems='right' position='absolute' right="230" top="140">
        <Button fontSize={"10px"} bg={"blue.400"} marginLeft="10px">Print</Button>
                    <Button fontSize={"10px"} bg={"blue.400"} marginLeft="10px">Excel</Button>
                    </Flex>
        <Flex justifyContent='space-between' alignItems='center'
          margin='30px'
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Flex>
            <Input type='date' size='sm' mr='2' />
            <Text size='lg' mr='2'>to</Text>
            <Input type='date' size='sm' mr='4' />
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
              {headers.map((header, index) => (
                                    <Th key={index} style={{ border: '1px solid gray' }}>
                                        {header}
                                    </Th>
                                ))}
              </Tr>
            </Thead>
            <Tbody>
              {tableData?.map((data) => (
                <Tr onClick={() => handleRowClick(data.reportNo)} style={{ cursor: 'pointer' }}
                >
                  <Td style={{ border: '1px solid gray' }}>{data.gstIn_UIN_No}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.receiverName}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.invoiceDate}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.invoiceValue} </Td>
                  <Td style={{ border: '1px solid gray' }}>{data.placeOfSupply}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.reverseCharge}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.taxRate}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.invoiceType}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.eCommerceGSTIN}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.rate}</Td>
                  <Td style={{ border: '1px solid gray' }}>{data.taxableValue}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default GSTR2_imps;