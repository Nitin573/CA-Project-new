
import React, { useState } from "react";

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
import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company_name/Company_name';
import SinChart from '../Chart/SinChart';
import LineChart from '../Chart/LineChart';
import Area_Chart from '../Chart/AreaChart';
import AnimatedDiv from '../AnimatedDiv/AnimatedDiv';
import BlurToggle from "./BlurToggle"
const HomeDash
    = () => {
        const salesdata = [200, 20, 96, 987, 80, 874, 33, 20, 200, 100, 300, 600]
        const purchasedata = [200, 20, 96, 987, 80, 874, 33, 20, 200, 100, 300, 600]
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


        const [isBlur, setIsBlur] = useState(false);

        // const handleToggle = () => {
        //     setIsBlur(!isBlur);
        // };

        return (

            <>
                <Company_name company_name={Company.name} />

                <Flex >

                    <Slidebar />
                    <Flex width={{ base: "83%", md: "100%", lg: "100%" }} flex='1'>
                        <VStack width="98%" style={{ filter: isBlur ? "blur(5px)" : "none" }}>
                            <AnimatedDiv />

                            <HStack width={{ base: "90%" }} height={{ base: "700px", md: "400px", lg: "500px" }}
                                flexDirection={{ base: "column", md: "row", lg: "row" }}
                                padding={"10px"}
                                gap={"10px"}>

                                <Box width={{ base: "100%", md: "48%", lg: "48%" }} height={{ base: "350px", md: "400px", lg: "400px" }} boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" padding={"5px"}>
                                    <Text color={"green.500"} fontSize={"20px"}>Sale:  <span>0.00</span></Text>

                                    <Area_Chart data={sale_year_data} v="amount" name="name" col="green" f="greenYellow" />

                                </Box >
                                <Box width={{ base: "100%", md: "48%", lg: "48%" }} height={{ base: "350px", md: "400px", lg: "400px" }} boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" padding={"5px"}>
                                    <Text color={"blue.500"} fontSize={"20px"}>Expenses  <span>0.00</span></Text>

                                    <Area_Chart data={sale_year_data} v="amount" name="name" col="blue" f="skyblue" />

                                </Box >

                            </HStack>

                            <HStack width={{ base: "100%" }} height={{ base: "1200px", md: "1200px", lg: "420px" }}
                                flexDirection={{ base: "column", md: "column", lg: "row" }}
                                padding={"10px"}
                                gap={"10px"}
                                marginBottom={"10px"}
                            >
                                <Box width={{ base: "100%", md: "100%", lg: "33%" }} height={{ base: "350px", md: "400px", lg: "400px" }} boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" padding={"5px"}>
                                    <Text color={"#2884d8"} fontSize={"20px"}>You'll Receive  <span>0.00</span></Text>
                                    <LineChart data={sale_year_data} v="amount" name="name" col="#2884d8" />
                                </Box>
                                <Box width={{ base: "100%", md: "100%", lg: "33%" }} height={{ base: "350px", md: "400px", lg: "400px" }} boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" padding={"5px"}>
                                    <Text color={"#8818d8"} fontSize={"20px"}>You'll Pay  <span>0.00</span></Text>
                                    <LineChart data={sale_year_data} v="amount" name="name" col="#8818d8" />
                                </Box>
                                <Box width={{ base: "100%", md: "100%", lg: "33%" }} height={{ base: "350px", md: "400px", lg: "400px" }} boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" padding={"5px"}>
                                    <Text color={"#82ca9d"} fontSize={"20px"}>Purchase  <span>0.00</span></Text>
                                    <LineChart data={sale_year_data} v="amount" name="name" col="#82ca9d" />
                                </Box>

                            </HStack>
                        </VStack>



                        {/* <Button bg="blue.500" width={"10%"} >
                            <Flex m={"5px"} fontSize={"8px"}>
                                Privacy
                                <label className="switch">
                                    <input type="checkbox" onChange={handleToggle} />
                                    <span className="slider round"></span>
                                </label>
                            </Flex>
                        </Button> */}

                    </Flex >
                </Flex>
            </>
        )
    }

export default HomeDash


