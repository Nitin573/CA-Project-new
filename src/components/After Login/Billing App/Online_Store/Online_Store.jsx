

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
import comesoon from "../../../assets/comesoon.avif"
import loading from "../../../assets/loading.gif"

const Online_Store
    = () => {
        const Company = {
            name: "Company Name"
        }
        return (

            <>
                {/* <Company_name company_name={Company.name} /> */}

                <Flex >

                    <Slidebar />
                    <VStack width={"80%"} MinHeight="600px" margin="auto">
                        {/* <Image src={loading} width="100px" borderRadius={"50%"}></Image> */}
                        <Box>
                            <Image src={loading}  maxH={"200px"} borderRadius="40%"></Image>
                            <Heading>Coming Soon !!! </Heading>
                        </Box>
                    </VStack>
                </Flex>

            </>
        )
    }

export default Online_Store


