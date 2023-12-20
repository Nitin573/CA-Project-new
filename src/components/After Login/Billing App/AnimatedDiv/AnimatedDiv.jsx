import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import {
    Box, Button, Flex, HStack,  Text, VStack,

    FormLabel,
    FormControl,


} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import Arrow from "../Arrow/Arrow";


const AnimatedDiv = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [isUp, setIsUp] = useState(false);
    const [isBlur, setIsBlur] = useState(false);


    const handleClick = () => {
        setShowDiv(!showDiv);
        arrowClick();
    };

    const handleToggle = () => {
        setIsBlur(!isBlur);
    };

    const arrowClick = () => {
        setIsUp(!isUp);
    }

    const arrowIcon = isUp ? faArrowAltCircleDown : faArrowAltCircleDown;

    return (
        <>
            <Flex flexDirection='row' width="100%">
                <Button onClick={handleClick} bg={"red.400"} w={"90%"} >More Info <span>
                    <FontAwesomeIcon
                        icon={arrowIcon}
                        size="2x"

                        style={{
                            transition: 'transform 0.4s ease-in-out',
                            transform: isUp ? 'rotate(-180deg)' : 'rotate(0deg)',
                            height: "20px"
                        }}
                    />
                </span>
                </Button>
                {/* privacy button */}
                <Button bg="blue.500" width="auto">
                    <Flex fontSize="auto" color="white" alignItems="center" justifyContent="space-between">
                        Privacy
                        <label className="switch" ml='2'>
                            <input type="checkbox" onChange={handleToggle} />
                            <span className="slider round"></span>
                        </label>
                    </Flex>
                </Button>

            </Flex>

            <CSSTransition
                in={showDiv}
                timeout={500}
                classNames="slide"
                unmountOnExit
            >
                <Box className="animated-div" minHeight="300px" bg={"blue.300"} p={"10px"}>
                    <HStack flexDirection={{ base: "column", md: "row", lg: "row" }}>
                        <VStack>
                            {/* <Text color="black" fontWeight={"bold"}></Text> */}
                            <FormControl padding="10px">
                                <FormLabel>Stock Inventory</FormLabel>
                                <Box bg={"white"} width="200px" borderRadius={"10px"}
                                    color="black" fontWeight={"bold"}
                                >
                                    <Text>Stock Value
                                        <br />  <span>0.00</span>
                                    </Text>
                                </Box>
                            </FormControl>
                            <FormControl padding="10px">
                                <FormLabel>Bank</FormLabel>

                                <Box bg={"white"} width="200px" borderRadius={"10px"}
                                    color="black" fontWeight={"bold"}
                                >
                                    <Text>Bank Accounts
                                        <br />  <span>0.00</span>
                                    </Text>
                                </Box>
                            </FormControl>
                            <FormControl padding="10px">
                                <FormLabel>Loan</FormLabel>

                                <Box bg={"white"} width="200px" borderRadius={"10px"}
                                    color="black" fontWeight={"bold"}
                                >
                                    <Text>Loan Accounts
                                        <br />  <span>0.00</span>
                                    </Text>
                                </Box>
                            </FormControl>
                        </VStack>

                        <VStack>
                            {/* <Text color="black" fontWeight={"bold"}></Text> */}
                            <FormControl padding="10px">
                                <FormLabel>Sale</FormLabel>
                                <Box bg={"white"} width="200px" borderRadius={"10px"}
                                    color="black" fontWeight={"bold"}
                                >
                                    <Text>
                                        No. Of Open Orders	0
                                        <br />Open Sale Orders Amount	0
                                    </Text>
                                </Box>
                            </FormControl>
                            <FormControl padding="10px">
                                <FormLabel>Delivery Challans</FormLabel>

                                <Box bg={"white"} width="200px" borderRadius={"10px"}
                                    color="black" fontWeight={"bold"}
                                >
                                    <Text>No. Of Open Challans <span>0.00</span>
                                        <br /> Delivery Challan Amount	0
                                    </Text>
                                </Box>
                            </FormControl>
                            <FormControl padding="10px">
                                <FormLabel>Purchase Orders</FormLabel>

                                <Box bg={"white"} width="200px" borderRadius={"10px"}
                                    color="black" fontWeight={"bold"}
                                >
                                    <Text>
                                        No. Of Purchase Orders	0<br />
                                        Purchase Orders Amount	0
                                    </Text>
                                </Box>
                            </FormControl>
                        </VStack>
                    </HStack>
                </Box>
            </CSSTransition>
        </>
    );
};

export default AnimatedDiv;
