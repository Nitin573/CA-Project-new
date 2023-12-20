
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
    WrapItem,

} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Slidebar from '../../Slidebar/Slidebar';
import Company_name from '../../Company_name/Company_name'

const Manage_Item
    = () => {

        const Company = {
            name: "Company Name"
        }
        const Items = [
            {
                id: 1,
                name: "T-Shirt",
                description: "",
                price: "Rs. 1000",
                image: "data:image/jpeg;base64,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"
            },
            {
                id: 2,
                name: "T-Shirt",
                description: "",
                price: "Rs. 1000",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm3FLw6_rU6-g7zedPUOnmOufv7lXAW3Ijg&usqp=CAU"
            },
            {
                id: 1,
                name: "T-Shirt",
                description: "",
                price: "Rs. 1000",
                image: "data:image/jpeg;base64,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"
            },
            {
                id: 2,
                name: "T-Shirt",
                description: "",
                price: "Rs. 1000",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm3FLw6_rU6-g7zedPUOnmOufv7lXAW3Ijg&usqp=CAU"
            },
        ]
        return (

            <>
                <Company_name company_name={Company.name} />

                <Flex >

                    <Slidebar />

                    <Box p="10px" m={"auto"} mt="20px">
                        <Button>Add Item +</Button>
                        <Heading>Items</Heading>
                        <Wrap m={"auto"} p="5px">
                            {Items.map((data, index) => (
                                <WrapItem key={data.id} width={"250px"} h={"350px"} m={"auto"} p="5px" borderRadius={"20px"} boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;">
                                    <Box m={"auto"}>
                                        <Image src={data.image} width={"200px"} height={"200px"}></Image>
                                        <Text fontSize={"15px"} color={"black"}>{data.name}</Text>
                                        <Text fontSize={"15px"} color={"black"}>{data.price}</Text>
                                        <Button bg={"blue.300"}>Buy Now</Button>
                                    </Box>

                                </WrapItem>
                            ))}
                        </Wrap>
                    </Box>

                </Flex>

            </>
        )
    }





export default Manage_Item
