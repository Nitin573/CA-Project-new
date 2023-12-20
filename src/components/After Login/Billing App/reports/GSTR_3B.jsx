import React, { useState } from 'react'
import Company_name from '../Company_name/Company_name'
import Slidebar from '../Slidebar/Slidebar'
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

const screens = [
  "Screen 1",
  "Screen 2",
  "Screen 3",
  "Screen 4",
  "Screen 5",
];

const GSTR_3B = () => {
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
  const [currentScreen, setCurrentScreen] = useState(null);

  const handleOpenScreen = (screen) => {
    setCurrentScreen(screen);
  };
  return (
    <>
      <Box Flex='1' padding='15px'
      >
        <Heading size='md' mt='2'> GSTR_3B Reports</Heading>
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
          width="1000px"
        >
          <h4 style={{ margin: "10px" }}>Details of outward Supplies and Inward Supplies Liable to reverse charge</h4>
          <Table>
            <Thead>
              <Tr>
                <Th style={{ border: '1px solid gray' }}>Nature of Supplies</Th>
                <Th style={{ border: '1px solid gray' }}>Total Taxable Value</Th>
                <Th style={{ border: '1px solid gray' }}>Integrated Tax</Th>
                <Th style={{ border: '1px solid gray' }}>Central Tax</Th>
                <Th style={{ border: '1px solid gray' }}>State/UT Tax</Th>
                <Th style={{ border: '1px solid gray' }}>CESS</Th>
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
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer m='2' margin='15px'
          border='0.1px solid lightgray'
          boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
          width="1000px"
        >
          <h4 style={{ margin: "10px" }}>Details of Inter-State Supplies Made to Unregistered Persons,Composition dealer and UIN holders</h4>
          <Table>
            <Thead>
              <Tr>
                <Th style={{ border: '1px solid gray' }}>Place of Supply(State/UT)</Th>
                <Th style={{ border: '1px solid gray', textAlign: "center" }}>Supplies Made to Unregisted Persons
                  <Th style={{ border: '1px solid gray' }}>Total Taxable Value</Th>
                  <Th style={{ border: '1px solid gray' }}>Amount of Integrated Tax</Th>
                </Th>
                <Th style={{ border: '1px solid gray', textAlign: "center" }}>Supplies Made to Composition Taxable Persons
                  <Th style={{ border: '1px solid gray' }}>Total Taxable Value</Th>
                  <Th style={{ border: '1px solid gray' }}>Amount of Integrated Tax</Th>
                </Th>
                <Th style={{ border: '1px solid gray', textAlign: "center" }}>Supplies Made to UIN Holders
                  <Th style={{ border: '1px solid gray' }}>Total Taxable Value</Th>
                  <Th style={{ border: '1px solid gray' }}>Total Taxable Value</Th>
                </Th>
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
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <TableContainer m='2' margin='15px'
          border='0.1px solid lightgray'
          boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
          width="1000px"
        >
          <h4 style={{ margin: "10px" }}>Details of Eligible Input Tax Credit</h4>
          <Table>
            <Thead>
              <Tr>
                <Th style={{ border: '1px solid gray' }}>Detail</Th>
                <Th style={{ border: '1px solid gray' }}>Integrated Tax</Th>
                <Th style={{ border: '1px solid gray' }}>Central Tax</Th>
                <Th style={{ border: '1px solid gray' }}>State/UT Tax</Th>
                <Th style={{ border: '1px solid gray' }}>CESS</Th>
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
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <TableContainer m='2' margin='15px'
          border='0.1px solid lightgray'
          boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
          width="1000px"
        >
          <h4 style={{ margin: "10px" }}>Details of Exempt , nil-rated and non-GST inward Supplies</h4>
          <Table>
            <Thead>
              <Tr>
                <Th style={{ border: '1px solid gray' }}>Nature of Supplies</Th>
                <Th style={{ border: '1px solid gray' }}>Inter-State Supplies</Th>
                <Th style={{ border: '1px solid gray' }}>Intra-State Supplies</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr style={{ cursor: 'pointer' }}
              >
                <Td style={{ border: '1px solid gray' }}>From a Supplier under composition scheme,Exempt and Nil Rated Supply</Td>
                <Td style={{ border: '1px solid gray' }}>0.0</Td>
                <Td style={{ border: '1px solid gray' }}>0.0</Td>
              </Tr>
              <Tr style={{ cursor: 'pointer' }}
              >
                <Td style={{ border: '1px solid gray' }}>Non GST Supply</Td>
                <Td style={{ border: '1px solid gray' }}>0.0</Td>
                <Td style={{ border: '1px solid gray' }}>0.0</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default GSTR_3B