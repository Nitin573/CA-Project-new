
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

const Close_Financial_Year
    = () => {

        return (

            <>


                <Flex >

                    <Slidebar />
                    <Box width="100%" p="10px" >
                        <Heading width="100%" fontSize={"20px"}>CLOSE BOOKS</Heading>
                        <hr width="100%" />
                        <Text>You can select one of the following ways to Close books.</Text>
                        <HStack flexDirection={{ base: "column", md: "row", lg: "row" }} gap={"20px"}>
                            <Box boxShadow="rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" p="30px 10px">
                                <h3>Restart Transaction Numbers
                                </h3>
                                <Text color="black">    Your data remains as it is in your company and only the invoice prefixes are reset for new Financial Year after closing date.</Text>
                                <Button bg="blue.400">Change Prefixes</Button>
                            </Box>
                            <Box boxShadow="rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" p="30px 10px">
                                <h3>Backup all data and start fresh.
                                </h3>
                                <Text color="black">   All the transaction data upto the closing date will be backed up and removed from company to start all fresh. You can always access your data from the backup.
                                </Text>
                                <HStack flexDirection={{ base: "column", md: "row", lg: "row" }} >
                                    <Box>
                                        <label htmlFor="Select Closing Date">Select Closing Date </label>
                                        <input type="date" />
                                    </Box>
                                    <Button bg="blue.400">Start Fresh</Button>
                                </HStack>
                            </Box>
                        </HStack>
                    </Box>

                </Flex>

            </>
        )
    }

export default Close_Financial_Year
