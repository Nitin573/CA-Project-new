
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
import Company_name from '../../Company_name/Company_name'

const Manage_Orders
    = () => {

        const Company = {
            name: "Company Name"
        }
        return (

            <>
                <Company_name company_name={Company.name} />

                <Flex >

                    <Slidebar />
                    <VStack width="100%" m="auto" mt="20px">
                        <Image src='https://www.rakshakmartngp.com/static/media/search-unavailable.d0f76599.png' width={{ base: "200px" ,lg:"400px"}}></Image>
                        <Text>No Online Order Now</Text>
                        
                    </VStack>

                </Flex>

            </>
        )
    }


export default Manage_Orders
