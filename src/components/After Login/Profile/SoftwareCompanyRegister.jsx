import React from 'react'

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
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { firmRegisterAction } from '../../../Redux/Firm/Firm.Action';
import { Inputvalidate } from '../../helpers/inputValidate';
import { hasValidationError, validationError } from '../../helpers/Frontend';
import { postRequest } from '../../helpers/Services';
import { userDetails } from '../../../Redux/config/Commen';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


// if (!validateGstnumber(inputNameArray, {gstNo :form?.gstNo ,phoneNumber:form?.phoneNumber }, setErrors)) { return; }


const SoftwareCompanyRegister = () => {
  const [errors, setErrors] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate()

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const dispatch = useDispatch();
    const UserDetails = sessionStorage.getItem("userDetails") ? JSON.parse(sessionStorage.getItem("userDetails")) : null
   
//    const store = useSelector((state)=>state)
//    console.log(store ,"<<<<<");
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        gender: "",
        email: "",
        password: "",
        dob: "",
        address: "",
        company_name:"",
        userId: UserDetails?.userId
    });
    const inputNameArray = ["email","dob" ,"address","company_name", "password", "gender", "lname", "fname"]
    const [imageURL, setImageURL] = useState("");


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setImageURL(reader.result);
                setFormData({ ...formData, [name]: reader.result });
            };
            reader.onerror = (error) => console.log(error);
        } else {
            setFormData({ ...formData, [name]: value });
        }
        console.log(formData ,"<<<<");
    };


    const handleRegisterCompany = async () => {
      if (!Inputvalidate(inputNameArray, formData, setErrors)) { return; }
      await postRequest("/companyRegister/signup" ,formData ,userDetails?.token).then((res)=>{
        // console.log(res , "<<<<");
        if(res?.message){
          toast.success("Company register successfully ")
          navigate("/software-login")
        }
      }).catch((err)=>{
        console.log(err , "<<");
        if(err?.response?.data?.message){
          toast.error(err?.response?.data?.message)
        }else{
          toast.error(err?.message)
        }
      })
    };




  return (
    <>
      <Box bg="gray.100">
        <Box bg="gray.100" p="4" minH="100vh" m='4'>
          <Card bg="white" boxShadow="lg" px="8" py="4">
            <CardHeader display="flex" justifyContent="space-between">
              <Box>
                <Heading as="h1" mb="4"  mt={4} size='lg' color='gray.600'>Persnol Details</Heading>
              </Box>
              {/* <IconButton
                icon={<EditIcon />}
                aria-label="Edit"
                onClick={handleEditToggle}
              /> */}
            </CardHeader>
            <Divider mb={4} style={{ opacity: '0.2' }} />
            <Box>
              <Grid templateColumns="1fr 1fr" gap="4">
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input value={formData?.fname} name='fname' onChange={handleChange}  />
                  {hasValidationError(errors, "fname") ? (<span className="has-cust-error">{validationError(errors, "fname")}</span>) : null}
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input value={formData?.lname} name='lname' onChange={handleChange}  />
                  {hasValidationError(errors, "lname") ? (<span className="has-cust-error">{validationError(errors, "lname")}</span>) : null}
                </FormControl>
              </Grid>
              <Grid templateColumns="1fr 1fr" gap="4">
               
                <FormControl mt="4">
                  <FormLabel>Gender</FormLabel>
                  <Select  name="gender"  value={formData?.gender} onChange={handleChange}   >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>

                  </Select>
                  {hasValidationError(errors, "gender") ? (<span className="has-cust-error">{validationError(errors, "gender")}</span>) : null}

                </FormControl>
                <FormControl mt="4">
                <FormLabel>Company Name</FormLabel>
                  <Input type="text" name="company_name"  value={formData?.company_name} onChange={handleChange}   />
                  {hasValidationError(errors, "company_name") ? (<span className="has-cust-error">{validationError(errors, "company_name")}</span>) : null}

                </FormControl>
                <FormControl mt="4">
                <FormLabel>Date of Barth</FormLabel>
                  <Input type="date" name="dob"  value={formData?.dob} onChange={handleChange}   />
                  {hasValidationError(errors, "dob") ? (<span className="has-cust-error">{validationError(errors, "dob")}</span>) : null}

                </FormControl>
              </Grid>
              <Grid templateColumns="1fr 1fr" gap="4">
                <FormControl mt="4">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email"  value={formData?.email} onChange={handleChange}   />
                  {hasValidationError(errors, "email") ? (<span className="has-cust-error">{validationError(errors, "email")}</span>) : null}

                </FormControl>
                <FormControl mt="4">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password"  value={formData?.password} onChange={handleChange}    />
                  {hasValidationError(errors, "password") ? (<span className="has-cust-error">{validationError(errors, "password")}</span>) : null}

                </FormControl>
                {/* <FormControl mt="4">
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="tel" name="gender"  value={formData?.gender} onChange={handleChange}      />
                </FormControl> */}
              </Grid>
            </Box>
            <Heading as="h2" fontSize="1.25rem" mt="6" mb="4" align="left" pl={4} color='gray.600'>Address</Heading>
            <Divider mb={4} style={{ opacity: '0.2' }} />
            <Box>
              <Grid templateColumns="1fr 1fr" gap="4" mt="4">
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input placeholder="Enter your home address" name="address"  value={formData?.address} onChange={handleChange}    />
                  {hasValidationError(errors, "address") ? (<span className="has-cust-error">{validationError(errors, "address")}</span>) : null}

                </FormControl>
              </Grid>
            </Box>
            <Box align="left" mt={4}>
              {/* {isEditing && ( */}
                <Button mt="4" onClick={handleRegisterCompany} colorScheme="blue">
                  Save
                </Button>
              {/* )} */}
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  )
}

export default SoftwareCompanyRegister