
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
const Loan_Account
    = () => {
        const Company = {
            name: "Company Name"
        }
        return (

            <>
                <Company_name company_name={Company.name} />

                <Flex >

                    <Slidebar />
                    <Box margin={"auto"}>
                        <Text>Add your loan accounts & track loan transactions all at one place.</Text>
                        <Button background={"red.500"}>Add a New Loan Account</Button>
                    </Box>
                </Flex>

            </>
        )
    }

export default Loan_Account


