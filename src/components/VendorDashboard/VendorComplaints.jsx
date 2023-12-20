import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Badge,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
} from '@chakra-ui/react';
import { FiCheckCircle, FiAlertCircle, FiChevronDown } from 'react-icons/fi';
import Layout from './Layout';

const complaintsData = [
  {
    id: 1,
    clientName: 'Client 1',
    date: '2023-08-10',
    subject: 'Product Issue',
    status: 'resolved',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    clientName: 'Client 2',
    date: '2023-08-09',
    subject: 'Service Complaint',
    status: 'pending',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const VendorComplaints = () => {
  return (
    <Layout>
      <Box p="4">
        <Heading as="h2" size="lg" mb="4">
          Clients Complaint
        </Heading>
        {complaintsData.map((complaint) => (
          <Accordion key={complaint.id} allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg" fontWeight="bold">
                    {complaint.subject}
                  </Text>
                  <Text color="gray.500">
                    {complaint.clientName} - {complaint.date}
                  </Text>
                </Box>
                <Badge colorScheme={complaint.status === 'resolved' ? 'green' : 'red'}>
                  {complaint.status}
                </Badge>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text>{complaint.description}</Text>
                {/* <Divider my="2" />
                <Flex justifyContent="space-between" alignItems="center">
                  <Text>Client Feedback: Lorem ipsum dolor sit amet.</Text>
                  <IconButton
                    icon={<FiChevronDown />}
                    variant="outline"
                    aria-label="Expand"
                  />
                </Flex> */}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Box>
    </Layout>
  );
};

export default VendorComplaints;
