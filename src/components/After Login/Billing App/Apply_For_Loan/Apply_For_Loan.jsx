
import React from 'react'
import {
    Box, Button, Flex, HStack, Image, Text,  Heading,


} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company_name/Company_name';
import loan from "../../../assets/loan.jpg"
import phone1 from "../../../assets/phone1.webp"
import clock from "../../../assets/clock.webp"

const Apply_For_Loan
    = () => {
        const Company = {
            name: "Company Name"
        }
        return (

            <>
                <Company_name company_name={Company.name} />

                <Flex >

                    <Slidebar />
                    <Box margin={"auto"} padding={"5px"}>
                        <Heading fontSize={"18px"}>Apply For A Business Loan</Heading>
                    <HStack padding={"5px"} margin="auto" gap={"10px"} flexDirection={{base:"column",md:"column",lg:"row"}}>
                            
                        <Box background={"blue.400"} padding={"15px"} minHeight="210px" maxWidth="350px" borderRadius={"10px"}>
                            <Image src={loan} width="50px" borderRadius="50%" margin={'auto'}></Image>
                            <Heading fontSize={"15px"}>Unsecured loans up to ₹10lac</Heading>
                            <Text color={"black"}>Get a business loan up to ₹10L without any collateral, starting at annual rate of 11.75%.</Text>
                        </Box>


                        <Box background={"blue.400"} padding={"15px"} minHeight="210px" maxWidth="350px" borderRadius={"10px"}>
                            <Image src={phone1} width="50px" borderRadius="50%" margin={'auto'}></Image>
                            <Heading fontSize={"15px"}>Fully Digital Process</Heading>
                            <Text color={"black"}>The entire process is digital and takes up to 10 minutes to complete. No paperwork is required.</Text>
                        </Box>


                        <Box background={"blue.400"} padding={"15px"} minHeight="210px" maxWidth="350px" borderRadius={"10px"}>
                            <Image src={clock} width="50px" borderRadius="50%" margin={'auto'}></Image>
                            <Heading fontSize={"15px"}>Fast Disbursal</Heading>
                            <Text color={"black"}>Get the loan disbursed within 48 hours post approval, directly in the bank account.</Text>
                        </Box>

                        </HStack>
                        
                        <Button background={"red.500"} color={"white"}>Apply Now</Button>
                    </Box>
                </Flex>

            </>
        )
    }

export default Apply_For_Loan


