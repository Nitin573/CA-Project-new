import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react'
import lg1 from "../components/assets/lg1.png"
import lg2 from "../components/assets/lg2.png"
import lg3 from "../components/assets/lg3.png"
import lg4 from "../components/assets/lg4.png"
import lg5 from "../components/assets/lg5.png"
import lg6 from "../components/assets/lg6.png"

export default function Buisness() {


    return (
            
            <Box>
                <HStack justifyContent="center" flexWrap={"wrap"}>
                    <Text fontWeight="bold" fontSize="3xl" color="gold">500,000</Text><Heading color="black">customers and counting!</Heading>
                </HStack>
                <HStack justifyContent="center" gap="50px" m="20px" flexWrap={"wrap"}>
                    <Image src={lg1} w={{ base: "84px", md: "120px" }} />
                    <Image src={lg2} w={{ base: "84px", md: "120px" }} />
                    <Image src={lg3} w={{ base: "84px", md: "120px" }} />
                    <Image src={lg4} w={{ base: "84px", md: "120px" }} />
                    <Image src={lg5} w={{ base: "84px", md: "120px" }} />
                    <Image src={lg6} w={{ base: "84px", md: "120px" }} />
                </HStack>
            </Box>
    )
}
