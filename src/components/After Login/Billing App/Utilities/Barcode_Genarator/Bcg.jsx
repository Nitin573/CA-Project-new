import React, { useState } from 'react';
import JsBarcode from 'jsbarcode';
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
const BarcodeGenerator = () => {
    const [itemName, setItemName] = useState('');
    const [itemCode, setItemCode] = useState('');
    const [header, setHeader] = useState('');
    const [line1, setLine1] = useState('');
    const [line2, setLine2] = useState('');

    const generateBarcode = () => {
        if (itemName && itemCode && header && line1 && line2) {
            const barcodeValue = `${itemCode}`;
            JsBarcode('#barcode', barcodeValue, {
                width: "1px",
                height: "20px",

            });
        } else {
            const barcodeValue = "Please enter all field";
            JsBarcode('#barcode', barcodeValue, {
                width: "1px",
                height: "20px",

            } )
            
        }
    };
    // {

    //     generateBarcode();
    // }
    
    return (
        <VStack margin={"auto"} marginTop="20px" padding="20px">
            <Flex width="100%" margin={"auto"} marginTop="0px">
                <div>

                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        placeholder="Enter item name"
                    />
                </div>
                <div>

                    <input
                        type="number"
                        value={itemCode}
                        onChange={(e) => setItemCode(e.target.value)}
                        placeholder="Enter item Code/Id"
                    />
                </div>
                <div>

                    <input
                        type="text"
                        value={header}
                        onChange={(e) => setHeader(e.target.value)}
                        placeholder="Enter header"
                    />
                </div>
                <div>

                    <input
                        type="text"
                        value={line1}
                        onChange={(e) => setLine1(e.target.value)}
                        placeholder="Enter line 1"
                    />
                </div>
                <div>

                    <input
                        type="text"
                        value={line2}
                        onChange={(e) => setLine2(e.target.value)}
                        placeholder="Enter line 2"
                    />
                </div>


                <Box id="bb" height={"150px"} border={"1px solid"}
                    m={"auto"}
                >
                    <>{header}</>
                    {/* <svg maxWidth="100px" id="barcode" style={{
                    m: "auto",
                    justifyContent: "center",
                    height: "20px",

                }} /> */}
                    <canvas id="barcode"
                        style={{
                            m: "auto",
                            justifyContent: "center",
                            height: "50px",
                            width: "150px"
                        }}
                    ></canvas>
                    <p >{line1}</p>
                    <p>{line2}</p>
                </Box>
            </Flex>
            <Button onClick={generateBarcode}>Generate Barcode</Button>
        </VStack>
    );
};

export default BarcodeGenerator;




