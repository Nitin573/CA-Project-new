import React, { useState } from 'react'
import {
    Box, Button, Flex, HStack, Image, Input, Select, Text, VStack, Wrap, Heading, List,
    useDisclosure,
    Collapse,
    keyframes,
    Icon,

} from '@chakra-ui/react'

import { Link } from "react-router-dom";
import { color } from 'framer-motion';
import home from "../../../assets/home.png"
import perties from "../../../assets/perties.png"
import items2 from "../../../assets/items2.webp"
import sale from "../../../assets/sale.png"
import shopping from "../../../assets/shopping.jpg"
import Expenses from "../../../assets/Expenses.jpg"
import bank from "../../../assets/bank.jpg"
import loan from "../../../assets/loan.jpg"
import otherp from "../../../assets/otherp.png"
import video from "../../../assets/video.jpg"
import feedback00 from "../../../assets/feedback00.png"
import tinfo from "../../../assets/tinfo.png"
import onshop from "../../../assets/onshop.png";
import report_icon from "../../../assets/report_icon.png";
import utility from "../../../assets/utility.png";
import restore from "../../../assets/restore.png";


import "./Slidbar.css";
import BackdropExample from './pop';
import { FaBoxOpen, FaBoxes, FaCaretDown, FaChartLine, FaCloudUploadAlt, FaEnvelopeOpenText, FaHome, FaInfo, FaListAlt, FaMix, FaMoneyCheck, FaMoneyCheckAlt, FaPiggyBank, FaShoppingCart, FaStore, FaTags, FaThumbsUp, FaUsers, FaWallet, FaWrench } from 'react-icons/fa';
import { AiOutlineDollar } from 'react-icons/ai';


const Slidebar = () => {
    const { isOpen, onToggle } = useDisclosure()

    const collapse = useDisclosure()
    const collapse1 = useDisclosure()
    const collapse2 = useDisclosure()
    const collapse3 = useDisclosure()
    const collapse4 = useDisclosure()

    const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(180deg); }
`


    return (
        <Box minHeight={"600px"} backgroundColor="rgb(1,37,70)" color={"white"} padding={"5px"} boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        position="sticky" left={"0px"} top={"0"} height={{base:"100vh",md:"100vh"}} overflowY={"scroll"} 
        // scrollbarWidth="thin" 
        css={{
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '4px', 
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#FFB91D',
          },
        }}
        >
            <Box boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" p={"2px"} m={"10px"} >
                <Link to={"/HomeDash"}>
                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px" 
                    >

                        {/* <Image src={home} width={"34px"} borderRadius={"50%"} ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Home</Text> */}
                        <Flex ml='2' justifyContent='center'>
                            <FaHome size='26px'/>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Home</Text>
                        </Flex>
                    </Flex>
                </Link>

                <Link to={"/Parties"}>
                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px">
                        {/* <Image src={perties} width={"34px"} borderRadius={"50%"} ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Parties</Text> */}
                        <Flex ml='2' justifyContent='center'>
                            <FaUsers size='28px'/>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Parties</Text>
                        </Flex>
                    </Flex>
                </Link>

                <Link to={"/Items"}>
                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px">
                        {/* <Image src={items2} width={"34px"} borderRadius={"50%"} ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Items</Text> */}
                        <Flex ml='2' justifyContent='center'>
                            <FaBoxOpen size='28px'/>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Items</Text>
                        </Flex>
                    </Flex>
                </Link>

                {/* <Link to={"/Sale"}> */}
                <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} cursor={"pointer"}
                    _hover={{
                        backgroundColor: "orange", borderRadius: "10px",
                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"
                    onClick={collapse.onToggle}
                >
                    {/* <Image src={sale} width={"34px"} borderRadius={"50%"}></Image>
                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }} justifyContent={"space-between"}> Sale   </Text>
                    <Text
                        display={{ base: "none", md: "flex", lg: "flex" }}
                    > ▼</Text> */}
                    <Flex ml='2' justifyContent='center'>
                        <FaTags size='26px'/>
                        <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Sale</Text>
                        <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1.5'>
                            <FaCaretDown size='20px'/>
                        </Text>
                    </Flex>
                </Flex>

                {/* Sales collapse */}
                <Collapse in={collapse.isOpen} animateOpacity>
                    <Box

                        color='white'
                        fontSize={"12px"}
                        shadow='md'
                    >

                        <Link to={"/Sale"}>
                            <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                _hover={{
                                    backgroundColor: "orange", borderRadius: "10px",
                                }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                            >

                                <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Sales Invoice</Text>
                            </HStack>
                        </Link>

                        <Link to={"/Estimate"}>
                            <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                _hover={{
                                    backgroundColor: "orange", borderRadius: "10px",
                                }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                            >

                                <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Estimate</Text>
                            </HStack>
                        </Link>

                        <Link to={"/PaymentIn"}>
                            <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                _hover={{
                                    backgroundColor: "orange", borderRadius: "10px",
                                }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                            >

                                <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Payment In</Text>
                            </HStack>
                        </Link>

                        <Link to={"/Sale_Order"}>
                            <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                _hover={{
                                    backgroundColor: "orange", borderRadius: "10px",
                                }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                            >

                                <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Sale Order</Text>
                            </HStack>
                        </Link>

                        <Link to={"/Delivery_Channal"}>
                            <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                _hover={{
                                    backgroundColor: "orange", borderRadius: "10px",
                                }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                            >

                                <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Delivery Channal</Text>
                            </HStack>
                        </Link>

                        <Link to={"/Sale_Return"}>
                            <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                _hover={{
                                    backgroundColor: "orange", borderRadius: "10px",
                                }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                            >

                                <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Sale Return</Text>
                            </HStack>
                        </Link>

                    </Box>
                </Collapse>
                {/* </Link > */}


                {/* <Link to={"/Purchase"}> */}

                <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} cursor={"pointer"}
                    _hover={{
                        backgroundColor: "orange", borderRadius: "10px",
                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"
                    onClick={onToggle}
                >
                    {/* <Image src={shopping} width={"34px"} borderRadius={"50%"} ></Image>
                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Purchase</Text>
                    <Text
                        display={{ base: "none", md: "flex", lg: "flex" }}
                    >▼</Text> */}
                    <Flex ml='2' justifyContent='center'>
                        <FaShoppingCart size='24px'/>
                        <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Purchase</Text>
                        <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1.5'>
                            <FaCaretDown size='20px'/>
                        </Text>
                    </Flex>
                </Flex>
                {/* purchase collapse */}
                <Collapse in={isOpen} animateOpacity>
                    <Box
                        fontSize={"12px"}
                        color='white'

                        shadow='md'
                    >
                        <Link to="/Purchase_Bills">
                            <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                _hover={{
                                    backgroundColor: "orange", borderRadius: "10px",
                                }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                            >

                                <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Purchase Bills</Text>

                            </HStack>
                        </Link>

                        <Link to="/Payment_Out">
                            <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                _hover={{
                                    backgroundColor: "orange", borderRadius: "10px",
                                }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                            >

                                <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Payment Out</Text>

                            </HStack>
                        </Link>
                        <Link to="/Purchase_Order">
                            <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                _hover={{
                                    backgroundColor: "orange", borderRadius: "10px",
                                }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                            >

                                <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Purchase Order</Text>

                            </HStack>
                        </Link>

                        <Link to="/Purchase_Return">
                            <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                _hover={{
                                    backgroundColor: "orange", borderRadius: "10px",
                                }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                            >

                                <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Purchase Return</Text>

                            </HStack>
                        </Link>
                    </Box>
                </Collapse>
                {/* </Link > */}
                {/* /Cash_Bank */}
                <Link to={"/Expenses"}>
                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px">
                        {/* <Image src={Expenses} width={"34px"} borderRadius={"50%"} ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Expenses</Text> */}
                        <Flex ml='2' justifyContent='center'>
                            <FaWallet size='24px'/>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Expenses</Text>
                        </Flex>
                    </Flex>
                </Link>
                <Link to={""}>

                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"
                        onClick={collapse3.onToggle}
                    >
                        {/* <Image src={bank} width={"34px"} borderRadius={"50%"} ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Cash & Bank</Text>
                        <Text
                            display={{ base: "none", md: "flex", lg: "flex" }}
                        > ▼</Text> */}
                        <Flex ml='2' justifyContent='center'>
                        <FaMoneyCheckAlt size='26px'/>
                        <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Cash & Bank</Text>
                        <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1.5'>
                            <FaCaretDown size='20px'/>
                        </Text>
                    </Flex>
                    </Flex>
                    {/* Cash&Bank collapse */}
                    <Collapse in={collapse3.isOpen} animateOpacity>
                        <Box
                            fontSize={"12px"}
                            color='white'

                            shadow='md'
                        >
                            <Link to="/Bank_Account">
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Bank Account</Text>

                                </HStack>
                            </Link>

                            <Link to="/Cash_In_Hand">
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Cash In Hand</Text>

                                </HStack>
                            </Link>
                            <Link to="/Cheques">
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Cheques</Text>

                                </HStack>
                            </Link>

                            <Link to="/Loan_Account">
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Loan Account</Text>

                                </HStack>
                            </Link>
                        </Box>
                    </Collapse>

                </Link>

                <Link to={"/reports"}>
                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                    >
                        {/* <Image src={report_icon} width={"34px"} borderRadius={"50%"} p={"1px"} ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Reports</Text> */}
                        <Flex ml='2' justifyContent='center'>
                            <FaChartLine size='28px'/>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Reports</Text>
                        </Flex>

                    </Flex>


                </Link>

            </Box>



            <Box boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" p={"2px"} m={"10px"} >
                <Link to={"/Apply_For_Loan"}>
                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px">
                        {/* <Image src={loan} width={"34px"} borderRadius={"50%"} ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Apply For Loan </Text> */}
                        <Flex ml='2' justifyContent='center'>
                            <AiOutlineDollar size='28px'/>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Apply For Loan</Text>
                        </Flex>
                    </Flex>
                </Link>

                <Link to={"/Other_Products"}>
                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px">
                        {/* <Image src={otherp} width={"34px"} borderRadius={"50%"} ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Other Products</Text> */}
                        <Flex ml='2' justifyContent='center'>
                            <FaMix size='28px'/>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Other Products</Text>
                        </Flex>
                    </Flex>
                </Link >
                {/* /Online_Store */}
                <Link to={""}>
                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"} onClick={collapse4.onToggle}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px">
                        {/* <Image src={onshop} background={"white"} width={"30px"} borderRadius={"40%"} ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Online Store</Text>
                        <Text display={{ base: "none", md: "flex", lg: "flex" }}>▼</Text> */}
                        <Flex ml='2' justifyContent='center'>
                        <FaStore size='26px'/>
                        <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Online Store</Text>
                        <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1.5'>
                            <FaCaretDown size='20px'/>
                        </Text>
                    </Flex>
                    </Flex>
                    {/* Online Store collapse */}
                    <Collapse in={collapse4.isOpen} animateOpacity

                    >
                        <Box

                            color='white'
                            fontSize={"12px"}
                            shadow='md'
                        // width={{ base: "300px", md: "auto", lg: "auto", }}
                        // height={{ base: "300px", md: "auto", lg: "auto", }}
                        // position={{ base: "", md: "auto", lg: "auto", }} 
                        // top="0"
                        >



                            <Link to={"/DashOS"}>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Dashboard </Text>
                                </HStack>
                            </Link>

                            <Link to={"/Manage_Item"}>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Manage Item</Text>


                                </HStack>
                            </Link>

                            <Link to={"/Manage_Orders"}>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Manage Orders</Text>
                                </HStack>
                            </Link>

                            <Link to={"/Stor_Reports"}>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Store Reports</Text>
                                </HStack>
                            </Link>

                        </Box>
                    </Collapse>
                </Link>
                <Link to={""}>
                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"
                        onClick={collapse2.onToggle}

                    >
                        {/* <Image src={restore} width={"34px"} borderRadius={"50%"} p={"1px"} ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Restore/Backup</Text>
                        <Text display={{ base: "none", md: "flex", lg: "flex" }}>▼</Text> */}
                        <Flex ml='2' justifyContent='center'>
                            <FaCloudUploadAlt size='26px'/>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='3' mt='1'>Restore/Backup</Text>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='1.5' mt='1.5'>
                                <FaCaretDown size='20px'/>
                            </Text>
                        </Flex>
                    </Flex>
                    {/* Backup Collapse */}
                    <Collapse in={collapse2.isOpen} animateOpacity

                    >
                        <Box

                            color='white'
                            fontSize={"12px"}
                            shadow='md'
                        // width={{ base: "300px", md: "auto", lg: "auto", }}
                        // height={{ base: "300px", md: "auto", lg: "auto", }}
                        // position={{ base: "", md: "auto", lg: "auto", }} 
                        // top="0"
                        >



                            <Link to={"/Auto"}>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Auto Backup </Text>
                                </HStack>
                            </Link>

                            <Link>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Backup To Computer </Text>


                                </HStack>
                            </Link>

                            <Link>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Backup to Drive</Text>
                                </HStack>
                            </Link>

                            <Link>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Restore Backup</Text>
                                </HStack>
                            </Link>

                        </Box>
                    </Collapse>

                </Link>
                <Link to={""}>
                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"
                        onClick={collapse1.onToggle}
                    >
                        {/* <Image src={utility} bg={"white"} width={"34px"} borderRadius={"50%"} p={"1px"} ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Utilities</Text>
                        <Text display={{ base: "none", md: "flex", lg: "flex" }}>▼</Text> */}
                        <Flex ml='2' justifyContent='center'>
                            <FaWrench size='22px'/>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='3' mt='1'>Utilities</Text>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='1.5' mt='1.5'>
                                <FaCaretDown size='20px'/>
                            </Text>
                        </Flex>
                        
                    </Flex>
                    {/* Utilities Collapse */}
                    <Collapse in={collapse1.isOpen} animateOpacity>
                        <Box

                            color='white'
                            fontSize={"12px"}
                            shadow='md'
                        >

                            <Link to={"/Generate_Barcode"}>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Generate Barcode </Text>
                                </HStack>
                            </Link>

                            <Link to={"/Import_Items"}>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Import Items</Text>
                                </HStack>
                            </Link>

                            <Link to={"/Bulk_Update_Items"}>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Bulk Update Items</Text>
                                </HStack>
                            </Link>

                            <Link to={"/Import_Parties"}>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Import Parties</Text>
                                </HStack>
                            </Link>

                            <Link to={"/Export_to_Tally"}>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Export to Tally</Text>
                                </HStack>
                            </Link>

                            <Link to={"/Export_Items"}>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Export Items</Text>
                                </HStack>
                            </Link>
                            <Link>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }} width={"100%"} height={"100%"} ><BackdropExample /></Text>
                                </HStack>
                            </Link>
                            <Link to={"/Recycle_Bin"}>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Recycle Bin </Text>
                                </HStack>
                            </Link>

                            <Link to={"/Close_Financial_Year"}>
                                <HStack width={{ base: "20px", md: "180px", lg: "180px" }} margin={"8px"} cursor={"pointer"}
                                    _hover={{
                                        backgroundColor: "orange", borderRadius: "10px",
                                    }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px"

                                >

                                    <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}>Close Financial Year </Text>
                                </HStack>
                            </Link>
                        </Box>
                    </Collapse>

                </Link>
            </Box>

            <Box boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" p={"2px"} m={"10px"}>

                <Link to={"/Trial_Info"}>
                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px">
                        {/* <Image src={tinfo} width={"30px"} borderRadius={"50%"} background="white" ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Trial Info </Text> */}
                        <Flex ml='2' justifyContent='center'>
                            <FaInfo size='26px'/>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Trial Info</Text>
                        </Flex>
                    </Flex>
                </Link>

                <Link to={"/Request_A_Demo"}>
                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px">
                        {/* <Image src={video} width={"34px"} borderRadius={"50%"} ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Request A Demo</Text> */}
                        <Flex ml='2' justifyContent='center'>
                            <FaEnvelopeOpenText size='24px'/>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Request A Demo</Text>
                        </Flex>
                    </Flex>
                </Link>

                <Link to={"/Share_Feedback"}>
                    <Flex width={{ base: "20px", md: "180px", lg: "180px" }} marginTop={"8px"} p={"2px"} cursor={"pointer"}
                        _hover={{
                            backgroundColor: "orange", borderRadius: "10px",
                        }} height={"35px"} boxShadow="rgba(0, 0, 0, 0.100) 0px 0px 0px 1px">
                        {/* <Image src={feedback00} width={"34px"} borderRadius={"50%"} ></Image>
                        <Text margin="auto" display={{ base: "none", md: "flex", lg: "flex" }}> Share Feedback </Text> */}
                        <Flex ml='2' justifyContent='center'>
                            <FaThumbsUp size='24px'/>
                            <Text color='whiteAlpha.900' display={{ base: "none", md: "flex", lg: "flex" }} ml='4' mt='1'>Share Feedback</Text>
                        </Flex>
                    </Flex>
                </Link>

            </Box>


        </Box>

    )
}

export default Slidebar
