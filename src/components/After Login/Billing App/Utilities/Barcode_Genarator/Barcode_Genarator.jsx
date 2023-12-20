
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
import BarcodeGenerator from './Bcg';
import BarcodeTable from './BCT';



const Barcode_Genarator = () => {
        const Company = {
            name: "Company Name"
        }
        return (

            <>
                <Flex>
                    <Slidebar />
                    <Box width="80%">
                        <BarcodeGenerator />
                        <BarcodeTable />
                        <Button justifyContent={"bottom"} m="20px">Save</Button>
                    </Box>
                </Flex>

            </>
        )
    }

export default Barcode_Genarator


