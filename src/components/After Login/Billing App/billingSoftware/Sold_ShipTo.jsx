import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Select, Input, Textarea } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getPartiesAction } from '../../../../Redux/Parties/parties.action';

const Sold_ShipTo = ({ formData, setFormData, handleInputChange, handleSelectedPartyId }) => {
  const [selectedPartyId, setSelectedPartyId] = useState(null);
   handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log('selectedPartyId from sold to ship to', selectedPartyId);
  };

  let partiesData = useSelector((store) => store.partiesReducer.getPartiesData);
  console.log('partiesData', partiesData);


  const handlePartySelectChange = (event) => {
    const selectedPartyId = event.target.value;
    setSelectedPartyId(selectedPartyId);
    localStorage.setItem('selectedPartyId', selectedPartyId);

    const selectedParty = partiesData.find((party) => party._id === selectedPartyId);
    console.log('selectedPartyId from sold to ship to', event.target.value);
  //   // If the party is found, auto-fill the customer name, sold-to address, and ship-to address
    if (selectedParty) {
  setFormData({
    ...formData,
    soldToCustomerName: selectedParty.partyName,
    soldToCustomerAddress: selectedParty.billingAddress,
    shipToCustomerName: selectedParty.partyName,
    shipToCustomerAddress: selectedParty.shippingAddress,
    customerEmail: selectedParty.email,
    gstNo: selectedParty.gstNo,
  });

  console.log('Updated Form Data: 37: ', formData);
}

  };

  const handleShipToInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log("handlePartySelectChange", handlePartySelectChange)

  
  return (
    <Flex>
      {/* Box 1 */}
      <Box flex="1" p="2">
        <Flex alignItems="center" mb="1" justifyContent="space-between" height="50px">
          <Heading size="xs" marginRight="1">
            Sold To:
          </Heading>
          <Select
            mt="-1"
            ml="-10"
            width="50%"
            size="sm"
            righticon={<ChevronDownIcon />}
            defaultValue="defaultPartyId"
            onChange={handlePartySelectChange}
            placeholder="Customer Name"
          >
            <optgroup label="Customer Name">
              {partiesData.map((party) => (
                <option key={party._id} value={party._id}>
                  {party.partyName}
                </option>
              ))}
            </optgroup>
          </Select>
        </Flex>
        <Input
          name="soldToCustomerName"
          placeholder="Customer Name"
          mb="1"
          size="sm"
          value={formData?.soldToCustomerName}
          onChange={handleInputChange}
          
        />
        <Textarea
          name="soldToCustomerAddress"
          placeholder="Address"
          size="sm"
          value={formData?.soldToCustomerAddress}
          onChange={handleInputChange}
        />
      </Box>

      {/* Box 2 */}
      <Box flex="1" p="2" marginLeft="4">
        <Flex alignItems="center" mb="1" height="50px">
          <Heading size="xs" marginRight="1">
            Ship To:
          </Heading>
        </Flex>
        <Input
          name="shipToCustomerName"
          placeholder="Name"
          mb="1"
          size="sm"
          value={formData?.shipToCustomerName}
          onChange={handleShipToInputChange}
        />
        <Textarea
          name="shipToCustomerAddress"
          placeholder="Address"
          size="sm"
          value={formData?.shipToCustomerAddress}
          onChange={handleShipToInputChange}
        />
        
      </Box>
    </Flex>
  );
};

export default Sold_ShipTo;
