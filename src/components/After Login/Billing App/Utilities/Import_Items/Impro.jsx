import React, { useState } from 'react';
import axios from 'axios';
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

} from '@chakra-ui/react'
function ImportItemsPage() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleImport = async () => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            await axios.post('/api/import-items', formData);
            alert('Items imported successfully!');
        } catch (error) {
            console.error('Error importing items:', error);
            alert('Error importing items. Please try again.');
        }
    };

    return (
        <Box width={"100%"}>
            <h1>Import Items Page</h1>
            <HStack margin={"auto"} marginTop={"10px"} width={"100%"}>
            
            <label htmlFor="file-input">Choose a Excel file:</label>
            <Input type="file" id="file-input" accept=".xlsx" onChange={handleFileChange} />
            <Button onClick={handleImport} disabled={!file}>
                Import
            </Button>
            </HStack>
        </Box>
    );
}

export default ImportItemsPage;
