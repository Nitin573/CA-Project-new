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

import pexels587 from '../../../assets/pexels587.jpg'
import watch_now from '../../../assets/watch_now.png'
import WP_from from '../../WP_From/WP_from'
const Top_gst_advisory_portal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <VStack bgImage={pexels587} style={{
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxSizing: "border-box"
        }}>
            <Flex bg="rgba(200, 200, 200, 0.299)" margin="10px" borderRadius={"0px 30px"} flexDirection={{
                base: "column", md: "row", lg: "row"
            }}>
                <VStack gap={"25px"} ><Box class="styles_h1Container__BUOj5" >
                    <h1 >Get All Your GST Related Queries Resolved by Experts!</h1>
                </Box>

                    <Text color={"blackAlpha.700"}>
                        Now govern all the input taxes of your company in just a few clicks thanks to the Vakilsearch GST advice portal!
                    </Text>


                    <Image onClick={onOpen} src={watch_now} width={"150px"} />

                    <HStack gap={"20px"}>

                        <Box >
                            <VStack margin={"auto"}>
                                <img alt="noimage" src="https://assets.vakilsearch.com/live-images/website_revamp/service-review1.svg" margin={"auto"} /><span>400,000 +</span>
                            </VStack><Text color={'whiteAlpha.800'}><b >Business Served</b></Text>
                        </Box>
                        <Box >
                            <VStack >
                                <img alt="noimage" src="https://assets.vakilsearch.com/live-images/website_revamp/service-review2.svg" /><span>4.3/5</span>
                            </VStack>
                            <Text color={'whiteAlpha.800'}><b>Google Ratings</b></Text>
                        </Box>
                        <Box >
                            <VStack >
                                <img alt="noimage" src="https://assets.vakilsearch.com/live-images/website_revamp/service-review3.svg" /><span>EMI</span>
                            </VStack>
                            <Text color={'whiteAlpha.800'}><b>Easy EMI Options</b></Text>
                        </Box>
                    </HStack>
                </VStack>
                <WP_from />
            </Flex >



            {/* video modal */}


            <Modal Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Video Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AspectRatio maxW='660px' ratio={1}>
                            <iframe
                                src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
                                poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
                                alt='Big Buck Bunny'
                                allowFullScreen

                            />
                        </AspectRatio>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal >
        </VStack >
    )
}


export default Top_gst_advisory_portal