import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormLabel,
  FormControl,
  Divider,
} from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import Layout from './Layout';
import { faTruckField } from '@fortawesome/free-solid-svg-icons';

const clientsData = [
  {
    id: 1,
    name: 'Client 1',
    companyName: 'Company A',
    address: '123 Main St',
    mobile: '123-456-7890',
    email: 'client1@gmail.com',
    possibility: '80%',
    verificationStatus: true,
  },
  {
    id: 2,
    name: 'Client 2',
    companyName: 'Company B',
    address: '456 main street',
    mobile: '987-654-3210',
    email: 'client2@gmail.com',
    possibility: '60%',
    verificationStatus: false,
  },
];

const VendorClientsInformation = () => {
  const [isAddClientModalOpen, setAddClientModalOpen] = useState(false);
  const [clients, setClients] = useState(clientsData);

  const openAddClientModal = () => {
    setAddClientModalOpen(true);
  };

  const closeAddClientModal = () => {
    setAddClientModalOpen(false);
  };

  const handleAddClientSubmit = () => {
    // Handle form submission
    closeAddClientModal();
  };

  const toggleApprovalStatus = (clientId) => {
    // Update the verification status for the clicked client
    const updatedClients = clients.map((client) => {
      if (client.id === clientId) {
        return { ...client, verificationStatus: !client.verificationStatus };
      }
      return client;
    });
    setClients(updatedClients);
  };

  return (
    <Layout>
      <Box p="2">
        <Flex justifyContent="space-between" alignItems="center" mb="4">
          <Heading as="h2" size="lg" textAlign='center'>
            Clients
          </Heading>
          <IconButton icon={<FiPlus />} onClick={openAddClientModal} />
        </Flex>
        <Divider/>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Company Name</Th>
              <Th>Email</Th>
              <Th>Mobile</Th>
              <Th>Possibility</Th>
              <Th>Address</Th>
              <Th>Verification Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {clients.map((client) => (
              <Tr key={client.id}>
                <Td>{client.name}</Td>
                <Td>{client.companyName}</Td>
                <Td>{client.email}</Td>
                <Td>{client.mobile}</Td>
                <Td>{client.possibility}</Td>
                <Td>{client.address}</Td>
                <Td>
                  <Button
                    colorScheme={client.verificationStatus ? 'green' : 'orange'}
                    onClick={() => toggleApprovalStatus(client.id)}
                  >
                    {client.verificationStatus ? 'Verified' : 'Pending'}
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        {/* Add New Client Modal */}
        <Modal isOpen={isAddClientModalOpen} onClose={closeAddClientModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Client</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Vendor's Client Name</FormLabel>
                <Input type="text" placeholder="Enter client name" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Form / Company Name</FormLabel>
                <Input type="text" placeholder="Enter company name" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input type="text" placeholder="Enter address" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Mobile</FormLabel>
                <Input type="tel" placeholder="Enter mobile number" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter email address" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Client Joining Possibility by %</FormLabel>
                <Input type="text" placeholder="Enter joining possibility" />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={closeAddClientModal}>
                Cancel
              </Button>
              <Button colorScheme="blue" mr={3} onClick={handleAddClientSubmit}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </Box>
    </Layout>

  );
};

export default VendorClientsInformation;
