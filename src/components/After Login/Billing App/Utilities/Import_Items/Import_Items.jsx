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
import ImportItemsPage from './Impro';

const Import_Items
    = () => {
        
        return (

            <>
            

                <Flex >

                    <Slidebar />
                    <Box width={"100%"}>
                        <ImportItemsPage />
                    </Box>
                    
                </Flex>


            </>
        )
    }

export default Import_Items


