
import React, { useState } from 'react';
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
import excel_dwn2 from "../../../../assets/excel_dwn2.png"
import upload_file from "../../../../assets/upload_file.png"


const Import_Parties
    = () => {
        const [selectedFile, setSelectedFile] = useState(null);

        const handleDrop = (event) => {
            event.preventDefault();
            const file = event.dataTransfer.files[0];
            if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                setSelectedFile(file);
            } else {
                alert('Please drop a valid Excel file (.xlsx)');
            }
        };

        const handleDragOver = (event) => {
            // event.preventDefault();
        };
        return (

            <>


                <Flex >

                    <Slidebar />
                    <Box width="100%">
                        <h1>Import Parties</h1>

                        <HStack flexDirection={{ base: "column", md: "row", lg: "row" }} width={"80%"}
                            m={"auto"} marginTop={"20px"}

                        >
                            <Box width={{ base: "100%", md: "30%", lg: "30%" }} minHeight={"500px"}

                                margin={"auto"}
                                paddingTop="100px"
                                boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"

                            >
                                <Text color={"blackAlpha.700"}> Download .xls/ .xlsx (excel sheet)
                                    <br /> Template to enter data
                                </Text>
                                <Image src={excel_dwn2} margin={"auto"} w={"150px"}></Image>
                                <Button bg={"greenYellow"} m={"20px"}>Download</Button>
                            </Box>
                            <Box width={{ base: "100%", md: "70%", lg: "70%" }}

                                margin={"auto"}
                                p="20px"
                                paddingTop="100px"
                            >
                                <Text color={"blackAlpha.700"}> Upload your.xls/ .xlsx (excel sheet)</Text>
                                <Box border={"1px dashed blue"}
                                    margin={"auto"}
                                    p="20px"
                                    className="drop-zone"
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                >
                                    <Image src={upload_file} margin={"auto"} w={"150px"}  ></Image>
                                    <Text color={"blackAlpha.700"}> Drag and Drop or <span style={{
                                        color: "blue", cursor: "pointer"
                                    }}>click here to Browse

                                    </span> formatted excel file to continue</Text>

                                </Box>
                            </Box>
                        </HStack>
                    </Box>
                </Flex>

            </>
        )
    }




export default Import_Parties
