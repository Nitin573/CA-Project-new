
import React, { useEffect, useState } from 'react'

import Company_name from '../Company_name/Company_name'
import Slidebar from '../Slidebar/Slidebar'
import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Input, InputRightAddon, InputGroup, Select, Text } from '@chakra-ui/react'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getReport } from '../../../../Redux/Report/Report.Action';



const Company = {
  name: "Company Name"
}

// sale -> receivedAmount- sale
// transaction-> paidAmount - purchase
// const Company = {
//     name: "Company Name"
// }


const PartyProfitLoss = () => {

  const dispatch = useDispatch();
  const AllTransactionData = useSelector((state) => state.reportReducer.reportData?.user);//replace this
  const [filteredAllTransactionData, setFilteredAllTransactionData] = useState(AllTransactionData);

  
  const { firmId } = useSelector((store) => store.FirmRegistration);
 
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
  
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');

  const [selectedDateOption, setSelectedDateOption] = useState('default');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleDateOptionChange = (e) => {
      const selectedOption = e.target.value;

      setSelectedDateOption(selectedOption);

      // Define the current date
      const currentDate = new Date().toISOString().split('T')[0];
      if (selectedOption === 'default') {
          setFilteredAllTransactionData(AllTransactionData);
      } else if (selectedOption === 'Custom') {
          // For "Custom" option, do not set "filteredAllTransactionData" here, just update the "fromDate" and "toDate" values

      } else {
          // Map date options to their respective values
          const dateOptions = {
              Today: { from: currentDate, to: currentDate },
              'This week': {
                  from: getDatesOfCurrentWeek(currentDate).startDate,
                  to: getDatesOfCurrentWeek(currentDate).endDate,
              },
              'This Month': {
                  from: getThisMonthStartAndEndDate(currentDate).startDate,
                  to: getThisMonthStartAndEndDate(currentDate).endDate,
              },
              'This Quarter': {
                  from: getThisQuarterStartAndEndDate(currentDate).startDate,
                  to: getThisQuarterStartAndEndDate(currentDate).endDate,
              },
              'This Financial Year': {
                  from: getThisYearStartAndEndDate(currentDate).startDate,
                  to: getThisYearStartAndEndDate(currentDate).endDate,
              },
          };

          // Set the 'from' and 'to' dates based on the selected option
          setFromDate(dateOptions[selectedOption].from);
          setToDate(dateOptions[selectedOption].to);

          setFilteredAllTransactionData(filterDataByCustomDate(dateOptions[selectedOption].from, dateOptions[selectedOption].to));

      }

  };

  const handleFromDateChange = (e) => {
      setFromDate(e.target.value);
      if (selectedDateOption === 'Custom') {
          setFilteredAllTransactionData(filterDataByCustomDate(e.target.value, toDate));
      }
  };

  const handleToDateChange = (e) => {
      setToDate(e.target.value);
      if (selectedDateOption === 'Custom') {
          setFilteredAllTransactionData(filterDataByCustomDate(fromDate, e.target.value));
      }
  };

  const filterDataByCustomDate = (startDate, endDate) => {
      const newData = AllTransactionData?.filter((item) => {
          const itemDate = new Date(item.invoiceDate).toISOString().split('T')[0];
          return itemDate >= startDate && itemDate <= endDate;
      });
      return newData;
  };

  const isCustomDateSelected = selectedDateOption === 'Custom';

  function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}-${month}-${day}`;
  }

  // Function to get the start date of the current week
  const getDatesOfCurrentWeek = (date) => {
      const currentDate = new Date(date); // Use the provided date or the current date by default
      const currentDay = currentDate.getDay(); // Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
      const daysToSunday = currentDay === 0 ? 0 : 7 - currentDay - 2; // Calculate the number of days to Sunday

      // Clone the current date and subtract the days to Monday to get the start date of the week
      const startDate = new Date(currentDate);
      startDate.setDate(currentDate.getDate() - daysToSunday);

      // Format the date as "yyyy-MM-dd"

      // Calculate the end date of the week
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 6);
      return {
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
      };
  };

  // Function to get the start date of the current month
  function getThisMonthStartAndEndDate(date) {
      const currentDate = new Date(date);
      const currentMonth = currentDate.getMonth(); // Get the current month (0-11)

      // Get the start date of the month
      const startDate = new Date(currentDate.getFullYear(), currentMonth, 1);

      // Get the end date of the month
      const endDate = new Date(currentDate.getFullYear(), currentMonth + 1, 0);

      // Return the start and end dates
      return {
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
      };
  }

  // Function to get the start date of the current quarter
  function getThisQuarterStartAndEndDate() {
      const currentDate = new Date();
      const currentQuarter = Math.floor(currentDate.getMonth() / 3) + 1; // Get the current quarter (1-4)

      // Get the start date of the quarter
      const startDate = new Date(currentDate.getFullYear(), currentQuarter * 3 - 3, 1);

      // Get the end date of the quarter
      const endDate = new Date(currentDate.getFullYear(), currentQuarter * 3, 0);

      // Return the start and end dates
      return {
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
      };
  }
  // Function to get the start date of the current quarter

  function getThisYearStartAndEndDate() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();

      // Get the start date of the year
      const startDate = new Date(currentYear, 0, 1);

      // Get the end date of the year
      const endDate = new Date(currentYear, 11, 31);

      return {
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
      };
  }

  const handleSearch = (e) => {
      const query = e.target.value.toLowerCase();
      setSearchQuery(query);

      if (query === '') {
          // If the search query is empty, reset the filtered data based on the selected date option
          handleDateOptionChange({ target: { value: selectedDateOption } });
      } else {
          // Filter the data based on the search query
          setFilteredAllTransactionData(AllTransactionData?.filter((data) =>
              data.shipToCustomerName && data.shipToCustomerName.toLowerCase().includes(query)
          ));
      }
  }

  const handleRowClick = (invoiceId, query) => {


      navigate(`/billing-software/${invoiceId}`);


  };
  const handleEditClick = (invoiceId) => {


      navigate(`/billing-software/${invoiceId}?q=edit`);

  };


  const totalTransactions = filteredAllTransactionData?.length || 0;
  const totalSales = filteredAllTransactionData?.reduce((acc, data) => acc + (data.finalAmount || 0), 0) || 0;
  const totalDue = filteredAllTransactionData?.reduce((acc, data) => acc + (data.dueAmount || 0), 0) || 0;

  console.log(totalTransactions, totalSales, totalDue)

 
      return (
        <>
    
          <Box Flex='1' padding='15px'
          >
            <Heading size='md' mt='2'> Party Profit/Loss Reports</Heading>
            <Flex alignItems='right' position='absolute' right="230" top="140">
              <Button fontSize={"10px"} bg={"blue.400"} marginLeft="10px">Print</Button>
              <Button fontSize={"10px"} bg={"blue.400"} marginLeft="10px">Excel</Button>
            </Flex>
    
           
            <Flex justifyContent='space-between' alignItems='center'
                    margin='30px'
                    flexDirection={{ base: 'column', md: 'row' }}
                >
                    <Select
                        width="40%"
                        size="sm"
                        mr="2"
                        mt="-2"
                        rightIcon={<ChevronDownIcon />}
                        value={selectedDateOption}
                        onChange={handleDateOptionChange}
                    >
                        <option value="default">All </option>
                        <option value="Today">Today</option>
                        <option value="This week">This Week</option>
                        <option value="This Month">This Month</option>
                        <option value="This Quarter">This Quarter</option>
                        <option value="This Financial Year">This Financial Year</option>
                        <option value="Custom">Custom</option>
                    </Select>
                    <Flex>
                        <Input
                            type="date"
                            size="sm"
                            mr="2"
                            value={fromDate}
                            onChange={handleFromDateChange}
                            disabled={!isCustomDateSelected}
                        />
                        <Text size="lg" mr="2">
                            to
                        </Text>
                        <Input
                            type="date"
                            size="sm"
                            mr="4"
                            value={toDate}
                            onChange={handleToDateChange}
                            disabled={!isCustomDateSelected}
                        />
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
                    </InputGroup >
                    <Select
                        mt='-1'
                        ml='-10'
                        width='35%'
                        size='sm'
                        rightIcon={<ChevronDownIcon />}
                        defaultValue='default'
                        placeholder="Select Txns type & Parties "
                    >
                        <optgroup label='Txns Type'>
                            <option>Sale & Cr. Note</option>
                            <option>Sale</option>
                            <option>Credit Note</option>
                        </optgroup>
                        <optgroup label='Party'>
                            <option>aa</option>
                            <option>bb</option>
                            <option>cc</option>
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
                      PHONE NUMBER
                    </Th>
                    <Th style={{ border: '1px solid gray' }}>
                      TOTAL SALE AMOUNT
                    </Th>
                    <Th style={{ border: '1px solid gray' }}>PROFIT(+)/LOSS(-)</Th>
                   
                  </Tr>
                </Thead>
                <Tbody>
                            {filteredAllTransactionData?.map((data) => (
                                <Tr key={data._id} style={{ cursor: 'pointer' }}
                                >
                                    
                                   
                                    <Td style={{ border: '1px solid gray' }} onClick={() => handleRowClick(data.invoiceNo)}>{data.finalAmount} ₹</Td>
                                    <Td style={{ border: '1px solid gray' }} onClick={() => handleRowClick(data.invoiceNo)}>{data.dueAmount} </Td>
                                    <Td style={{ border: '1px solid gray' }} onClick={() => handleRowClick(data.invoiceNo)}>{new Date(data.dueDate).toLocaleDateString()}
                                    </Td>
                                    <Td onClick={() => handleEditClick(data.invoiceNo)} style={{ border: '1px solid gray' }}
                                    >
                                        Edit
                                    </Td>
                                    <Td onClick={() => {
                                        // Log the data when the "Delete" button is clicked
                                        console.log(data);
                                    }}
                                        style={{ border: '1px solid gray' }}>
                                        Delete
                                    </Td>
                                </Tr>
                            ))}
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
                  <Text textAlign='left' textColor='black' fontSize='20px' fontWeight='semibold' mt='3' >Profit/Loss Summary</Text> <br />
                </Box>
                <Box>
                  <Flex justifyContent='space-between'>
                    <Box >
                      <Flex>
                        <Text textColor='black' fontSize='15px' fontWeight='semibold'>Total Sale Amount: </Text>
                        <Text textColor='black' fontSize='15px' fontWeight='semibold' >  ₹{totalSales}</Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex>
                        <Text textColor='black' fontSize='15px' fontWeight='semibold'>Total Profit(+)/Loss(-) :  </Text>
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

export default PartyProfitLoss