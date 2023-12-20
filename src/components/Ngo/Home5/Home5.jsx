import { Box, HStack, Text, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import text from "../../assets/text.png"
import phone from "../../assets/phone.png"
import mail from "../../assets/mail.png"
import "../../../styles/Home.css";
import { Link } from 'react-router-dom'


export default function Home5(props) {
    return (
        <Box>
            <Text mt="20px" justifyContent={"center"} fontSize="2xl">
                {props.heading_1}For OPC
                <span style={{ color: "#fdc400" }} > {props.heading_1} Asaanly Biz </span>
                {props.heading_1}Why Should I Use
            </Text>
            <HStack>

                <HStack alignItems="center" w="80%" m="auto" justifyContent="center" flexWrap="wrap">
                    <Link>
                        <VStack maxW={"300px"}>
                            <Image src={phone} alt=""></Image>
                            <Text fontSize="20px">{props.text1_heading}Fix an appointment</Text>
                            <Text> {props.text1}Just reach out to our experts at vakilsearch on our website</Text>
                        </VStack>
                    </Link>
                    <Link>

                        <VStack maxW={"300px"}>
                            <Image src={text} alt=""></Image>
                            <Text fontSize="20px">{props.text2_heading}Get all your queries resolved</Text>
                            <Text>{props.text2}On the call, get your queries resolved without any delay. Provide the required documents</Text>
                        </VStack>
                    </Link>
                    <Link>

                        <VStack maxW={"300px"}>
                            <Image src={mail} alt=""></Image>
                            <Text fontSize="20px">{props.text3_heading}Holistic guidance</Text>
                            <Text>{props.text3}Our team will support you with the formalities and compliances following registration</Text>
                        </VStack>
                    </Link>
                </HStack>
            </HStack>
        </Box>
    )
}
