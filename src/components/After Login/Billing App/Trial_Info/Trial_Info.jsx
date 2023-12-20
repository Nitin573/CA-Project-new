
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
import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company_name/Company_name';
import bluebg from "../../../assets/bluebg.jpeg"


const Trial_Info
    = () => {
        const Company = {
            name: "Company Name"
        }
        return (

            <>
                <Company_name company_name={Company.name} />

                <Flex >

                    <Slidebar />
                    <Box margin={"auto"} width="80%">
                        <Flex gap={"10px"} margin="auto" flexDirection={{ base: "column", md: "column", lg: "row" }} padding={"5px"}>
                            <VStack bgImage={bluebg} style={{
                                backgroundRepeat: "no-repeat",
                                backgroundAttachment: "scroll",
                                backgroundSize: "cover",
                                // backgroundPosition: "center",
                                boxSizing: "border-box",
                                margin: "auto",
                                minHeight: "400px",

                                padding: "10px",
                                gap: "10px"
                            }} width={{ base: "220px", md: "400px", lg: "400px" }} borderRadius={"20px"}>
                                <Heading fontSize={"18px"}>Basic Plan</Heading>
                                <Heading margin="auto" padding="3px" borderRadius={"20px"} fontSize={"12px"} width={"160px"} background="orange" >Valid For 1 Years</Heading>
                                <Box background="white" margin="auto" padding="20px" borderRadius={"20px"}>

                                    <Box width={"150 px"} margin="auto" borderRadius={"20px"}>

                                        <Heading fontSize={"15px"}>Only Desktop</Heading>
                                        <Heading fontSize={"12px"} textDecoration={"line-through"}>3100</Heading>
                                        <Heading fontSize={"15px"}>2900</Heading>
                                        <Link to={"/Transaction"}>
                                            <Button border={"1 px solid blue"} color={"blue.200"} >Buy Now</Button>
                                        </Link>
                                    </Box>



                                </Box>
                                <Box background="pink.100" margin="auto" padding="20px" borderRadius={"20px"}>

                                    <Box margin="auto" borderRadius={"20px"}>
                                        <Heading margin="auto" padding="3px" borderRadius={"20px"} fontSize={"12px"} width={"100px"} background="green" color="white">Popular Plan</Heading>
                                        <Heading fontSize={"15px"}>Mobile + Desktop</Heading>
                                        <Heading fontSize={"12px"} textDecoration={"line-through"}>4100</Heading>
                                        <Heading fontSize={"18px"}>3500</Heading>
                                        <Link to={"/Transaction"}>
                                            <Button background={"red.500"}>Buy Now</Button>
                                        </Link>
                                    </Box>



                                </Box>
                            </VStack>

                            <VStack bgImage={bluebg} style={{
                                backgroundRepeat: "no-repeat",
                                backgroundAttachment: "scroll",
                                backgroundSize: "cover",
                                // backgroundPosition: "center",
                                boxSizing: "border-box",
                                margin: "auto",
                                minHeight: "400px",

                                padding: "10px",
                                gap: "10px"
                            }} width={{ base: "220px", md: "400px", lg: "400px" }} borderRadius={"20px"}>
                                <Heading fontSize={"18px"}>Saver Plan</Heading>
                                <Heading margin="auto" padding="3px" borderRadius={"20px"} fontSize={"12px"} width={"160px"} background="orange" >Valid For 3 Years</Heading>
                                <Box background="white" margin="auto" padding="20px" borderRadius={"20px"}>

                                    <Box width={"150 px"} margin="auto" borderRadius={"20px"}>

                                        <Heading fontSize={"15px"}>Only Desktop</Heading>
                                        <Heading fontSize={"12px"} textDecoration={"line-through"}>8299</Heading>
                                        <Heading fontSize={"15px"}>5499</Heading>
                                        <Link to={"/Transaction"}>
                                            <Button border={"1 px solid blue"} color={"blue.200"} >Buy Now</Button>
                                        </Link>
                                    </Box>



                                </Box>
                                <Box background="pink.100" margin="auto" padding="20px" borderRadius={"20px"}>

                                    <Box margin="auto" borderRadius={"20px"}>
                                        <Heading margin="auto" padding="3px" borderRadius={"20px"} fontSize={"12px"} width={"100px"} background="green" color="white">Popular Plan</Heading>
                                        <Heading fontSize={"15px"}>Mobile + Desktop</Heading>
                                        <Heading fontSize={"12px"} textDecoration={"line-through"}>10999</Heading>
                                        <Heading fontSize={"18px"}>8999</Heading>
                                        <Link to={"/Transaction"}>
                                            <Button background={"red.500"}>Buy Now</Button>
                                        </Link>

                                    </Box>



                                </Box>
                            </VStack>
                        </Flex>


                        <Box background={"green.700"} color={"white"} fontSize={"18px"} borderRadius={"20px"} p={"5px"} m={"5px"}>
                            <Heading fontSize={"18px"}>Start Your Free Trial </Heading>
                            <Heading color={"orange"} fontSize={"15px"}>For Next 14 Days!!! </Heading>
                            <Button background={"green.100"} color={"red.500"} fontWeight={"bold"}>Start Now</Button>

                        </Box>
                    </Box>
                </Flex>

            </>
        )
    }

export default Trial_Info


