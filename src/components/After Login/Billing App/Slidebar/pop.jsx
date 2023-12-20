import React, { useState } from 'react'

import {
    Box, Button, Flex, HStack, Image, Input, Select, Text, VStack, Wrap, Heading, List,
    ListItem,
    ListIcon,
    OrderedList,

    UnorderedList,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    AspectRatio,
    useDisclosure,
    Collapse,
    keyframes,

} from '@chakra-ui/react'
function BackdropExample() {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (

        <Box onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
        }} width={"100%"}
        // border={"1px solid black"}
        >
            <Text
                width={"100%"}
                m={"auto"}
            >
                Verify My Data
            </Text>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>No issues</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>No issues were found while checking your data.</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>OK</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>

    )
}
export default BackdropExample