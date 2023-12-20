import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Badge,
  Text,
} from '@chakra-ui/react';
import { FiBell, FiUser, FiBriefcase, FiPercent, FiLogOut, FiHome } from 'react-icons/fi';


const VendorHeader = () => {
  const notifications = []; // Replace with actual notifications data
  const profileImage = null; // Replace with the path to the profile image

  const handleNotificationClick = () => {
    // Handle notification click
  };

  const handleProfileImageUpload = (event) => {
    // Handle profile image upload
  };

  return (
    <Box flex='1' ml='200px'>
        <Box bg="#FFB91D" p="2" color="white">
        <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <IconButton
                as={RouterLink}
                to="/"
                icon={<FiHome />}
                variant="outline"
                aria-label="Home"
              />
              <Heading as="h1" mr="4" ml="4">
                  Vendor Dashboard
              </Heading>
              <Badge colorScheme="green" px="2" py="1">
                  Online
              </Badge>
            </Flex>
            <Flex alignItems="center">
            {/* <Flex alignItems="center" mr="4">
                <FiUser size={20} />
                <Box ml="2">
                <Text fontSize="sm">Vendor Name</Text>
                <Text fontSize="xs">ID: V123456</Text>
                </Box>
            </Flex> */}
            <Menu>
                <MenuButton
                as={IconButton}
                icon={<FiBell />}
                variant="outline"
                ml="4"
                />
                <MenuList>
                {notifications.map((notification, index) => (
                    <MenuItem key={index}>{notification}</MenuItem>
                ))}
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton
                as={Avatar}
                size="sm"
                name="Vendor Name"
                src={profileImage}
                ml="4"
                />
                <MenuList>
                <MenuItem color='black'>
                    <label htmlFor="profile-image-upload">
                    Update Profile Picture
                    </label>
                    <input
                    type="file"
                    id="profile-image-upload"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleProfileImageUpload}
                    />
                </MenuItem>
                <MenuItem color='black'>
                  <RouterLink to="/privacy-n-refund-policy">Privacy & Refund Policy</RouterLink>
                </MenuItem>
                  <MenuItem color='black'>
                    <FiLogOut color='red' style={{mr:'4'}}/>
                    Logout
                  </MenuItem>
                </MenuList>
            </Menu>
            </Flex>
        </Flex>
        </Box>
    </Box>
  );
};

export default VendorHeader;
