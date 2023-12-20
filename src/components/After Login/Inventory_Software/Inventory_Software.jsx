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
import gr from "../../assets/gr.gif"
import fly2 from "../../assets/fly2.gif"
import kkiu201 from "../../assets/kkiu201.jpg"
import Navbar_AL from '../../Navbar_AL';


const Inventory_Software = () => {
    return (
    <>
        <Navbar_AL/>
        <Flex width="100%" padding={"5%"} borderRadius={"20px"} >
            <Flex flexDirection={{ base: "column", md: "column", lg: "row" }}>
                <VStack marginBottom={"15px"}>
                    <Box>
                        <Heading> You Can Start Your Journey With Our Billing System <br/>
                        </Heading>
                        <Heading color={"orange"}> With 14 Days Free Trial</Heading>
                    </Box>
                    <Box border={"1 px solid orange"} width="180px" borderRadius={"20px"}>
                        <Image src={fly2} width="200px" borderRadius={"20px"} ></Image>
                    </Box>
                    <Box>
                        <Link to="/HomeDash"><Button background={"orange"}>Start Now</Button></Link>
                    </Box>
                </VStack>
                <VStack>
                    <Image src={gr}></Image>
                </VStack>
            </Flex>
        </Flex>
    </>
    )
}

export default Inventory_Software
