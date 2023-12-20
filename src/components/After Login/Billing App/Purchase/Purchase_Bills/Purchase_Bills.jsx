import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  TableContainer,
} from '@chakra-ui/react';
import { FaPrint, FaSearch, FaShare } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPurchaseAction,
  postPurchaseAction,
} from '../../../../../Redux/Purchase/purchase.action';
import { userDetails } from '../../../../../Redux/config/Commen';
import Company_name from '../../Company_name/Company_name';
import Slidebar from '../../Slidebar/Slidebar';
import { useNavigate } from 'react-router-dom';

const Purchase_Bills = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const { firmId } = useSelector((store) => store.FirmRegistration);
  const { purchaseData } = useSelector((store) => store.purchaseReducer);
  const Company = {
    name: 'Company Name',
  };

  useEffect(() => {
    dispatch(getPurchaseAction(userDetails?.token, firmId));
  }, [dispatch, firmId]);

  const filteredData = Array.isArray(purchaseData)
    ? purchaseData.filter((data) =>
        data.partyName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const totalSum = Array.isArray(purchaseData)
    ? purchaseData.reduce((total, data) => {
        const totalAmountForAllItems = data?.items.reduce((itemTotal, item) => {
          if (!isNaN(item.totalAmount)) {
            return itemTotal + parseFloat(item.totalAmount);
          } else {
            return itemTotal; // Skip NaN values
          }
        }, 0);

        if (!isNaN(totalAmountForAllItems)) {
          return total + totalAmountForAllItems;
        } else {
          return total; // Skip NaN values in the total calculation
        }
      }, 0)
    : 0;

  const renderData = searchQuery ? filteredData : purchaseData;

  const handleAddPurchase = () => {
    navigate('/add-purchase');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Company_name company_name={Company.name} />
      <Flex>
        <Slidebar />
        <Box flex='1' margin='15px'>
          <Flex p='4' justifyContent='space-between'>
            <Heading size='md'>Purchase List</Heading>
            <Button colorScheme='red' onClick={handleAddPurchase}>
              Add Purchase +
            </Button>
          </Flex>
          <TableContainer marginX='15px' boxShadow='md'>
            <Flex justifyContent='space-between' marginX='15px' my='1'>
              <InputGroup width='40%'>
                <Input
                  size='sm'
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder='Search Party'
                />
                <InputLeftElement mt='-1'>
                  <FaSearch />
                </InputLeftElement>
              </InputGroup>
              <Flex justifyContent='flex-end' ml='4'>
                <Text mr='2'>Total Purchase : </Text>
                <Text color='blue'>₹ {totalSum}</Text>
              </Flex>
            </Flex>
            <Table>
              <Thead>
                <Tr>
                  <Th style={{ border: '0.1px solid lightgray' }}>Party Name</Th>
                  <Th style={{ border: '0.1px solid lightgray' }}>Date</Th>
                  <Th style={{ border: '0.1px solid lightgray' }}>Total Amount</Th>
                  <Th style={{ border: '0.1px solid lightgray' }}>Due Amount</Th>
                  <Th style={{ border: '0.1px solid lightgray' }}>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Array.isArray(renderData) && renderData.length > 0 ? (
                  renderData.map((data) => {
                    const totalAmountForItem = data?.items.reduce(
                      (total, item) => total + parseFloat(item.totalAmount),
                      0
                    );
                    const date = new Date(data?.date);
                    const formattedDate = date.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    });
                    return (
                      <Tr key={data.id}>
                        <Td style={{ border: '0.1px solid lightgray' }}>
                          {data?.partyName}
                        </Td>
                        <Td style={{ border: '0.1px solid lightgray' }}>
                          {formattedDate}
                        </Td>
                        <Td style={{ border: '0.1px solid lightgray' }}>
                          ₹ {totalAmountForItem}
                        </Td>
                        <Td style={{ border: '0.1px solid lightgray' }}>
                          ₹ {data?.dueAmount}
                        </Td>
                        <Td style={{ border: '0.1px solid lightgray' }}>
                          <Flex gap='8px'>
                            <FaShare />
                            <FaPrint />
                          </Flex>
                        </Td>
                      </Tr>
                    );
                  })
                ) : (
                  <Tr>
                    <Td colSpan={5}>No data available</Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </>
  );
};

export default Purchase_Bills;