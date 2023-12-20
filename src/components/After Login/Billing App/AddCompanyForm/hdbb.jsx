import { Box, Flex, FormControl, FormLabel, Input, Textarea, useDisclosure, Button, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { FirmRegisterAction } from '../../../../Redux/Firm/Firm.Action';

const AddCompanyForm = () => {
    const [form, setForm] = useState({
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
        businessDescription: ""
    });
    const dispatch = useDispatch()
    const { token, loginData } = useSelector(store => store.Signin)
    console.log("pagetoken", token)



    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isShown, setIsShown] = useState(false);
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const handleClick = (event) => {
        setIsShown(current => !current);
    };



    const [imageURL, setImageURL] = useState("");


    const ConvertToBase64 = (e) => {
        e.preventDefault()
        console.log(e);
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImageURL(reader.result)
        }
        reader.onerror = error => {
            console.log(error)
        }

    }

    const handleRegisterFrim = () => {

        dispatch(FirmRegisterAction(form, token))
    }
    return (
        <>
            {/* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */}
            <Box className='container' width={"80%"} boxShadow={"rgba(20,20,20,0.8) 0px 7px 29px 0px "} margin={"100px auto"} padding="20px" borderRadius={"10px"}>
                <Image src={imageURL} w="100px" h="100px" alt="No Image"></Image>
                <FormControl mt={4}>
                    <FormLabel>Logo</FormLabel>

                    <Input type="file" accept="image/*" onChange={ConvertToBase64} />
                </FormControl>
                <FormControl>
                    <FormLabel>Business Name</FormLabel>
                    <Input ref={initialRef} name="companyName" value={form.companyName} placeholder='Business Name' onChange={handleChange} />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>GSTIN</FormLabel>
                    <Input placeholder='GSTIN' name='gstinNumber' value={form.gstinNumber} onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <FormLabel>Phone No.</FormLabel>
                    <Input ref={initialRef} name="phoneNumber" value={form.phoneNumber} placeholder='Phone No.' onChange={handleChange} />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Email' name='email' value={form.email} onChange={handleChange} />
                </FormControl>

                <Box alignSelf={"flex-start"}>
                    {/* <Button variant={"link"} onClick={() => setMoreDetails(!moreDetails)}>{moreDetails ? <>Business Details</> : <>More Information </>}</Button> */}
                </Box>
                {/* {moreDetails ? <> */}
                <Flex gap={"20px"}>
                    <Box w={"50%"} display={"flex"} flexDirection={"column"} gap={"20px"}>
                        <Textarea placeholder='Bissiness Address' name="businessAddress"
                            value={form.businessAddress} onChange={handleChange} />
                        {/* <Input placeholder='Pincode' name='pincode' /> */}
                        {/* <Select placeholder='State' name="state" value={form.state} variant='flushed'>
                            <option>None</option>
                            <option>State 1</option>
                            <option>State 2</option>
                            <option>State 3</option>
                            <option>State 4</option>
                            <option>State 5</option>
                        </Select> */}
                        <Input placeholder='Bussiness Description' name="businessDescription" value={form.businessDescription} />
                    </Box>
                    <Box w={"50%"} display={"flex"} flexDirection={"column"} gap={"22.7px"}>
                        {/* <Select placeholder='Business Type' variant='flushed'>
                            <option value="None">None</option>
                            <option value="Retailer">Retailer</option>
                            <option value="Wholesaler">Wholesaler</option>
                            <option value="Distributor">Distributor</option>
                            <option value="Manufacturer">Manufacturer</option>
                            <option value="Services">Services</option>
                            <option value="Other">Other</option>
                        </Select> */}
                        <Input placeholder='Business Category' name="businessDescription" value={form.businessDescription} onChange={handleChange} />
                        <Box>
                            <FormLabel>Signature</FormLabel>
                            {/* <Input type='file' placeholder='Add Signature' /> */}
                        </Box>
                        <Input placeholder='Business Registration Type' name="businessRegistrationType"
                            value={form.businessRegistrationType} onChange={handleChange}
                        />
                    </Box>
                </Flex>
                {/* </> : ""} */}
                {/* <Link to={"/HomeDash"}> */}
                <Button bg={"green.300"} color={"whitesmoke"} m="10px" width={"80%"} onClick={handleRegisterFrim}>Save</Button>
                {/* </Link> */}
            </Box>

        </>
    )
}

export default AddCompanyForm
