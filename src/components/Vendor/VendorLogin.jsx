
import { React, useContext, useState } from 'react'
import {
    Box, Button, Flex, HStack, Image, Input, Select, Text, VStack, Wrap, Heading, List,
    ListIcon,
    OrderedList,

    UnorderedList,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    AspectRatio,
    useDisclosure,
    FormLabel,
    FormControl,
    Stack,
    Checkbox,
    useColorModeValue,
    color,
    useToast,
} from '@chakra-ui/react'

import b2b2 from '../assets/b2b2.svg'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../../Redux/Singin/Signin.Action';
import { VENDOR_LoginAction } from '../../Redux/Vender/Vendor.Action';

const LoginVendorLogin = () => {

    const [form, setForm] = useState({ email: "", password: "", })
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();
    // const selector = useSelector(store => store.Signin);
    const { token, data } = useSelector(store => store.Signin)
    console.log(token, data)
    const auth = useContext(AppContext);

    // {}
    const company = [{}]

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const LogInHandle = () => {
        if (!form.email && !form.password) {
            return alert('Please Fill All the fields')
        }
        dispatch(VENDOR_LoginAction(form, navigate));
        // freeHandle()
    }


    return (
        <>
            <VStack bgImage={""} style={{
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                // backgroundPosition: "center",
                // boxSizing: "border-box",
                backgroundColor: "rgb(1,37,70)",
                height: "100vh"

            }} flexDirection={{
                base: "column", md: "row", lg: "row"
            }}>




                <VStack bgImage={b2b2} style={{
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "scroll",
                    backgroundSize: "cover",
                    // backgroundPosition: "center",
                    boxSizing: "border-box",
                    margin: "auto",
                    height: "100vh"

                }} className='container' width={{ base: "80%", md: "50%", lg: "50%" }} padding={"10px"}>
                    <Heading color={"white"}>Vendor Sign In</Heading>
                    <Box
                        className='container'
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'outline'}
                        p={8} width={{ base: "100%", md: "80%", lg: "80%" }} >
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" name="email" value={form.email} onChange={handleChange} required />


                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" name="password" value={form.password} onChange={handleChange} required />
                            </FormControl>

                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>

                            {/* <Stack spacing={10}> */}
                            {/* <Link to={"/Profile"}> */}
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }} onClick={LogInHandle} >

                                Sign In
                            </Button>
                            {/* </Link> */}
                            {/* </Stack> */}
                        </Stack>
                    </Box>

                </VStack>



            </VStack>
           
        </>
    )
}

export default LoginVendorLogin
