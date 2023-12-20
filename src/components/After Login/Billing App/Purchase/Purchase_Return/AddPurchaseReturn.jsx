import React, { useState } from 'react';
import { Box, Text, Flex, Select, Input, Button, Table, Thead, Tbody, Tr, Th, Td, Heading, Divider } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaTrash } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';

import Company_name from '../../Company_name/Company_name';
import Slidebar from '../../Slidebar/Slidebar';
import { postPurchaseReturnAction } from "../../../../../Redux/PurchaseReturn/purchaseReturn.action";


const AddPurchaseReturn = () => {
  const [rows, setRows] = useState([{ idNumber: 1 }]);
  const [totalAmount, setTotalAmount] = useState(0);
  const token = localStorage.getItem("token");
  const { firmId } = useSelector((store) => store.FirmRegistration);
  const dispatch = useDispatch();

  const Company = {
    name: "Company Name",
  };

  const addRow = () => {
    const newRow = { idNumber: rows.length + 1, itemName: '', qty: '', rate: '', totalAmount: 0 };
    setRows([...rows, newRow]);
  };

  const deleteRow = (rowId) => {
    const updatedRows = rows.filter((row) => row.idNumber !== rowId);

    // Update the idNumber of remaining rows
    const updatedRowsWithNewIds = updatedRows.map((row, index) => ({
      ...row,
      idNumber: index + 1,
    }));

    setRows(updatedRowsWithNewIds);
    const updatedTotalAmount = updateTotalAmount(updatedRowsWithNewIds);

    // Update the billedItems and totalAmount in the formData state
    setFormData({
      ...formData,
      billedItems: updatedRowsWithNewIds,
      totalAmount: updatedTotalAmount,
    });
  };

  const updateTotalAmount = (updatedRows) => {
    // Calculate the total amount based on updated rows
    const total = updatedRows.reduce((acc, row) => {
      const amount = row.qty * row.rate;
      return acc + amount;
    }, 0);
    setTotalAmount(total);

    return total; // Return the calculated total amount
  };


  const [formData, setFormData] = useState({
    partyName: '',
    phoneNo: '',
    billNo: '',
    billDate: '',
    billedItems: [],
    totalAmount: 0,
    firmId: firmId // Make sure you fetch this from Redux
  });




  const handleInputChange = (e, field, rowId) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value,
      billedItems: rows,
    });
  };

  const handleTableChange = (e, field, rowId) => {
    const updatedRows = rows.map((row) => {
      if (row.idNumber === rowId) {
        // Update the specific field of the row
        const updatedRow = { ...row, [field]: e.target.value };
        updatedRow.totalAmount = updatedRow.qty * updatedRow.rate; // Recalculate the total amount
        return updatedRow;
      }
      return row;
    });
    setRows(updatedRows);
    const updatedTotalAmount = updateTotalAmount(updatedRows);

    // Update the billedItems array and totalAmount in the formData state
    setFormData({
      ...formData,
      billedItems: updatedRows,
      totalAmount: updatedTotalAmount,
    });
  };

  const handleClick = async () => {
    // Save the data (e.g., dispatch an action)
    await dispatch(postPurchaseReturnAction(formData, token, firmId));
    // Clear the form by resetting the formData state using a callback
    setFormData({
      partyName: '',
      phoneNo: '',
      billNo: '',
      billDate: '',
      billedItems: [{ idNumber: 1, itemName: '', qty: '', rate: '', totalAmount: 0 }],
      totalAmount: 0,
      firmId: '' // You may fetch this from Redux
    });

    // Reset the rows to contain only one row
    setRows([{ idNumber: 1 }]);

    // Reset the totalAmount to 0
    setTotalAmount(0);

    // Clear the UI input values
    document.querySelectorAll('input[type="text"]').forEach((input) => {
      input.value = '';
    });
    document.querySelectorAll('input[type="number"]').forEach((input) => {
      input.value = '';
    });
    document.querySelectorAll('input[type="date"]').forEach((input) => {
      input.value = '';
    });
    const select = document.querySelector('select'); // Assuming there's only one <Select> in the component
    if (select) {
      select.value = ''; // Set it to the initial placeholder or default value
    }
  };

  return (
    <>
      <Company_name company_name={Company.name} />
      <Flex>
        <Slidebar />
        <Box bg="white" py="4" px="6" minH="80vh" flex="1" boxShadow="md">
          {/* top box */}
          <Flex margin='15px' justifyContent='space-between'
            p='4'
            boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
          >
            <Heading size='md' color='gray.500'> Add Purchase Item </Heading>
            <Flex>
              <Select
                rightIcon={<ChevronDownIcon />}
                placeholder='GST No.'
                size='sm'
                onChange={(e) => handleInputChange(e, "gstNo")}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
              <Input
                ml='4'
                type='date'
                placeholder='Select date'
                size='sm'
                onChange={(e) => handleInputChange(e, "gstDate")}

              />
            </Flex>
          </Flex>

          {/* Mid */}
          <Box margin='15px' mt='4' p='2'
            boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
          >
            <Flex justifyContent='space-between' mt='1'>
              <Flex justifyContent='center' width='40%'>
                <Text mr='4' textAlign='left' mt='1' fontWeight='semibold'> Party Name : </Text>
                <Input type="text" placeholder='Enter Party Name' size='sm' width='60%' onChange={(e) => { handleInputChange(e, "partyName") }} name="partyName" />
              </Flex>
              <Flex justifyContent='center' width='40%'>
                <Text mr='4' textAlign='left' mt='1' fontWeight='semibold'> Phone No : </Text>
                <Input placeholder='Enter Contact Number' size='sm'
                  type='number' width='60%' onChange={(e) => { handleInputChange(e, "phoneNo") }}
                />
              </Flex>
            </Flex>
            <Flex justifyContent='space-between' mt='1'>
              <Flex justifyContent='center' width='40%'>
                <Text mr='4' textAlign='left' mt='1' fontWeight='semibold'>
                  Bill Date : </Text>
                <Input placeholder='Bill Date' size='sm' width='60%' type='date' onChange={(e) => handleInputChange(e, "billDate")}
                />
              </Flex>
              <Flex justifyContent='center' width='40%'>
                <Text mr='4' textAlign='left' mt='1' fontWeight='semibold'> Bill No : </Text>
                <Input placeholder='Enter Bill Number' size='sm'
                  type='number' width='60%' onChange={(e) => handleInputChange(e, "billNo")}
                />
              </Flex>
            </Flex>
            <Divider />
            <Flex justifyContent='space-between' margin='15px'>
              <Heading size='sm'> Billed Items </Heading>
              <Button onClick={addRow} colorScheme='teal' size='sm' title='add row'>
                + New Item
              </Button>
            </Flex>
            <Table>
              <Thead>
                <Tr>
                  <Th style={{ border: '1px solid gray' }}>ID</Th>
                  <Th style={{ border: '1px solid gray' }}>Item Name</Th>
                  <Th style={{ border: '1px solid gray' }}>Qty</Th>
                  <Th style={{ border: '1px solid gray' }}>Rate</Th>
                  <Th style={{ border: '1px solid gray' }}>Amount</Th>
                  <Th style={{ border: '1px solid gray' }}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {rows.map((row) => (
                  <Tr key={row.idNumber}>
                    <Td style={{ border: '1px solid gray' }}>{row.idNumber}</Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        type='text'
                        variant='unstyled'
                        placeholder='Item Name'
                        value={row.itemName}
                        onChange={(e) => handleTableChange(e, 'itemName', row.idNumber)}
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        type='number'
                        variant='unstyled'
                        placeholder='Qty'
                        value={row.qty}
                        onChange={(e) => handleTableChange(e, 'qty', row.idNumber)}
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        type='number'
                        variant='unstyled'
                        placeholder='Enter Rate'
                        value={row.rate}
                        onChange={(e) => handleTableChange(e, 'rate', row.idNumber)}
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='Enter Amount'
                        value={row.qty * row.rate}
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <FaTrash onClick={() => deleteRow(row.idNumber)} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>

            <Flex justifyContent='flex-end' margin='15px'>
              <Text mr='2'> Total Amount (₹): </Text>
              <Text fontSize='md' color='blue'>{totalAmount} </Text>
            </Flex>
          </Box>
          {/* Buttons */}
          <Flex margin='30px'>
            <Button mr='4' size='md'>Save & New</Button>
            <Button mr='4' size='md' onClick={handleClick}>Save</Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default AddPurchaseReturn;
