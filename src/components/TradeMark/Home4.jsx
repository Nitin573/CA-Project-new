import { Box, Button, Flex, HStack, Image, Input, Select, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import google from "../assets/google.png"
import trustpilot from "../assets/trustpiliot.png"
import mouthshut from "../assets/mouthshut.png"
import "../../styles/Home.css";
import { Link } from 'react-router-dom'
let toogle=0;



export default function Home4() {


    const stylePropP3 = { fontSize: "1xl", color: "black" }

    return (
        <Box w="90%" ml={{ lg: "12vw", md: "6vw", sm: "6vw", base: "6vw" }} >
            <Flex className='home4flex'>
                <Box>
                    <Text fontSize={"18px"} color="#fdc400">
                        SETUP YOUR OWN COMPANY
                    </Text>
                    <h1 style={{ fontSize: "40px", fontWeight: "bold", textShadow: "0px 2px, 2px 0px, 2px 2px" }}>
                        India's Best Trade Mark
                    </h1>
                    <Text {...stylePropP3} >
                        ✓ Get your application submitted within 10 Days
                    </Text>

                    <Text {...stylePropP3} >
                        ✓ Transparent process, thorough follow up and regular updates
                    </Text>

                    <Text>
                        <Text color={"#fdc400"} fontSize="20px">15,000+</Text>OPC registrations since 2011
                    </Text>

                    <Flex className="home4hstack">
                        <Image h="45px" src={mouthshut} alt=''></Image>
                        <Image h="45px" src={trustpilot} alt=''></Image>
                        <Image h="45px" src={google} alt=''></Image>
                    </Flex>

                </Box>

                <VStack bgImage={"https://cdn.pixabay.com/photo/2016/11/06/17/17/north-america-1803504__340.jpg"}
                bgSize="cover"
                 className="home4vstack"
                >
                    <VStack gap="20px" border="1px solid red" borderRadius="20px" minW="50%" minH="70%" p="20px" bg="rgba(255, 255, 255, 0.699)">
                        <Text fontSize="2xl">Get Started</Text>
                        <Input bg="white" placeholder='Enter your Email*'></Input>
                        <Input bg="white" placeholder='Enter your Mobile number*'></Input>
                        <Select bg="white">
                            <option value="">Select City</option>
                            <option value="">city1</option>
                            <option value="">city2</option>
                            <option value="">city3</option>
                        </Select>
                        <HStack>
                            <Text>Get easy updates through  </Text>
                            <Image src="https://img.icons8.com/color/1x/whatsapp--v2.gif" w="20px" cursor="pointer"></Image>
                            <Text>Whatsapp</Text>
                            <Image
                                cursor={"pointer"}
                                w="40px"
                                src="https://cdn-icons-png.flaticon.com/128/5683/5683514.png"
                                onClick={(e) => e.target.src = (toogle++) % 2 ? "https://cdn-icons-png.flaticon.com/128/5683/5683501.png" :
                                    "https://cdn-icons-png.flaticon.com/128/5683/5683514.png"}
                                alt=""></Image>
                        </HStack>
                        
                    </VStack>
                    <Button bg="gold">
                                    <Link to="#">
                                    TALK TO REGISTRATION EXPERT
                                    </Link>
                                </Button>
                </VStack>
            </Flex>
        </Box>
    )
}
