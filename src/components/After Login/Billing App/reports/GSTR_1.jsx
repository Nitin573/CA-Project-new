import React, { useState } from 'react'
import Company_name from '../Company_name/Company_name'
import Slidebar from '../Slidebar/Slidebar'
import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Input, InputRightAddon, InputGroup, Select, Text } from '@chakra-ui/react'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import GSTR1_b2b from "./GstR1_Reports/GSTR1_b2b";
import GSTR1_b2ba from "./GstR1_Reports/GSTR1_b2ba";
import GSTR1_b2cl from "./GstR1_Reports/GSTR1_b2cl";
import GSTR1_b2cla from "./GstR1_Reports/GSTR1_b2cla";
import GSTR1_b2cs from "./GstR1_Reports/GSTR1_b2cs";
import GSTR1_b2csa from "./GstR1_Reports/GSTR1_b2csa";
import GSTR1_cdnr from "./GstR1_Reports/GSTR1_cdnr";
import GSTR1_cdnra from "./GstR1_Reports/GSTR1_cdnra";
import GSTR1_cdnur from "./GstR1_Reports/GSTR1_cdnur";
import GSTR1_cdnura from "./GstR1_Reports/GSTR1_cdnura";
import GSTR1_exp from "./GstR1_Reports/GSTR1_exp";
import GSTR1_expa from "./GstR1_Reports/GSTR1_expa";
import GSTR1_at from "./GstR1_Reports/GSTR1_at";
import GSTR1_ata from "./GstR1_Reports/GSTR1_ata";
import GSTR1_atadj from "./GstR1_Reports/GSTR1_atadj";
import GSTR1_atadja from "./GstR1_Reports/GSTR1_atadja";
import GSTR1_exemp from "./GstR1_Reports/GSTR1_exemp";
import GSTR1_hsn from "./GstR1_Reports/GSTR1_hsn";
import GSTR1_docs from "./GstR1_Reports/GSTR1_docs";

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

const GSTR_1 = () => {
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

      <Box Flex='1' padding='15px'>
        {/* <Heading size='md' mt='2'> GSTR1 Reports</Heading> */}
        <Flex alignItems='right' position='absolute' right="230" top="140">
          <Button fontSize={"10px"} bg={"blue.400"} marginLeft="10px">Print</Button>
          <Button fontSize={"10px"} bg={"blue.400"} marginLeft="10px">Excel</Button>
        </Flex>
        <Box p={4}>
          <Button onClick={() => handleOpenScreen("screen1")} mb={2} mr={2}>
            GSTR1 b2b
          </Button>
          <Button onClick={() => handleOpenScreen("screen2")} mb={2} mr={2}>
            GSTR1 b2ba
          </Button>
          <Button onClick={() => handleOpenScreen("screen3")} mb={2} mr={2}>
            GSTR1 b2cl
          </Button>
          <Button onClick={() => handleOpenScreen("screen4")} mb={2} mr={2}>
            GSTR1 b2cla
          </Button>
          <Button onClick={() => handleOpenScreen("screen5")} mb={2} mr={2}>
            GSTR1 b2cs
          </Button>
          <Button onClick={() => handleOpenScreen("screen6")} mb={2} mr={2}>
            GSTR1 b2csa
          </Button>
          <Button onClick={() => handleOpenScreen("screen7")} mb={2} mr={2}>
            GSTR1 cdnr
          </Button>
          <Button onClick={() => handleOpenScreen("screen8")} mb={2} mr={2}>
            GSTR1 cdnra
          </Button>
          <Button onClick={() => handleOpenScreen("screen9")} mb={2} mr={2}>
            GSTR1 cdnur
          </Button>
          <Button onClick={() => handleOpenScreen("screen10")} mb={2} mr={2}>
            GSTR1 cdnura
          </Button>
          <Button onClick={() => handleOpenScreen("screen11")} mb={2} mr={2}>
            GSTR1 exp
          </Button>
          <Button onClick={() => handleOpenScreen("screen12")} mb={2} mr={2}>
            GSTR1 expa
          </Button>
          <Button onClick={() => handleOpenScreen("screen13")} mb={2} mr={2}>
            GSTR1 at
          </Button>
          <Button onClick={() => handleOpenScreen("screen14")} mb={2} mr={2}>
            GSTR1 ata
          </Button>
          <Button onClick={() => handleOpenScreen("screen15")} mb={2} mr={2}>
            GSTR1 atadj
          </Button>
          <Button onClick={() => handleOpenScreen("screen16")} mb={2} mr={2}>
            GSTR1 atadja
          </Button>
          <Button onClick={() => handleOpenScreen("screen17")} mb={2} mr={2}>
            GSTR1 exemp
          </Button>
          <Button onClick={() => handleOpenScreen("screen18")} mb={2} mr={2}>
            GSTR1 hsn
          </Button>
          <Button onClick={() => handleOpenScreen("screen19")} mb={2} mr={2}>
            GSTR1 docs
          </Button>
          {currentScreen === null && <GSTR1_b2b />}
          {currentScreen === "screen1" && <GSTR1_b2b />}
          {currentScreen === "screen2" && <GSTR1_b2ba />}
          {currentScreen === "screen3" && <GSTR1_b2cl />}
          {currentScreen === "screen4" && <GSTR1_b2cla />}
          {currentScreen === "screen5" && <GSTR1_b2cs />}
          {currentScreen === "screen6" && <GSTR1_b2csa />}
          {currentScreen === "screen7" && <GSTR1_cdnr />}
          {currentScreen === "screen8" && <GSTR1_cdnra />}
          {currentScreen === "screen9" && <GSTR1_cdnur />}
          {currentScreen === "screen10" && <GSTR1_cdnura />}
          {currentScreen === "screen11" && <GSTR1_exp />}
          {currentScreen === "screen12" && <GSTR1_expa />}
          {currentScreen === "screen13" && <GSTR1_at />}
          {currentScreen === "screen14" && <GSTR1_ata />}
          {currentScreen === "screen15" && <GSTR1_atadj />}
          {currentScreen === "screen16" && <GSTR1_atadja />}
          {currentScreen === "screen17" && <GSTR1_exemp />}
          {currentScreen === "screen18" && <GSTR1_hsn />}
          {currentScreen === "screen19" && <GSTR1_docs />}
        </Box>
        {/* <Flex justifyContent='space-between' alignItems='center'
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
                  <Td style={{ border: '1px solid gray' }}>{data.cessAmount}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer> */}
      </Box>
    </>
  )
}

export default GSTR_1