import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Select,
  chakra,
} from '@chakra-ui/react';
import { CalendarIcon, EditIcon } from '@chakra-ui/icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect } from 'react';
import axios from 'axios';
import { getRequest } from '../../helpers/Services';

const GeneralInformation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profiledetails, setprofile] = useState();

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  // console.log(userDetails ,"<<<");
 const  userDetails =  JSON.parse(sessionStorage.getItem("companyDetails")) ?JSON.parse(sessionStorage.getItem("companyDetails")):null

  useEffect( async()=>{
    const res =  await getRequest("/companyRegister/company_profileGet" ,userDetails?.token)
    console.log(res , "<<<<");
  },[])

  return (
    <Box bg="gray.100" p="4" minH="100vh" m='4'>
      <Card bg="white" boxShadow="lg" px="8" py="4">
        <CardHeader display="flex" justifyContent="space-between">
          <Box>
            <Heading as="h1" mb="4" align="left" mt={4} size='lg' color='gray.600'>Basic Details</Heading>
          </Box>
          <IconButton
            icon={<EditIcon />}
            aria-label="Edit"
            onClick={handleEditToggle}
          />
        </CardHeader>
        <Divider mb={4} style={{ opacity: '0.2' }} />
        <Box>
          <Grid templateColumns="1fr 1fr" gap="4">
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input defaultValue="First" isReadOnly={!isEditing} />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input defaultValue="Last" isReadOnly={!isEditing} />
            </FormControl>
          </Grid>
          <Grid templateColumns="1fr 1fr" gap="4">
            <FormControl mt="4">
              <FormLabel>Birthday</FormLabel>
              <InputGroup isReadOnly={!isEditing}>
                <InputLeftAddon
                  children={<CalendarIcon color="gray.400" />}
                />
                <DatePicker
                  selected={new Date()} // Set your selected date value
                  disabled={!isEditing}
                  customInput={<Input width="100%" />} // Use Chakra UI's Input component
                  popperPlacement="auto" // Ensure popper placement fits layout
                  dateFormat="MM/dd/yyyy" // Customize date format
                />
              </InputGroup>
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Gender</FormLabel>
              <Select defaultValue="male" isReadOnly={!isEditing}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>

              </Select>
            </FormControl>
          </Grid>
          <Grid templateColumns="1fr 1fr" gap="4">
            <FormControl mt="4">
              <FormLabel>Email</FormLabel>
              <Input type="email" defaultValue="demo@gmail.com" isReadOnly={!isEditing} />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" defaultValue="1234567890" isReadOnly={!isEditing} />
            </FormControl>
          </Grid>
        </Box>
        <Heading as="h2" fontSize="1.25rem" mt="6" mb="4" align="left" pl={4} color='gray.600'>Address</Heading>
        <Divider mb={4} style={{ opacity: '0.2' }} />
        <Box>
          <Grid templateColumns="1fr 1fr" gap="4" mt="4">
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Enter your home address" isReadOnly={!isEditing} />
            </FormControl>
            <FormControl>
              <FormLabel>Number</FormLabel>
              <Input isReadOnly={!isEditing} />
            </FormControl>
          </Grid>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap="4" mt="4">
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input isReadOnly={!isEditing} />
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Select isReadOnly={!isEditing}>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
                {/* Add other states */}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Zip Code</FormLabel>
              <Input isReadOnly={!isEditing} />
            </FormControl>
          </Grid>
        </Box>
        <Box align="left" mt={4}>
          {isEditing && (
            <Button mt="4" colorScheme="blue">
              Save
            </Button>
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default GeneralInformation;
