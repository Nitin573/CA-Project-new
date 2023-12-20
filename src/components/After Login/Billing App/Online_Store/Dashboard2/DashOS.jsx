
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

} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Slidebar from '../../Slidebar/Slidebar';

import Company_name from '../../Company_name/Company_name'
import Area_Chart from '../../Chart/AreaChart';
const DashOS
    = () => {
        const sale_year_data = [
            {
                name: "Jan",
                amount: 1000,
            },
            {
                name: "Feb",
                amount: 10000,
            },
            {
                name: "Mar",
                amount: 6000,
            },
            {
                name: "apr",
                amount: 30000,
            },
            {
                name: "May",
                amount: 100000,
            },
            {
                name: "Jun",
                amount: 20000,
            },
            {
                name: "Jul",
                amount: 10000,
            },
            {
                name: "Aug",
                amount: 30000,
            },
            {
                name: "Sep",
                amount: 1000,
            },
            {
                name: "Oct",
                amount: 10000,
            },
            {
                name: "Nov",
                amount: 10000,
            },
            {
                name: "Dec",
                amount: 20000,
            },

        ]
        const Company = {
            name: "Company Name"
        }
        return (

            <>
                <Company_name company_name={Company.name} />

                <Flex >

                    <Slidebar />
                    <Box width="100%" m={"auto"}>
                        <HStack width={{ base: "90%" }} height={{ base: "650px", md: "400px", lg: "500px" }}
                            flexDirection={{ base: "column", md: "row", lg: "row" }}
                            padding={"10px"}
                            gap={"10px"}>

                            <Box width={{ base: "100%", md: "48%", lg: "48%" }} height={{ base: "350px", md: "400px", lg: "400px" }} boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" padding={"5px"}>
                                <Text color={"green.500"} fontSize={"20px"}>Sale Order:  <span>0.00</span></Text>

                                <Area_Chart data={sale_year_data} v="amount" name="name" col="green" f="greenYellow" />

                            </Box >
                            <Box width={{ base: "100%", md: "48%", lg: "48%" }} height={{ base: "350px", md: "300px", lg: "300px" }} boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" padding={"5px"}>
                                <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" padding={"20px"}>
                                    <Heading fontSize="25px">Open Order: 2</Heading>
                                </Box>
                                <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" padding={"20px"}>
                                    <Heading fontSize="25px">Store View: 2</Heading>
                                </Box>
                                <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" padding={"20px"}>
                                    <Heading fontSize="25px">Total Order: 2</Heading>
                                </Box>
                            </Box>
                        </HStack>

                        <HStack width={{ base: "90%" }} height={{ base: "350px", md: "200px", lg: "200px" }}
                            flexDirection={{ base: "column", md: "row", lg: "row" }}
                            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
                            padding={"10px"}
                            m="10px"
                            
                            gap={"10px"}>

                            <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" padding={"20px"} w={{base:"80%",md:"30%",lg:"30%"}} cursor={"pointer"}>
                                <Heading fontSize="20px">Manage Items ▶</Heading>
                            </Box>
                            <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" padding={"20px"} w={{ base: "80%", md: "30%", lg: "30%" }} cursor={"pointer"}>
                                <Heading fontSize="20px">Manage Orders ▶</Heading>
                            </Box>
                            <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" padding={"20px"} w={{ base: "80%", md: "30%", lg: "30%" }} cursor={"pointer"}>
                                <Heading fontSize="20px">Store Reports ▶</Heading>
                            </Box>

                        </HStack>

                    </Box>

                </Flex>

            </>
        )
    }

export default DashOS


