import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import VendorSidebar from './VendorSidebar';
import VendorHeader from './VendorHeader';

const Layout = ({ children }) => {
  return (
    <Flex>
      <VendorSidebar />
      <Box flex="1">
        <VendorHeader />
        <Box p="4" ml="200px">
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;
