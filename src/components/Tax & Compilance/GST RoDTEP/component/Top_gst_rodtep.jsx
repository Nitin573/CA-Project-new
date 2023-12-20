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

import b2b2 from '../../../assets/b2b2.svg'
import Rectangle from '../../../assets/Rectangle.png'
import WP_from from '../../WP_From/WP_from'
import mouthshut_first from '../../../assets/mouthshut_first.svg'
import trustpilot_second from '../../../assets/trustpilot_second.svg'
import google_third from '../../../assets/google_third.svg'
const Top_gst_rodtep = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <VStack bgImage={b2b2} style={{
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "cover",
            // backgroundPosition: "center",
            // boxSizing: "border-box",
            // backgroundSize: "contain",
        }}>
            <Flex bg="rgba(200, 200, 200, 0.399)" margin="10px" borderRadius={"0px 30px"} flexDirection={{
                base: "column", md: "row", lg: "row"
            }}>
                <VStack gap={"25px"} ><Box className='container' borderBottom={"3px solid orange"} >
                    <h1 >Remission of Duties and Taxes on Exported Products</h1>
                </Box>

                    <Text>
                        RoDTEP: Export with ease. Bye-bye MEIS, hello compliance with global trade rules.
                        <b>T&C* </b>

                    </Text>
                    <Text>

                        RoDTEP: Govt-backed and globally compliant. Export confidently with our trusted duty and tax remission scheme.

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
            </Flex>


        </VStack>
    )
}

export default Top_gst_rodtep 