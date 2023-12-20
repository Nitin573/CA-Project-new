import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import RefundPolicy from './RefundPolicy';
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
  Text,
  Link,
} from '@chakra-ui/react';
import { FiBell } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { RiProfileFill } from 'react-icons/ri';
import { BsCheckCircle } from 'react-icons/bs'; // Added icon for verified user

const Header = () => {
  const [notifications, setNotifications] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const isVerified = true; // Set this value based on user verification status

  const handleNotificationClick = () => {
    // Handle notification click, e.g., fetch notifications from API
    // For demonstration purposes, I'm just adding a mock notification
    setNotifications([...notifications, 'New Notification']);
  };

  const handleProfileImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    setProfileImage(URL.createObjectURL(uploadedImage));
  };

  return (
    <Box bg="#FFB91D" px="2" color="white">
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Flex alignItems="center">
            <Heading as='h1' ml="8">
              Profile
            </Heading>
            {isVerified && (
              <Box ml="2" color="blue.500" fontWeight="bold" fontSize="1.2rem">
                <BsCheckCircle/>
              </Box>
            )}
          </Flex>
        </Box>
        <Box alignItems='center' justifyContent='center'>
          <Menu>
            <MenuButton as={IconButton} icon={<FiBell />} variant="outline" />
            <MenuList>
              {notifications.map((notification, index) => (
                <MenuItem key={index}>{notification}</MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Avatar}
              name="User"
              src={profileImage}
              mx="8"
            />
            <MenuList bg="#FFB91D" color="white">
              <MenuItem bg="#FFB91D">
                <RiProfileFill style={{ marginLeft: '4px' }} />
                <label htmlFor="profile-image-upload" ml='4'>
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
              <MenuItem bg="#FFB91D">
                <Link to="/privacy-policy">
                  Privacy Policy
                </Link>
              </MenuItem>
              <MenuItem bg="#FFB91D">
                <Link to="/refund-policy">
                  Refund Policy
                </Link>
              </MenuItem>
              <MenuItem alignItems='center' bg="#FFB91D">
                <FiLogOut color='red' style={{ marginLeft: '4px' }} />
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
