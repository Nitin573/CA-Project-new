import React, { useState } from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Button,
  Divider,
  Flex,
  IconButton,
  Badge,
  Input,
  HStack,
  Select,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { RiFileUploadLine } from 'react-icons/ri';
import pako from 'pako';

const Documents = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      let compressedFile = null;

      // Check if the selected file is an image
      if (selectedFile.type.startsWith('image/')) {
        compressedFile = await compressImage(selectedFile);
      } else {
        // For non-image files, no compression needed
        compressedFile = selectedFile;
      }

      // Implement your upload logic for the compressed file
      console.log('Uploading file:', compressedFile);

      // You can now upload the 'compressedFile' using an API, library, or service
    }
  };

  const compressImage = async (imageFile) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64Image = event.target.result;
        const buffer = new Uint8Array(base64Image.split(',')[1]);
        const compressedBuffer = pako.deflate(buffer, { level: 6 });
        const blob = new Blob([compressedBuffer], { type: imageFile.type });
        resolve(blob);
      };
      reader.readAsDataURL(imageFile);
    });
  };

  const uploadedDocuments = [
    { id: 1, name: 'Document1.pdf', verified: true },
    { id: 2, name: 'Document2.jpg', verified: false },
    { id: 3, name: 'Document3.jpg', verified: false },
    { id: 4, name: 'Document4.jpg', verified: true },
    // ... add more documents ...
  ];

  const handleDownloadDocument = (documentName) => {
    // Handle download logic here
  };
  const handelSelect = (e) => {

    setSelectedValue(e.target.value)
  }

  return (
    <Box m="4" p="4">
      <Box bg="white" p="8" boxShadow="lg" borderRadius="md">
        <Heading as="h2" size="lg" mb="4" color="gray.600">
          Documents Upload and Verification
        </Heading>
        <Divider mb="4" />

        <Stack spacing="4">
          <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems="flex-start">
            {/* KYC Documents Section */}
            <Box bg="gray.100" p="4" borderRadius="md" flex="1" minH={"210px"}>
              <Text fontSize="lg" mb="4" color="blue.500">
                Upload KYC Document
              </Text>
              <FormControl isRequired>
                <FormLabel htmlFor="Documents Upload Type"></FormLabel>
                <Select placeholder='Select Document Type' onChange={handelSelect}>
                  <option value="Aadhar">Aadhar</option>
                  <option value="Pan">Pan</option>
                  <option value="Driving License">Driving License</option>
                </Select>
              </FormControl>
              <HStack spacing="2" alignItems="flex-start" justifyContent="space-between" mt={"10px"}>
                <label htmlFor="kyc-upload" className="custom-file-upload">
                  <RiFileUploadLine size={30} />
                  Choose a KYC document
                </label>
                <Input
                  type="file"
                  id="kyc-upload"
                  accept=".pdf, .jpg, .jpeg, .png"
                  style={{ display: 'none' }}
                  onChange={handleFileSelect}
                />

                {selectedFile && <Text>{selectedFile.name}</Text>}
                <Button
                  colorScheme={selectedValue == null ? "disabled" : "blue"}
                  onClick={handleUpload}
                  disabled={selectedValue == null}
                >
                  Upload KYC
                </Button>


              </HStack>
            </Box>

            {/* Document Upload Section */}
            <Box bg="gray.100" p="4" borderRadius="md" flex="1" ml={{ md: '4' }} minH={"210px"}>
              <Text fontSize="lg" mb="4" color="blue.500">
                Upload Other Document
              </Text>
              <HStack spacing="2" alignItems="flex-start" justifyContent="space-between">
                <label htmlFor="file-upload" className="custom-file-upload">
                  <RiFileUploadLine size={30} />
                  Choose a file
                </label>
                <Input
                  type="file"
                  id="file-upload"
                  accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
                  style={{ display: 'none' }}
                  onChange={handleFileSelect}
                />
                {selectedFile && <Text>{selectedFile.name}</Text>}
                <Button colorScheme="blue" onClick={handleUpload}>
                  Upload Document
                </Button>
              </HStack>
            </Box>
          </Flex>
        </Stack>

        {/* Uploaded Documents Section */}
        <Stack mt="4">
          <Heading as="h3" size="md">
            Uploaded Documents
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {uploadedDocuments.map((document) => (
              <Flex
                key={document.id}
                alignItems="center"
                justifyContent="space-between"
                p="2"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
              >
                <Text ml="4">{document.name}</Text>
                <Flex alignItems="center">
                  <IconButton
                    icon={<DownloadIcon />}
                    onClick={() => handleDownloadDocument(document.name)}
                    mr="4"
                  />
                  <Badge colorScheme={document.verified ? 'green' : 'red'} mr="4">
                    {document.verified ? 'Verified' : 'Pending'}
                  </Badge>
                </Flex>
              </Flex>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </Box>
  );
};

export default Documents;
