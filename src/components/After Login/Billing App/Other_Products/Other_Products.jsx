
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
import arrow from "../../../assets/arrow.png"
const Other_Products
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
                        <Heading fontSize={"18px"} color="orange">Other Products</Heading>

                        <HStack flexDirection={{ base: "column", md: "row", lg: "row" }}>
                            <VStack gap={"10px"} p={"10px"} width="100%">

                                <Link>
                                    <Box margin={"auto"}>

                                        <HStack minHeight="100px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" textAlign={"left"} padding="5px">
                                            <Box>
                                                <Heading fontSize={"15px"}>Telecalling CRM</Heading>
                                                <Text>A full-featured Dialer and Telecalling CRM to upgrade productivity and supercharge sales</Text>
                                            </Box>

                                            <Box m={"auto"} width="80px">
                                                <Image src={arrow} w={"30px"} m={"auto"} borderRadius={"50%"}></Image>
                                            </Box>
                                        </HStack>


                                    </Box>
                                </Link>

                                <Link>
                                    <Box margin={"auto"}>

                                        <HStack width="100%" minHeight="100px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" textAlign={"left"} padding="5px">




                                            <Box>


                                                <Heading fontSize={"15px"}>GST Returns Filing by Experts</Heading>
                                                <Text>Get experienced accountants to file your monthly GST returns. Customized pricing plans for Our users.</Text>
                                            </Box>

                                            <Box m={"auto"} width="80px">
                                                <Image src={arrow} w={"30px"} m={"auto"} borderRadius={"50%"}></Image>
                                            </Box>
                                        </HStack>


                                    </Box>
                                </Link>
                                <Link>
                                    <Box margin={"auto"}>

                                        <HStack width="100%" minHeight="100px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" textAlign={"left"} padding="5px">
                                            <Box>
                                                <Heading fontSize={"15px"}>Business Loans</Heading>
                                                <Text>Now avail secured and unsecured business loans up to 10 cr at best interest rates and minimal documentation</Text>
                                            </Box>

                                            <Box m={"auto"} width="80px">
                                                <Image src={arrow} w={"30px"} m={"auto"} borderRadius={"50%"}></Image>
                                            </Box>
                                        </HStack>


                                    </Box>
                                </Link>



                            </VStack>
                            <VStack gap={"10px"} p={"10px"} width="100%">
                                <Link>
                                    <Box margin={"auto"}>

                                        <HStack width="100%" minHeight="100px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" textAlign={"left"} padding="5px">
                                            <Box >
                                                <Heading fontSize={"15px"}>Shop Cover</Heading>
                                                <Text>A full-featured Dialer and Telecalling CRM to upgrade productivity and supercharge sales</Text>
                                            </Box>

                                            <Box m={"auto"} width="80px">
                                                <Image src={arrow} w={"30px"} m={"auto"} borderRadius={"50%"}></Image>
                                            </Box>
                                        </HStack>


                                    </Box>

                                </Link>
                                <Link>
                                    <Box margin={"auto"}>

                                        <HStack width="100%" minHeight="100px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" textAlign={"left"} padding="5px">




                                            <Box>


                                                <Heading fontSize={"15px"}>Buy Printers</Heading>
                                                <Text>Checkout the list of recommended thermal printers that are compatible with Us Buy Printers</Text>
                                            </Box>

                                            <Box m={"auto"} width="80px">
                                                <Image src={arrow} w={"30px"} m={"auto"} borderRadius={"50%"}></Image>
                                            </Box>
                                        </HStack>


                                    </Box>
                                </Link>
                                <Link>
                                    <Box margin={"auto"}>

                                        <HStack width="100%" minHeight="100px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" textAlign={"left"} padding="5px">
                                            <Box>
                                                <Heading fontSize={"15px"}>GST Registration</Heading>
                                                <Text>Get exclusive pricing for assisted GST registration services, starting at Rs.499. Also, avail Trademark. IP, and other compliance services.</Text>
                                            </Box>

                                            <Box m={"auto"} width="80px">
                                                <Image src={arrow} w={"30px"} m={"auto"} borderRadius={"50%"}></Image>
                                            </Box>
                                        </HStack>


                                    </Box>
                                </Link>
                            </VStack>

                        </HStack>
                    </Box>
                </Flex>

            </>
        )
    }

export default Other_Products


