import React from 'react';
import {
  Box,
  Flex,
  VStack,
  Text,
  Icon,
  Avatar,
  Link,
  Divider,
} from '@chakra-ui/react';
import {
  FiHome,
  FiFileText,
  FiUsers,
  FiClipboard,
  FiBarChart2,
  FiMessageSquare,
  FiThumbsUp,
  FiActivity,
  FiCalendar,
  FiAlertTriangle,
  FiLogOut,
} from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';



const VendorSidebar = () => {
  return (
    <Flex>
      <Box
        w="200px"
        h="100vh"
        bg="blue.900"
        color="white"
        p="4"
        position="fixed"
        top="0"
        left="0"
        boxShadow="md"
        overflowY='auto'
      >
        <Flex align="center" mb="4">
          <Avatar name="Vendor Name" src="path/to/profile/image" mr="2" />
          <Text fontSize="lg">Vendor Name</Text>
        </Flex>

        <VStack spacing="2" align="start">
          <Link
            display="flex"
            alignItems="center"
            as={RouterLink} 
            to="/vendor-dashboard"
            p="2"
            _hover={{ bgColor: 'blue.700' }}
          >
            <Icon as={FiHome} mr="2" />
            Dashboard
          </Link>
          <Link
            display="flex"
            alignItems="center"
            as={RouterLink} 
            to="/vendor-documents"
            p="2"
            _hover={{ bgColor: 'blue.700' }}
          >
            <Icon as={FiFileText} mr="2" />
            Documents
          </Link>
          {/* other menu items */}
          <Link
            as={RouterLink}
            to='/vendor-clients'
            display="flex"
            alignItems="center"
            p="2"
            _hover={{ bgColor: 'blue.700' }}
          >
            <Icon as={FiUsers} mr="2" />
            Clients
          </Link>
          <Link
            as={RouterLink}
            to='/vendor-follow-up'
            display="flex"
            alignItems="center"
            p="2"
            _hover={{ bgColor: 'blue.700' }}
          >
            <Icon as={FiClipboard} mr="2" />
            Follow-up
          </Link>
          {/* <Link
            as={RouterLink} // Use RouterLink component
            to="/vendor-working-performance"
            display="flex"
            alignItems="center"
            p="2"
            _hover={{ bgColor: 'teal.600' }} // Add hover background color
          >
            <Icon as={FiBarChart2} mr="2" />
            Performance
          </Link> */}
          <Divider />
          {/* <Link
            display="flex"
            alignItems="center"
            p="2"
            _hover={{ bgColor: 'teal.600' }} // Add hover background color
          >
            <Icon as={FiMessageSquare} mr="2" />
            Messages
          </Link> */}
          {/* <Link
            display="flex"
            alignItems="center"
            p="2"
            _hover={{ bgColor: 'teal.600' }} // Add hover background color
          >
            <Icon as={FiThumbsUp} mr="2" />
            Achievements
          </Link> */}
          {/* <Link
            display="flex"
            alignItems="center"
            p="2"
            _hover={{ bgColor: 'teal.600' }} // Add hover background color
          >
            <Icon as={FiActivity} mr="2" />
            Incentives
          </Link> */}
          {/* <Link
            display="flex"
            alignItems="center"
            p="2"
            _hover={{ bgColor: 'teal.600' }} // Add hover background color
          >
            <Icon as={FiCalendar} mr="2" />
            Working Schedule
          </Link> */}
          <Link
            as={RouterLink}
            to='/vendor-complaints'
            display="flex"
            alignItems="center"
            p="2"
            _hover={{ bgColor: 'blue.700' }}
          >
            <Icon as={FiAlertTriangle} color="red" mr="2" />
            Complaints
          </Link>
          <Link
            display="flex"
            alignItems="center"
            p="2"
            _hover={{ bgColor: 'blue.700' }}
          >
            <Icon as={FiLogOut} color="red" mr="2" />
              Logout
          </Link>
        </VStack>
      </Box>
    </Flex>
  );
};

export default VendorSidebar;
