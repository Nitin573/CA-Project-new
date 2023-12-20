import React from 'react';
import { Box, Heading, Input, Flex, Text, Select } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';


const Invoice = ({ formData, setFormData }) => {
  const { firmId } = useSelector((store) => store.FirmRegistration);

  const getCurrentDate = () => {
    return moment().format('YYYY-MM-DD');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // const formattedValue = e.target.value;
    const formattedValue = e.target.type == 'date' ? getCurrentDate() : value;
    
    console.log("formattedValue",formattedValue);  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: formattedValue,
    }));
  };

  const handleInputChangeDueDate = (e) => {
    const { name, value } = e.target;
    // const formattedValue = e.target.value;
    const formattedValue = e.target.value 
    
    console.log("formattedValue",formattedValue);  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: formattedValue,
    }));
  };


  const paymentOptions = ['Cash on Delivery', 'UPI/Wallet', 'Credit/Debit'];


  return (
    <Box p="2">
      <Heading size="md" mb="4">
        INVOICE
      </Heading>
      <Flex mb="2">
        <Text flex="0 0 120px">Invoice No:</Text>
        <Input name="invoiceNo" flex="1" ml="2" size="sm" disabled />
      </Flex>
      <Flex mb="2">
        <Text flex="0 0 120px">Date:</Text>
        <Input
          name="invoiceDate"
          type="date"
          flex="1"
          ml="2"
          size="sm"
          value={formData.invoiceDate }
          onChange={handleInputChange}
        />
      </Flex>
      <Flex mb="2">


        <Text flex="0 0 120px">Payment Mode:</Text>
        <Select
          name="paymentMode"
          placeholder="Select Payment Mode"
          size="sm"
          flex="1"
          value={formData.paymentMode}
          onChange={handleInputChange}
        >
          {paymentOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>

      </Flex>
      
      <Flex mb="2">
        <Text flex="0 0 120px">GST Number:</Text>
        <Input name="gstNo" flex="1" size="sm" value={formData?.gstNo} onChange={handleInputChange} />
      </Flex>
      <Flex mb="2">
        <Text flex="0 0 120px">Due Date:</Text>
        {/* <Input name="invoiceDate" type="date" flex="1" ml="2" size="sm" /> */}
        <Input
          name="dueDate"
          type="date"
          flex="1"
          ml="2"
          size="sm"
          value={formData.dueDate}
          onChange={handleInputChangeDueDate}
        />
      </Flex>
    </Box>
  );
};

export default Invoice;