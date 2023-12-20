import React, { useState, useEffect } from 'react'
import { Company_name } from '../Company_name/Company_name'
import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Input, InputRightAddon, InputGroup, Select, Text, Center, Link, Icon } from '@chakra-ui/react'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FiDownload, FiShare2 } from 'react-icons/fi';
import { getPartiesStatementByDate, setPartyId } from '../../../../Redux/Partystatement/partystatement.action'
import { store } from '../../../../Store/Store'
import axios from 'axios';
import { getReport } from '../../../../Redux/Report/Report.Action';

import { getAllPartiesAction } from '../../../../Redux/AllPartiesReport/allparties.action';


const Company = {
  name: "Company Name"
}
const tableData = [
  {
    reportNo: '1',
    customerName: 'aa',
    amount: 50,
    balance: 20,
    date: '25-08-2023'
  },
  {
    reportNo: '2',
    customerName: 'bb',
    amount: 40,
    balance: 20,
    date: '23-08-2023'
  },
  {
    reportNo: '3',
    customerName: 'cc',
    amount: 40,
    balance: 20,
    date: '22-08-2023'
  },
  {
    reportNo: '4',
    customerName: 'zz',
    amount: 70,
    balance: 20,
    date: '21-08-2023'
  },

]

const PartyStatement = () => {

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState(tableData);
  const [parties, setParties] = useState([]);
  let [selectedPartyId, setSelectedPartyId] = useState([]);
  const [startDate, setStartDate] = useState(''); // State to store start date
  const [endDate, setEndDate] = useState('');

  
  const { firmId } = useSelector((store) => store.FirmRegistration);
 

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setSearchData(tableData.filter((data) =>
      data.name.toLowerCase().includes(searchQuery.toLowerCase())
    ))
  }

  const handleRowClick = (reportNo) => {
    navigate('/individual-report')
  }

  


  console.log("firmid - 1-", firmId)
 


  const dispatch = useDispatch();


  const handleViewClick = (invoiceId) => {
    navigate(`/party/${invoiceId}`);
  };
  
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = async (e) => {
    setEndDate(e.target.value);
    
    // Trigger the action when the end date is selected
    // if (startDate && e.target.value) {
    //   try {
    //     let userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) || {};
    //     let { token } = userDetails;

    //     if (firmId) {
    //       await dispatch(getPartiesStatementByDate(token, firmId, startDate, e.target.value));
    //     }
    //   } catch (error) {
    //     // Handle errors
    //     console.error("Error fetching party statement:", error);
    //   }
    // }
  };


  // get the party repot information
  const AllTransactionData = useSelector((state) => state.reportReducer.reportData?.user);
  console.log("All transaction data", AllTransactionData);
  const [filteredAllTransactionData, setFilteredAllTransactionData] = useState(AllTransactionData);
  // console.log("filteredAllTransactionData", filteredAllTransactionData)
  
  useEffect(() => {
    let userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) || {};
        let { token } = userDetails;
    dispatch(getReport(token, firmId));
}, [firmId]);

useEffect(() => {
  let userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) || {};
        let { token } = userDetails;
    setFilteredAllTransactionData(AllTransactionData);
}, [AllTransactionData]);

 
const handlePartySelectChange = async (event) => {
  const selectedPartyId = event.target.value;
  setSelectedPartyId(selectedPartyId);

  // Dispatch the action with the selected partyId
  await dispatch(setPartyId(selectedPartyId));

  // Fetch data based on the selected partyId
  if (selectedPartyId) {
    try {
      const userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) || {};
      const { token } = userDetails;

      if (firmId && startDate && endDate) {
        // Assuming you have a function to fetch data based on partyId, startDate, and endDate
        await dispatch(getPartiesStatementByDate(token, firmId, startDate, endDate, selectedPartyId));
      }
    } catch (error) {
      // Handle errors
      console.error("Error fetching party statement:", error);
    }
  }
};


  // for list of party
  let getAllData = useSelector((store) => store.partiesReducer.getPartiesData);
  console.log("getAllData data ", getAllData)

  
// to show the data from party statement

let getData = useSelector((store) => store.partystatementReducer);
console.log("get partystaement data ", getData)



// const totalTransactions = filteredAllTransactionData?.length || 0;
// const totalSales = filteredAllTransactionData?.reduce((acc, data) => acc + (data.finalAmount || 0), 0) || 0;
// const totalDue = filteredAllTransactionData?.reduce((acc, data) => acc + (data.dueAmount || 0), 0) || 0;



  return (
    <>

      <Box Flex='1' padding='15px'
      >
        <Heading size='md' mt='2'> Party Statement Reports</Heading>
        <Flex alignItems='right' position='absolute' right="230" top="140">
          <Button fontSize={"10px"} bg={"blue.400"} marginLeft="10px">Print</Button>
          <Button fontSize={"10px"} bg={"blue.400"} marginLeft="10px">Excel</Button>
        </Flex>

        <Flex justifyContent='space-between' alignItems='center'
          margin='30px'
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Select
            width='32%'
            size='sm'
            mr='2'
            mt='-2'
            rightIcon={<ChevronDownIcon />}
            defaultValue='default'
            placeholder="Select date"
          >
            <option>Today</option>
            <option>This week</option>
            <option>This Month</option>
            <option>This Quarter</option>
            <option>This Financial Year</option>
            <option>Custom</option>
          </Select>
          <Flex>
          <Input type='date' size='sm' mr='2' onChange={handleStartDateChange} />
          <Text size='lg' mr='2'>to</Text>
          <Input type='date' size='sm' mr='4' onChange={handleEndDateChange} />
         
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
          {/* Parties dropdown */}
          <Select
            mt="-1"
            ml="-10"
            width="35%"
            size="sm"
            rightIcon={<ChevronDownIcon />}
            defaultValue={selectedPartyId}
            onChange={handlePartySelectChange}
            placeholder="Select Parties"
          >
            <optgroup label=" Parties Listed ">
              {getAllData.map((party) => (
                <option key={party._id} value={party._id}>
                  {party.partyName}
                </option>
              ))}
            </optgroup>
          </Select>
        </Flex>

        <TableContainer m='2' margin='15px'
          border='0.1px solid lightgray'
          boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
        >
          <Table>
            <Thead>
              <Tr>
                <Th style={{ border: '1px solid gray' }}>
                  Date
                </Th>
                <Th style={{ border: '1px solid gray' }}>
                  TXN TYPE
                </Th>
                <Th style={{ border: '1px solid gray' }}>
                  REF NO.
                </Th>
                <Th style={{ border: '1px solid gray' }}>PAYMENT TYPE</Th>
                <Th style={{ border: '1px solid gray' }}>TOTAL</Th>
                <Th style={{ border: '1px solid gray' }}>RECEIVED/PAID</Th>
                <Th style={{ border: '1px solid gray' }}>TXN BALANCE</Th>
                <Th style={{ border: '1px solid gray' }}>RECEIVEABLE BALANCE</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                <Tr>
                  {/* <Td style={{border:'1px solid gray'}}>
                                       </Td> */}
                  {/* <Td style={{border:'1px solid gray'}}>{}</Td>
                  
                                        <Td style={{border:'1px solid gray'}}></Td>
                                        <Td style={{border:'1px solid gray'}}> </Td>
                                        <Td style={{border:'1px solid gray'}}></Td>
                                        <Td style={{border:'1px solid gray'}}></Td>
                                        <Td style={{border:'1px solid gray'}}></Td> */}
                </Tr>
              }
            </Tbody>
          </Table>

        </TableContainer>

        <Flex>

          <Box border='0.1px solid lightgray'
            boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
            ml='4'
            height='100%'
            width='100%'
            p='2'>
            <Box>
              <Text textAlign='left' textColor='black' fontSize='20px' fontWeight='semibold' mt='3' >Party Statement Summary</Text> <br />
            </Box>
            <Box>
              <Flex justifyContent='space-between'>
                <Box >
                  <Flex>
                    <Text textColor='black' fontSize='15px' fontWeight='semibold'>Total Sale : </Text>
                    <Text textColor='black' fontSize='15px' fontWeight='semibold' >  ₹{ }</Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex>
                    <Text textColor='black' fontSize='15px' fontWeight='semibold'>Total Purchase :  </Text>
                    <Text textColor='black' fontSize='15px' fontWeight='semibold' >  ₹ { }</Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex>
                    <Text textColor='black' fontSize='15px' fontWeight='semibold' marginRight='30'>Total Expense : </Text>
                    <Text textColor='black' fontSize='15px' fontWeight='semibold'> ₹ { }</Text>
                  </Flex>
                </Box>

              </Flex>
              <Flex justifyContent='space-between'>
                <Box>
                  <Flex>
                    <Text textColor='black' fontSize='15px' fontWeight='semibold'>Total Money-In :  </Text>
                    <Text textColor='black' fontSize='15px' fontWeight='semibold'>₹{ }</Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex>
                    <Text textColor='black' fontSize='15px' fontWeight='semibold' marginRight='30'>Total Money-out : </Text>
                    <Text textColor='black' fontSize='15px' fontWeight='semibold' >₹{ }</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Text textColor='black' fontSize='15px' fontWeight='semibold'>Total Receiveable :  </Text>
                <Text textColor='black' fontSize='15px' fontWeight='semibold'>₹{ }</Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default PartyStatement;
