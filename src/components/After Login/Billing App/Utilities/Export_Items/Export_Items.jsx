
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

        Table,
        Thead,
        Tbody,
        Tfoot,
        Tr,
        Th,
        Td,
        TableCaption,
        TableContainer,


} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Slidebar from '../../Slidebar/Slidebar';

const Export_Items
    = () => {
        const items = [
            {
                name: 'Item 1',
                code: '001',
                category: 'Category A',
                salePrice: 10.0,
                purchasePrice: 5.0,
                saleDiscount: 0.0,
                currentStock: 100,
                tax: 5.0,
                taxType: 'VAT',
                baseUnit: 'pcs',
                secondaryUnit: 'box',
                conversionRate: 10
            },
            
        ];

        return (

            <>


                <Flex >

                    <Slidebar />

                    <Box width="100%" m={"10px"} >
                        <Button bg={"blue.500"}>Export</Button>
                        <TableContainer>
                        <Table width="100%" overflow="scroll">
                            <Thead>
                                <Tr>
                                    <th>Item Name</th>
                                    <th>Item Code</th>
                                    <th>Category</th>
                                    <th>Sale Price</th>
                                    <th>Purchase Price</th>
                                    <th>Sale Discount</th>
                                    <th>Current Stock</th>
                                    <th>Tax</th>
                                    <th>Tax Type</th>
                                    <th>Base Unit</th>
                                    <th>Secondary Unit</th>
                                    <th>Conv. Rate</th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {items.map((item, index) => (
                                    <Tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.code}</td>
                                        <td>{item.category}</td>
                                        <td>{item.salePrice}</td>
                                        <td>{item.purchasePrice}</td>
                                        <td>{item.saleDiscount}</td>
                                        <td>{item.currentStock}</td>
                                        <td>{item.tax}</td>
                                        <td>{item.taxType}</td>
                                        <td>{item.baseUnit}</td>
                                        <td>{item.secondaryUnit}</td>
                                        <td>{item.conversionRate}</td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                        </TableContainer>


                    </Box>

                </Flex>

            </>
        )
    }


export default Export_Items
