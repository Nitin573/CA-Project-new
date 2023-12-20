
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

import Tab from './Tab';

const Recycle_Bin
    = () => {

        return (

            <>


                <Flex >

                    <Slidebar />
                    <Box width="100%">
                        <Tab/>
                    </Box>
                    

                </Flex>

            </>
        )
    }


export default Recycle_Bin
