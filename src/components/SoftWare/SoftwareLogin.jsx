import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Input, FormControl, FormLabel, Checkbox, Link, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import b2b2 from '../assets/b2b2.svg';
import { useNavigate } from 'react-router-dom';
import Navbar_AL from '../Navbar_AL';
import { postRequest } from '../helpers/Services';
import { userDetails } from '../../Redux/config/Commen';
import { toast } from 'react-toastify';

const SoftwareLogin = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }




    const LogInHandle = async () => {
        if (!form.email || !form.password) {
            return alert('Please Fill All the fields');
        }

        await postRequest("/companyRegister/signin" ,form ,userDetails?.token).then((res)=>{
            console.log(res , "<<<<");
            if(res.status == 200){
              toast.success("Company login successfully ")
              sessionStorage.setItem("companyDetails" , JSON.stringify(res.data))
              setTimeout(() => {
                  navigate('/homeDash'); // Navigate on success
              }, 3000);
            }
          }).catch((err)=>{
            console.log(err , "<<");
            if(err?.response?.data?.message){
              toast.error(err?.response?.data?.message)
            }else{
              toast.error(err?.message)
            }
          })
        // Simulate successful login
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <Navbar_AL/>
            <Box bgImage={b2b2} style={{
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                backgroundSize: "cover",
                boxSizing: "border-box",
                margin: "auto",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <VStack
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded={'lg'}
                    boxShadow={'outline'}
                    p={8}
                    width={{ base: "80%", md: "50%", lg: "50%" }}>
                    <Heading color={"white"}>Software Login</Heading>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" name="email" value={form.email} onChange={handleChange} required />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" name="password" value={form.password} onChange={handleChange} required />
                    </FormControl>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}>Forgot password?</Link>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{ bg: 'blue.500' }}
                        onClick={LogInHandle}>
                        Sign In
                    </Button>
                    <Link color={'blue.400'} href="/software-signup">Don't have an account? Sign Up</Link>
                    <Button
                        mt={4}
                        colorScheme="green"
                        onClick={openModal}>
                        Start for Free (14-day trial)
                    </Button>
                </VStack>

                {/* Modal for Free Trial */}
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Start your 14-day Free Trial</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* Add your signup form components here */}
                            {/* Example: */}
                            {/* <Input placeholder="Name" mb={3} />
                            <Input placeholder="Email" mb={3} />
                            <Input placeholder="Password" type="password" mb={3} /> */}
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="green" onClick={closeModal}>Start Trial</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </>
    )
}

export default SoftwareLogin;
