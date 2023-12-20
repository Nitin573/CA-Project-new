// import React from 'react';
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Button,
//   Tbody,
//   Tr,
//   Td,
//   Th,
//   Table,
//   Thead,
// } from '@chakra-ui/react';
// import { FiBarChart2 } from 'react-icons/fi';
// import Layout from './Layout';

// const VendorFollowUp = () => {
//   // Replace with actual data
//   const followUpData = [
//     {
//       id: 1,
//       clientName: 'Client 1',
//       followUpStatus: 'Pending',
//       documentationStatus: 'Incomplete',
//       paymentStatus: 'Pending',
//       complainStatus: 'None',
//     },
//     {
//       id: 2,
//       clientName: 'Client 2',
//       followUpStatus: 'Completed',
//       documentationStatus: 'Complete',
//       paymentStatus: 'Received',
//       complainStatus: 'Pending',
//     },
//     // ... add more data ...
//   ];

//   // Placeholder function for generating reports
//   const handleGenerateReport = () => {
//     // Implement your report generation logic here
//     // This function could send a request to the backend to generate reports
//     // based on the followUpData and other relevant data.
//     console.log('Generating reports...');
//   };

//   return (
//     <Layout>
//       <Box p="4">
//         <Flex justifyContent="space-between" alignItems="center" mb="4">
//           <Heading as="h2" size="lg">
//             Follow-up Page
//           </Heading>
//           <Button
//             leftIcon={<FiBarChart2 />}
//             colorScheme="teal"
//             onClick={handleGenerateReport}
//           >
//             Generate Reports
//           </Button>
//         </Flex>
//         <Box>
//           <Table variant="simple">
//             <Thead>
//               <Tr>
//                 <Th>Client Name</Th>
//                 <Th>Follow-up</Th>
//                 <Th>Documentation</Th>
//                 <Th>Payment</Th>
//                 <Th>Complain</Th>
//               </Tr>
//             </Thead>
//             <Tbody>
//               {followUpData.map((data) => (
//                 <Tr key={data.id}>
//                   <Td>{data.clientName}</Td>
//                   <Td>{data.followUpStatus}</Td>
//                   <Td>{data.documentationStatus}</Td>
//                   <Td>{data.paymentStatus}</Td>
//                   <Td>{data.complainStatus}</Td>
//                 </Tr>
//               ))}
//             </Tbody>
//           </Table>
//         </Box>
        
//         {/* Add charts and additional content here */}
        
//       </Box>
//     </Layout>
//   );
// };

// export default VendorFollowUp;














import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Tbody,
  Tr,
  Td,
  Th,
  Table,
  Thead,
} from '@chakra-ui/react';
import { FiBarChart2 } from 'react-icons/fi';
import Layout from './Layout';

const VendorFollowUp = () => {
  // Replace with actual data
  const followUpData = [
    {
      id: 1,
      clientName: 'Client 1',
      followUpStatus: 'Pending',
      documentationStatus: 'Incomplete',
      paymentStatus: 'Pending',
      complainStatus: 'None',
    },
    {
      id: 2,
      clientName: 'Client 2',
      followUpStatus: 'Completed',
      documentationStatus: 'Complete',
      paymentStatus: 'Received',
      complainStatus: 'Pending',
    },
  ];

  const [reportUrl, setReportUrl] = useState(null);
  const [isReportModalOpen, setReportModalOpen] = useState(false);

  const handleGenerateReport = async () => {
    // Replace with actual report generation logic
    // Simulate generating a report using setTimeout
    const simulatedReportUrl = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('http://example.com/report.pdf'); // Replace with actual report URL
      }, 2000);
    });

    setReportUrl(simulatedReportUrl);
    setReportModalOpen(true); // Open the report modal
  };

  const handleDownloadReport = () => {
    // Replace this with actual download logic
    // In this example, we'll simply open a new window with the report URL
    window.open(reportUrl, '_blank');
  };

  return (
    <Layout>
      <Box p="4">
        <Flex justifyContent="space-between" alignItems="center" mb="4">
          <Heading as="h2" size="lg">
            Follow-up Page
          </Heading>
          <Button
            leftIcon={<FiBarChart2 />}
            colorScheme="teal"
            onClick={handleGenerateReport}
          >
            Generate Reports
          </Button>
        </Flex>
        <Box>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Client Name</Th>
                <Th>Follow-up</Th>
                <Th>Documentation</Th>
                <Th>Payment</Th>
                <Th>Complain</Th>
              </Tr>
            </Thead>
            <Tbody>
              {followUpData.map((data) => (
                <Tr key={data.id}>
                  <Td>{data.clientName}</Td>
                  <Td>{data.followUpStatus}</Td>
                  <Td>{data.documentationStatus}</Td>
                  <Td>{data.paymentStatus}</Td>
                  <Td>{data.complainStatus}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Modal isOpen={isReportModalOpen} onClose={() => setReportModalOpen(false)}>
          <ModalOverlay />
          <ModalContent size='xl'>
            <ModalHeader>Total Clients Report</ModalHeader>
            <ModalCloseButton />
            <ModalBody width="100%">
              <Text fontSize="lg" fontWeight="bold" mb="4">
                  Total Clients Report
              </Text>
                {/* <Table variant="simple" mb="4">
                    <Thead>
                    <Tr>
                        <Th>Client Name</Th>
                        <Th>Follow-up</Th>
                        <Th>Documentation</Th>
                        <Th>Payment</Th>
                        <Th>Complain</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {followUpData.map((data) => (
                        <Tr key={data.id}>
                        <Td>{data.clientName}</Td>
                        <Td>{data.followUpStatus}</Td>
                        <Td>{data.documentationStatus}</Td>
                        <Td>{data.paymentStatus}</Td>
                        <Td>{data.complainStatus}</Td>
                        </Tr>
                    ))}
                    </Tbody>
                </Table> */}
              <Text fontSize="md" fontStyle="italic">
                  This is a summary of the follow-up, documentation, payment, 
                  and complaint status for each client. It provides an overview 
                  of the current status of your clients' interactions and progress.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={handleDownloadReport}>
                Download Report
              </Button>
              <Button variant="ghost" onClick={() => setReportModalOpen(false)}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Layout>
  );
};

export default VendorFollowUp;

