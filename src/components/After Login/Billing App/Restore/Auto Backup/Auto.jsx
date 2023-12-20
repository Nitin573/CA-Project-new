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

} from '@chakra-ui/react';
import './Auto.css';
import Slidebar from '../../Slidebar/Slidebar';
import Company_name from '../../Company_name/Company_name';

const Auto = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };
const Company={name: 'Company Name'}
    return (
        <>
            <Company_name company_nam={Company.name} />
            <Flex>
            <Slidebar />
            <HStack m="auto" marginTop={"20px"}>
                <Text m="auto">Auto Backup</Text>
                <Box className={`toggle ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
                    <Box className="toggle-handle" />
                </Box>
            </HStack>
        </Flex>
        </>
    );
};

export default Auto;
