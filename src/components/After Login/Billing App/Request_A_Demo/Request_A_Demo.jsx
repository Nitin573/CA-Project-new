
import React from 'react'
import {
    Box, Button, Flex, HStack, Image, Input, Select, Text, VStack, Wrap, Heading, List,
    ListItem,
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
    Label

} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company_name/Company_name';
import demo1  from "../../../assets/demo1.gif"

const Request_A_Demo
    = () => {
        const Company = {
            name: "Company Name"
        }
        return (

            <>
                <Company_name company_name={Company.name} />

                <Flex >

                    <Slidebar />
                    <Box width="80%" margin="auto">
                        <Box padding={"10px"} margin="auto">
                            <Heading fontSize={"20px"} >Are You A
                                <Heading fontSize={"25px"} color="orange"> Beginner?</Heading></Heading> 
                            
                        </Box>
                        <Flex padding={"10px"} flexDirection={{ base: "column", md: "row", lg: "row" }} backgroundColor={"whitesmoke"} >
                            <Box width={{ base: "100%", md: "50%", lg: "50%" }} margin={"auto"}>
                                <Image src={demo1} borderRadius={"45%"} width={"100%"}></Image>
                            </Box>
                            <Box>
                                <Heading color="Orange">
                                    Request a Demo
                                </Heading>
                                <Text textAlign={"left"}>
                                    ✅Get control of your Business with Us. <br />
                                    ✅Create invoices, manage receivables and payable<br />
                                    ✅and send Payment Reminders.<br />
                                    ✅Manage complete stock inventory easily.<br />
                                </Text>
                                
                                <Input background={"white"} placeholder='Enter Your Phone Number' type='number'></Input>
                                <Box justifySelf={"baseline"}>
                                    <Button background={"orange"} margin={"40px"} borderRadius={"50%"} >Submit</Button>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                    
                </Flex>

            </>
        )
    }

export default Request_A_Demo


