import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Input,
  Button,
  Divider,
  Heading,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import {
  postPurchaseAction
} from "../../../../../Redux/Purchase/purchase.action";
import Company_name from '../../Company_name/Company_name';
import Slidebar from '../../Slidebar/Slidebar';
import { useNavigate } from 'react-router-dom';

const userDetails = JSON.parse(sessionStorage.getItem("companyDetails")) ? JSON.parse(sessionStorage.getItem("companyDetails")) : null

const AddPurchase = () => {
  const [rows, setRows] = useState([{ id: 1 }]);
  const { firmId } = useSelector((store) => store.FirmRegistration);
  const dispatch = useDispatch();
  const [item, setItem] = useState(null)
   

  const navigate = useNavigate();
  const Company = {
    name: "Company Name",
  };

  const addRow = () => {
    const newItem = { id: rows.length + 1, itemName: '', itemCode: '', hsnCode: '', serialNo: '', batchNo: '', modelNo: '', expDate: '', mfgDate: '', mrp: '', size: '', qty: '', unit: '', priceUnit: '', rate: '', amount: 0 };
    setRows([...rows, newItem]);
  };

  const deleteRow = (rowId) => {
    const updatedRows = rows.filter((row) => row.id !== rowId);
    setRows(updatedRows);
  };

  const calculateamount = () => {
    let total = 0;
    rows.forEach((row) => {
      const amount = parseFloat(row.amount) || 0;
      if (!isNaN(amount)) {
        total += amount;
      }
    });
    return total.toFixed(2);
  };

  const handleInputChange = (e, field, rowId) => {
    const { value } = e.target;
    const updatedRows = rows.map((row) => {
      if (row.id === rowId) {
        return {
          ...row,
          [field]: value,
          amount: (parseFloat(row.qty) * parseFloat(row.rate)).toFixed(2),
        };
      }
      return row;
    });
    setRows(updatedRows);

    // Update the item object with additional fields
    const updatedItem = {
      ...item,
      item: updatedRows.map((row) => ({
        itemName: row.itemName,
        itemCode: row.itemCode,
        hsnCode: row.hsnCode,
        serialNo: row.serialNo,
        batchNo: row.batchNo,
        modelNo: row.modelNo,
        expDate: row.expDate,
        mfgDate: row.mfgDate,
        mrp: row.mrp,
        size: row.size,
        qty: row.qty,
        unit: row.unit,
        priceUnit: row.priceUnit,
        rate: row.rate,
        amount: row.amount,
      })),
    };
    setItem(updatedItem);
  };

  const handleSubmit = () => {
    const data = { ...item, item: [...rows], totalAmount: calculateamount() }

    dispatch(postPurchaseAction(data, userDetails?.token, firmId));

    setRows([{ id: 1 }]);
  };

  return (
    <>
      <Company_name company_name={Company.name} />
      <Flex>
        <Slidebar />
        <Box bg="white" py="4" px="6" minH="80vh" flex="1" boxShadow="md">
          <Flex
            margin='15px'
            justifyContent='space-between'
            p='4'
            boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
          >
            <Heading size='md' color='gray.500'> Add Purchase Item </Heading>
            <Flex>
              <Select
                rightIcon={<ChevronDownIcon />}
                placeholder='Bill No.'
                size='sm'
                onChange={e => setItem(preVal => ({ ...preVal, billNo: e.target.value }))}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Select>
              <Input
                ml='4'
                width='100%'
                type='date'
                placeholder='Select date'
                size='sm'
                onChange={e => setItem(preVal => ({ ...preVal, date: e.target.value }))}
              />
            </Flex>
          </Flex>

          <Box
            margin='15px'
            mt='4'
            p='2'
            boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
          >
            <Flex justifyContent='space-between' mt='1'>
              <Flex justifyContent='center'>
                <Text
                  mr='4'
                  textAlign='left'
                  mt='1'
                  fontWeight='semibold'
                >
                  Party Name :
                </Text>
                <Input
                  placeholder='Enter Party Name'
                  size='sm'
                  width='60%'
                  onChange={e => setItem(preVal => ({ ...preVal, partyName: e.target.value }))}
                />
              </Flex>
              <Flex justifyContent='center'>
                <Text
                  mr='4'
                  textAlign='left'
                  mt='1'
                  fontWeight='semibold'
                >
                  Phone Number :
                </Text>
                <Input
                  placeholder='Enter Contact Number'
                  size='sm'
                  type='number'
                  width='60%'
                  onChange={e => setItem(preVal => ({ ...preVal, contactNo: e.target.value }))}
                />
              </Flex>
            </Flex>
            <Divider />
            <Flex justifyContent='space-between' margin='15px'>
              <Heading size='sm'> Add Items</Heading>
              <Button
                onClick={addRow}
                colorScheme='teal'
                size='sm'
                title='add row'
              >
                + New Item
              </Button>
            </Flex>
            <Table>
              <Thead>
                <Tr>
                  <Th style={{ border: '1px solid gray' }}>ID</Th>
                  <Th style={{ border: '1px solid gray' }}>Item Name</Th>
                  <Th style={{ border: '1px solid gray' }}>Item Code</Th>
                  <Th style={{ border: '1px solid gray' }}>HSN Code</Th>
                  <Th style={{ border: '1px solid gray' }}>Serial No</Th>
                  <Th style={{ border: '1px solid gray' }}>Batch No</Th>
                  <Th style={{ border: '1px solid gray' }}>Model No</Th>
                  <Th style={{ border: '1px solid gray' }}>EXP Date</Th>
                  <Th style={{ border: '1px solid gray' }}>MFG Date</Th>
                  <Th style={{ border: '1px solid gray' }}>MRP</Th>
                  <Th style={{ border: '1px solid gray' }}>Size</Th>
                  <Th style={{ border: '1px solid gray' }}>Qty</Th>
                  <Th style={{ border: '1px solid gray' }}>Unit</Th>
                  <Th style={{ border: '1px solid gray' }}>Price/Unit</Th>
                  <Th style={{ border: '1px solid gray' }}>Rate</Th>
                  <Th style={{ border: '1px solid gray' }}>Amount</Th>
                  <Th style={{ border: '1px solid gray' }}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {rows.map((row) => (
                  <Tr key={row.id}>
                    <Td style={{ border: '1px solid gray' }}>
                      {row.id}
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='Item Name'
                        value={row.itemName}
                        onChange={(e) =>
                          handleInputChange(e, 'itemName', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='Item Code'
                        value={row.itemCode}
                        onChange={(e) =>
                          handleInputChange(e, 'itemCode', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='HSN Code'
                        value={row.hsnCode}
                        onChange={(e) =>
                          handleInputChange(e, 'hsnCode', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='Serial No'
                        value={row.serialNo}
                        onChange={(e) =>
                          handleInputChange(e, 'serialNo', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='Batch No'
                        value={row.batchNo}
                        onChange={(e) =>
                          handleInputChange(e, 'batchNo', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='Model No'
                        value={row.modelNo}
                        onChange={(e) =>
                          handleInputChange(e, 'modelNo', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='EXP Date'
                        value={row.expDate}
                        onChange={(e) =>
                          handleInputChange(e, 'expDate', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='MFG Date'
                        value={row.mfgDate}
                        onChange={(e) =>
                          handleInputChange(e, 'mfgDate', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='MRP'
                        value={row.mrp}
                        onChange={(e) =>
                          handleInputChange(e, 'mrp', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='Size'
                        value={row.size}
                        onChange={(e) =>
                          handleInputChange(e, 'size', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='Qty'
                        value={row.qty}
                        onChange={(e) =>
                          handleInputChange(e, 'qty', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='Unit'
                        value={row.unit}
                        onChange={(e) =>
                          handleInputChange(e, 'unit', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='Price/Unit'
                        value={row.priceUnit}
                        onChange={(e) =>
                          handleInputChange(e, 'priceUnit', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='Enter Rate'
                        value={row.rate}
                        onChange={(e) =>
                          handleInputChange(e, 'rate', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <Input
                        variant='unstyled'
                        placeholder='Enter Amount'
                        value={row.amount}
                        onChange={(e) =>
                          handleInputChange(e, 'amount', row.id)
                        }
                      />
                    </Td>
                    <Td style={{ border: '1px solid gray' }}>
                      <FaTrash onClick={() => deleteRow(row.id)} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Flex justifyContent='flex-end' margin='15px'>
              <Text mr='2'> Total Amount (₹): </Text>
              <Text fontSize='md' color='blue'>
                {calculateamount()}
              </Text>
            </Flex>
          </Box>
          <Flex margin='30px'>
            <Button mr='4' size='md'>
              Save & New
            </Button>
            <Button mr='4' size='md' onClick={handleSubmit}>
              Save
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default AddPurchase;