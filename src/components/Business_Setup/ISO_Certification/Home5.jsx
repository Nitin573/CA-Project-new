import { Box, HStack, Text, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import text from "../../assets/text.png"
import phone from "../../assets/phone.png"
import mail from "../../assets/mail.png"
import "../../../styles/Home.css";
import { Link } from 'react-router-dom'


export default function Home5() {
    return (
        <Box>
            <Text mt="20px" justifyContent={"center"} fontSize="2xl">
                For OPC
                <span style={{ color: "#fdc400" }} > Asaanly Biz </span>
                Why Should I Use
            </Text>
            <HStack>

                <HStack alignItems="center" w="80%" m="auto" justifyContent="center" flexWrap="wrap">
                    <Link>
                        <VStack maxW={"300px"}>
                            <Image src={phone} alt=""></Image>
                            <Text fontSize="20px">Fix an appointment</Text>
                            <Text>Just reach out to our experts at vakilsearch on our website</Text>
                        </VStack>
                    </Link>
                    <Link>

                        <VStack maxW={"300px"}>
                            <Image src={text} alt=""></Image>
                            <Text fontSize="20px">Get all your queries resolved</Text>
                            <Text>On the call, get your queries resolved without any delay. Provide the required documents</Text>
                        </VStack>
                    </Link>
                    <Link>

                        <VStack maxW={"300px"}>
                            <Image src={mail} alt=""></Image>
                            <Text fontSize="20px">Holistic guidance</Text>
                            <Text>Our team will support you with the formalities and compliances following registration</Text>
                        </VStack>
                    </Link>
                </HStack>
            </HStack>
        </Box>
    );
};
