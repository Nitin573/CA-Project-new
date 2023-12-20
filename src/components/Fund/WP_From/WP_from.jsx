import React from 'react'
import { Box, Flex, Button, HStack, Image, Input, Select, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
let toogle = 0;
const WP_from = () => {
    return (
        <Box className="container" width={{ base: "100%", md: "60%", lg: "50%" }} justifyContent={"center"} margin="auto" padding={{ base: "2%", md: "3%", lg: "5%" }}>
            <VStack gap="20px" borderRadius="20px" minW="70%" minH="60%" p="20px" bg="rgba(255, 255, 255, 0.699)" color="black">
                <Text fontSize="2xl">Get Started</Text>
                <Input bg="white" placeholder='Enter your Email*'></Input>
                <Input bg="white" placeholder='Enter your Mobile number*'></Input>
                <Select bg="white">
                    <option value="">Select City</option>
                    <option value="">city1</option>
                    <option value="">city2</option>
                    <option value="">city3</option>
                </Select>
                <Box >
                    <Text>Get easy updates through  </Text>
                    <HStack m={"auto"} justifyContent={"center"}>
                        <Image src="https://img.icons8.com/color/1x/whatsapp--v2.gif" w="20px" borderRadius={"50%"} cursor="pointer"></Image>
                        <Text>Whatsapp</Text>
                        <Image
                            cursor={"pointer"}
                            w="25px"
                            src="https://cdn-icons-png.flaticon.com/128/5683/5683514.png"
                            onClick={(e) => e.target.src = (toogle++) % 2 ? "https://cdn-icons-png.flaticon.com/128/5683/5683501.png" :
                                "https://cdn-icons-png.flaticon.com/128/5683/5683514.png"}
                            alt="" boxSizing='border-box' h="25px" margin="auto" />
                    </HStack>
                </Box>
                <Button bg="gold" >
                    <Link to="#" >
                        Consult an Expert
                    </Link>
                </Button>
            </VStack>
        </Box>
    )
}

export default WP_from