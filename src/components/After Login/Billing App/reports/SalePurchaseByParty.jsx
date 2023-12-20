import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Input, InputRightAddon, InputGroup, Select, Text } from '@chakra-ui/react'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getReport } from '../../../../Redux/Report/Report.Action';
import { getPartiesStatementByDate, setPartyId } from '../../../../Redux/Partystatement/partystatement.action'
import {getPurchaseReport} from '../../../../Redux/PurchaseReport/PurchaseReport.Action';


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
  

const SalePurchaseByPartyReport = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState(tableData);
    let [selectedPartyId, setSelectedPartyId] = useState([]);
    const [startDate, setStartDate] = useState(''); // State to store start date
    const [endDate, setEndDate] = useState('');
    const dispatch = useDispatch();
    const { firmId } = useSelector((store) => store.FirmRegistration);
    const { getAllSalePurchasePartyData } = useSelector((store) => store.salepurchasebypartyReducer);
    const token = localStorage.getItem("token");
  
    const PurchaseData = useSelector((state) => state.purchaseReportReducer.purchaseReportData?.getAll)
    console.log("PurchaseData", PurchaseData)
    const [filteredPurchaseData, setFilteredPurchaseData] = useState(PurchaseData);

    

    useEffect(() => {
        dispatch(getPurchaseReport(firmId, token));
    }, [firmId,])

    useEffect(() => {
        setFilteredPurchaseData(PurchaseData);
    }, [PurchaseData]);

     
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = async (e) => {
    setEndDate(e.target.value);
  }


    useEffect(() => {
        dispatch(getReport(token, firmId));
    }, [firmId]);

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
  let getAllData = useSelector((store) => store.partystatementReducer. partiesStatementData);
  console.log("getAllData data ", getAllData)
   
    // }

    return (
        <>
    
          <Box Flex='1' padding='15px'
          >
            <Heading size='md' mt='2'> Sale Purchase Report</Heading>
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
              {/* <Input
              placeholder="search..."
              value={searchQuery}
              onChange={handleSearch}
              size='sm'
              width='60%'

            /> */}
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
                      #
                    </Th>
                    <Th style={{ border: '1px solid gray' }}>
                     PARTY NAME
                    </Th>
                    <Th style={{ border: '1px solid gray' }}>
                      SALE AMOUNT
                    </Th>
                    <Th style={{ border: '1px solid gray' }}>PURCHASE AMOUNT</Th>
                    
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
                  <Flex justifyContent='space-between'>
                    <Box >
                      <Flex>
                        <Text textColor='black' fontSize='15px' fontWeight='semibold'>Total Sale Amount : </Text>
                        <Text textColor='black' fontSize='15px' fontWeight='semibold' >  ₹{ }</Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex>
                        <Text textColor='black' fontSize='15px' fontWeight='semibold'>Total Purchase Amount :  </Text>
                        <Text textColor='black' fontSize='15px' fontWeight='semibold' >  ₹ { }</Text>
                      </Flex>
                    </Box>
                   
                  </Flex>
                  
                </Box>
               
              </Box>
            </Flex>
          </Box>
        </>
      );
}

export default SalePurchaseByPartyReport;

