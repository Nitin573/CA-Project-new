import React, { useState } from 'react'
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
    Grid,
    useDisclosure,

} from '@chakra-ui/react'
import "./style.css"
import { Link } from "react-router-dom";
import Slidebar from '../Slidebar/Slidebar';
import Company_name from '../Company_name/Company_name';
import g47 from "../../../assets/g47.png"
import g2L from "../../../assets/g2L.png"
import r40L from "../../../assets/r40L.png"
import feedback1 from "../../../assets/feedback1.gif"


const Share_Feedback
    = () => {
        const Company = {
            name: "Company Name"
        }

        const [isShown, setIsShown] = useState(false);
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)
        const handleClick = (event) => {
            setIsShown(current => !current);

            

        };

        const [rating, setRating] = useState(0);
        return (

            <>
                <Company_name company_name={Company.name} />

                <Flex >

                    <Slidebar />
                    <Box width="100%"  height={"700px"} backgroundColor="whitesmoke" margin="auto" marginBottom="20px" marginTop="20px">
                        <Box backgroundColor="white" width="80%" height="90%" margin="auto" marginTop="20px"
                            boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" minHeight={"550px"}>
                            <Flex width={{ base: "100%", md: "100%", lg: "100%" }} flexDirection={{ base: "column", md: "column", lg: "row" }} margin={"auto"} >
                                <Flex padding={"10px"} flexDirection={{ base: "column", md: "column", lg: "row" }}
                                    margin={"auto"} justifyContent={"center"} justify="center">

                                    <Image src={g47} width={"200px"} margin={"auto"}></Image>
                                    <Image src={g2L} width={"150px"} margin={"auto"}></Image>

                                    <Image src={r40L} width={"150px"} margin={"auto"}></Image>
                                </Flex>
                                
                            </Flex>
                            <VStack width={{ base: "100%", md: "100%", lg: "30%" }} margin={"auto"} padding={"10px"} >                              
                                <Image src={feedback1} borderRadius={"10%"}></Image>
                                <Heading fontSize={"15px"} margin={"auto"} textAlign="center">Give Your Feedback</Heading>

                                

                                {/* star */}
                                <Box className="star-rating" fontSize={{ base: "25px", md: "40px", lg: "40px" }}>
                                    {[...Array(5)].map((star, index) => {
                                        index += 1;
                                        return (
                                            <button
                                                type="button"
                                                key={index}
                                                className={index <= rating ? "on" : "off"}
                                                onClick={() => setRating(index)}
                                            >
                                                <span className="star" >&#9733;</span>
                                            </button>
                                        );
                                    })}
                                </Box>

                                { !isShown &&
                                    (<Button onClick={handleClick}>Submit</Button>) }
                                {isShown &&
                                    (<HStack height="100%" position="relative" background={"blackAlpha.300"}
                                        padding={"20px"} color={"orange"} borderRadius={"20px"} >
                                    <Heading fontSize={"15px"}>
                                        Thank You !!! <br /> For Sharing Your Valuable Feedback <br />
                                        😊😊😊
                                        </Heading>
                                    </HStack>)
                                }
                            </VStack>


                        </Box>

                    </Box>

                </Flex>

            </>
        )
    }

export default Share_Feedback


