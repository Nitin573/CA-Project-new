import { React } from 'react'
import {
    Box, Button, Flex, HStack, Image, Input, Select, Text, VStack, Wrap, Heading, List,
    ListItem,
    ListIcon,
    OrderedList,
    Link,
    UnorderedList,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    AspectRatio,
    useDisclosure
} from '@chakra-ui/react'

import b2b2 from '../../../../assets/b2b2.svg'
import WP_from from '../../../WP_From/WP_from'
import mouthshut_first from '../../../../assets/mouthshut_first.svg'
import trustpilot_second from '../../../../assets/trustpilot_second.svg'
import google_third from '../../../../assets/google_third.svg'
const Top_pitch_deck = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <VStack bgImage={b2b2} style={{
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxSizing: "border-box"
        }}>
            <VStack width={"100%"} bgColor={"rgb(60,40,80,0.200)"} flexDirection={{
                base: "column", md: "row", lg: "row"
            }}>



                <VStack gap={"25px"} ><Box class="styles_h1Container__BUOj5" borderBottom={"3px solid orange"} >
                    <h1 >Investment Pitch Deck for Business</h1>
                </Box>


                    <Text>
                        Get an expert to build your investment pitch deck from Vakilsearch and impress your potential investors.

                    </Text>
                    <Text textAlign={"left"}>

                        1.Easy 3 step process <br />
                        2.Completely online <br />
                        3.Professional Pitch deck services <br />
                        4.Expert help<br />
                        5.Affordable price <br />

                    </Text>
                    <Box mt="7%" mb="7%" width="100%" display="flex" flexDirection={{ base: "column", sm: "row" }} justifyContent="space-between">
                        <Box width={{ base: "50%", sm: "30%" }} m={{ base: "auto" }} mt={{ base: "10%", sm: "auto" }}>
                            <Image width="100%" src={mouthshut_first} alt="" />
                        </Box>
                        <Box width={{ base: "50%", sm: "30%" }} m={{ base: "auto" }} mt={{ base: "10%", sm: "auto" }}>
                            <Image width="100%" src={trustpilot_second} alt="" />
                        </Box>
                        <Box width={{ base: "50%", sm: "30%" }} m={{ base: "auto" }} mt={{ base: "10%", sm: "auto" }}>
                            <Image width="100%" src={google_third} alt="" />
                        </Box>
                    </Box>

                </VStack>
                <WP_from />
            </VStack>




        </VStack>
    )
}

export default Top_pitch_deck 