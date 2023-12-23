import { Box, Flex, FormControl, FormLabel, Input, Textarea, useDisclosure, Button, Image, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firmRegisterAction } from '../../../../Redux/Firm/Firm.Action';
import Company_name from '../Company_name/Company_name';



const AddCompanyForm = () => {
    const dispatch = useDispatch();
    const UserDetails = sessionStorage.getItem("companyDetails") ? JSON.parse(sessionStorage.getItem("companyDetails")) : null
   
   const store = useSelector((state)=>state)
   console.log(store ,"<<<<<");
    const [formData, setFormData] = useState({
        companyLogo: "",
        companyName: "",
        gstinNumber: "",
        email: "",
        phoneNumber: "",
        signature: "",
        state: "",
        businessAddress: "",
        businessCategory: "",
        businessType: "",
        businessRegistrationType: "",
        businessDescription: "",
        userId: UserDetails?.userId
    });

    const { isOpen, onOpen } = useDisclosure();
    const [imageURL, setImageURL] = useState("");


    const handleChange = (e) => {
        const { name, value, files } = e.target;
    
        if (files) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setImageURL(reader.result);
                setFormData({ ...formData, [name]: files[0] });
            };
            reader.onerror = (error) => console.log(error);
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    
    const multipldata = new FormData()
    
    Object.entries(formData)?.map(([key ,item] , index)=>{
        console.log(item ,key ,"<<<key");
        multipldata.append(key ,item)
    })


    const handleRegisterFirm = () => {
        // Create FormData object with file and regular form data
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value); // Append each form field to formDataToSend
        });
    
        dispatch(firmRegisterAction(formDataToSend, UserDetails?.token));
    };


    return (
        <>
            <Company_name />
            <Box className='container' width={"80%"} boxShadow={"rgba(20,20,20,0.8) 0px 7px 29px 0px "} margin={"100px auto"} padding="20px" borderRadius={"10px"}>
                <Image src={formData.companyLogo ? URL.createObjectURL(formData.companyLogo) :""} w="100px" h="100px" alt="No Image" />
                <FormControl mt={4}>
                    <FormLabel>Logo</FormLabel>
                    <Input type="file" name="companyLogo" accept="image/*" onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <FormLabel>Business Name</FormLabel>
                    <Input name="companyName" value={formData.companyName} placeholder='Business Name' onChange={handleChange} />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>GSTIN</FormLabel>
                    <Input placeholder='GSTIN' name='gstinNumber' value={formData.gstinNumber} onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <FormLabel>Phone No.</FormLabel>
                    <Input name="phoneNumber" value={formData.phoneNumber} placeholder='Phone No.' onChange={handleChange} />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                </FormControl>
                <Flex gap={"20px"} marginTop={"25px"}>
                    <Box w={"50%"} display={"flex"} flexDirection={"column"} gap={"20px"}>
                        <Input placeholder='Bussiness Address' name="businessAddress" value={formData.businessAddress} onChange={handleChange} />
                        <Textarea minH={"100px"} placeholder='Business Description ' name="businessDescription" value={formData.businessDescription } onChange={handleChange} />
                    </Box>
                    <Box w={"50%"} display={"flex"} flexDirection={"column"} gap={"22.7px"}>
                        <Input placeholder='Business Category' name="businessCategory" value={formData.businessCategory} onChange={handleChange} />
                        <Box>
                            {/* <FormLabel>Signature</FormLabel> */}
                            <FormControl mt={4}>
                                <FormLabel>Signature</FormLabel>
                                <Input type="file" name="signature" accept="image/*" onChange={handleChange} />
                            </FormControl>
                            {/* <Input type='file' placeholder='Add Signature' /> */}


                        </Box>
                        <Select placeholder='Business Type' variant='flushed' name='businessType' value={formData.businessType} onChange={handleChange}>
                            <option value="None">None</option>
                            <option value="Retailer">Retailer</option>
                            <option value="Wholesaler">Wholesaler</option>
                            <option value="Distributor">Distributor</option>
                            <option value="Manufacturer">Manufacturer</option>
                            <option value="Services">Services</option>
                            <option value="Other">Other</option>
                        </Select>
                        <Select placeholder='State' name='state' value={formData.state} onChange={handleChange} variant='flushed'>
                            <option>None</option>
                            <option>State 1</option>
                            <option>State 2</option>
                            <option>State 3</option>
                            <option>State 4</option>
                            <option>State 5</option>
                        </Select>
                        {/* <Input placeholder='Business Registration Type' name="businessRegistrationType" value={formData.businessRegistrationType} onChange={handleChange} /> */}
                        <Select placeholder='Business Registration Type' name="businessRegistrationType" value={formData.businessRegistrationType} onChange={handleChange} variant='flushed'>
                            <option value="Private Limited Company">Private Limited Company</option>
                            <option value="Public Limited Company">Public Limited Company</option>
                            <option value="Limited Liability Partnership">Limited Liability Partnership</option>
                            <option value="One Person Company">One Person Company</option>
                            <option value="Sole Proprietorship" >Sole Proprietorship</option>
                            <option value="Section 8 Company">Section 8 Company</option>
                            <option value="Business Not Registered">Business Not Registered</option>
                            <option value="Other" >Other</option>
                        </Select>
                    </Box>

                </Flex>
                <Button bg={"green.300"} color={"whitesmoke"} m="10px" width={"80%"} onClick={handleRegisterFirm}>Save</Button>
            </Box>
        </>
    );
};

export default AddCompanyForm;
