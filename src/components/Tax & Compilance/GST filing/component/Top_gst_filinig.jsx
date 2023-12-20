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
const Top_gst_filinig = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <VStack bgImage={b2b2} style={{
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxSizing: "border-box"
        }}>
            <Flex bg="rgba(200, 200, 200, 0.399)" margin="10px" borderRadius={"0px 30px"} flexDirection={{
                base: "column", md: "row", lg: "row"
            }}>
                <VStack gap={"25px"} ><div class="styles_h1Container__BUOj5" >
                    <h1 >GST Returns Filing Made Easy</h1>
                </div>

                    <Text>
                        <b>Guaranteed</b>
                        GST filing at the government portal under
                        <b>24 hrs</b>
                        by top CA’s
                    </Text>
                    <Text>

                        Get MSME Registration and your annual returns filed before the deadline

                    </Text>
                    <HStack cursor="pointer" onClick={onOpen} justifyItems={"center"} justifyContent={"center"}>
                        <Text margin="auto"> Click to watch 60 seconds video</Text>
                        <Box className='container' margin={"auto"}>
                            <Image src={"https://assets.vakilsearch.com/live-images/youtube_play.svg"} width={"20px"} height={"20px"} />
                        </Box>
                    </HStack>

                </VStack>
                <WP_from />
            </Flex>



            {/* video modal */}


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Video Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AspectRatio maxW='560px' ratio={1}>
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
            </Modal>
        </VStack>
    )
}

export default Top_gst_filinig 