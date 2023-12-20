import Home4 from '../components/SoftWare/Home4'
import Home5 from "../components/SoftWare/Home5"
import Home6 from "../components/SoftWare/Home6"
import Customer from "../components/Customers";
import { Box, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import Navbar_AL from '../components/Navbar_AL';
let images = ["https://images.pexels.com/photos/955402/pexels-photo-955402.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600",
]
let desc = [
    " Optimal and Secure application",
    "Production level realable applications",
    "Full stack Developement",
    "Android,ios and Multi platform supports"
]


export default function SoftWare() {

    return (
        <>
            <Navbar_AL/>
            <Box
                maxWidth={"99vw"}
                overflowX="hidden"
            >
                <Heading mt="30px">Our It Products and supports</Heading>
                <HStack w="80%" m="auto" mt="30px" mb="40px" textAlign={"center"} justifyContent="center" alignItems={"center"}
                    flexWrap={{ lg: "nowrap", md: "wrap", sm: "wrap", base: "wrap" }}
                    gap="20px">
                    {
                        images.map((e, i) => (
                            <Flex key={i}
                                boxShadow="1px 1px 10px black"
                                minH="250px"
                                maxH={{ lg: "250px", md: "150px", }}
                                maxW={{ lg: "400px", md: "250px" }}
                                borderRadius={"10px"}
                                flexDirection={"column"}
                                alignItems="center"
                            >
                                <Image src={e} w="100%" borderRadius={"10px 10px 0 0"} ></Image>
                                <Text textAlign={"center"} w="80%" fontSize={"20px"}>{desc[i]}</Text>
                            </Flex>
                        ))
                    }
                </HStack>
                <Home4/>
            </Box>
            <Home5/>
            <Home6/>
            <Customer/>
        </>
    )
}
