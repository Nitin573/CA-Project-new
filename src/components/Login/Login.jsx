
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



const Login = () => {

    const [form, setForm] = useState({ email: "", password: "", })
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();
    // const selector = useSelector(store => store.Signin);
    const { token, loginData } = useSelector(store => store.Signin)
    // console.log(loading , "<<<loading")
    // {}
    const company = [{}]

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    console.log(token, loginData)
    const LogInHandle = () => {
        if (!form.email && !form.password) {
            return alert('Please Fill All the fields')
        }
        dispatch(LoginAction(form,navigate));
    }


    return (
        <>
            <Box bgImage={""} style={{
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
                    height: "80vh"

                }} className='container' width={{ base: "80%", md: "50%", lg: "50%" }} padding={"10px"}>
                    <Heading color={"white"}>Sign In</Heading>
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

                <Link to={"/LoginVendorLogin"}>
                    <Box bg={"rgb(1,37,70)"}>
                        <Button bg="blue.400">Vendor SignIn</Button>
                    </Box>
                </Link>

            </Box>

        </>
    )
}

export default Login