
import React from 'react'
import {
    Box, Flex, HStack, Image,  Heading, 
   

} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company_name/Company_name';
import arrow from "../../../assets/arrow.png"

const Cash_Bank
    = () => {
        const Company = {
            name: "Company Name"
        }
        return (

            <>
                <Company_name company_name={Company.name} />

                <Flex >

                    <Slidebar />
                    <Box p={"10px"} width="100%">
                        <Heading fontSize={"18px"} color="orange">Cash & Bank</Heading>

                        {/* <HStack flexDirection={{ base: "column", md: "row", lg: "row" }}> */}
                        <Box gap={"10px"} p={"10px"} width="100%">

                            <Link to={"/Bank_Account"}>
                                <Box width={"50%"} _hover={{ width: "100%", bgColor: "orange", animationDuration: "2s" }} marginBottom={"10px"}>

                                    <HStack minHeight="100px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" textAlign={"left"} padding="5px">
                                        <HStack>
                                            <Heading fontSize={"15px"}>Bank Account</Heading>

                                            <Image src={arrow} w={"30px"} m={"auto"} borderRadius={"50%"}></Image>
                                        </HStack>
                                    </HStack>


                                </Box>
                            </Link>


                            <Link to={"/Cash_In_Hand"}>
                                <Box width={"60%"} _hover={{ width: "100%", bgColor: "orange" }} marginBottom={"10px"}>

                                    <HStack minHeight="100px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" textAlign={"left"} padding="5px">
                                        <HStack>
                                            <Heading fontSize={"15px"}>Cash In Hand</Heading>

                                            <Image src={arrow} w={"30px"} m={"auto"} borderRadius={"50%"}></Image>
                                        </HStack>
                                    </HStack>


                                </Box>
                            </Link>


                            <Link to={ "/Cheques"}>
                                <Box width={"70%"} _hover={{ width: "100%", bgColor: "orange" }} marginBottom={"10px"}>

                                    <HStack minHeight="100px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" textAlign={"left"} padding="5px">
                                        <HStack>
                                            <Heading fontSize={"15px"}>Cheques</Heading>

                                            <Image src={arrow} w={"30px"} m={"auto"} borderRadius={"50%"}></Image>
                                        </HStack>
                                    </HStack>


                                </Box>
                            </Link>

                            <Link to={"/Loan_Account"}>
                                <Box width={"80%"} _hover={{ width: "100%", bgColor: "orange" }} marginBottom={"10px"}>

                                    <HStack minHeight="100px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" textAlign={"left"} padding="5px">
                                        <HStack>
                                            <Heading fontSize={"15px"}>Loan Account</Heading>

                                            <Image src={arrow} w={"30px"} m={"auto"} borderRadius={"50%"}></Image>
                                        </HStack>
                                    </HStack>


                                </Box>
                            </Link>

                        </Box>


                        {/* </HStack> */}
                    </Box>
                </Flex>

            </>
        )
    }

export default Cash_Bank


