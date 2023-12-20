import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react';

  
const ConsultAnExpert = () => {
    return (
        <Menu>
            <MenuButton rightIcon={<ChevronDownIcon />} fontSize="80%" fontWeight="400">
                Consult an Expert
            </MenuButton>
            <MenuList fontWeight={600}>
                <MenuItem _hover={{bg: "#2f6ef7", cursor: "pointer"}}>Talk to a Lawyer</MenuItem>
                <MenuItem _hover={{bg: "#2f6ef7", cursor: "pointer"}}>Talk to a Chartered Accountant</MenuItem>
                <MenuItem _hover={{bg: "#2f6ef7", cursor: "pointer"}}>Talk to a Company Secretary</MenuItem>
                <MenuItem _hover={{bg: "#2f6ef7", cursor: "pointer"}}>Talk to a IP/Trademark Lawyer</MenuItem>
            </MenuList>
        </Menu>
    );
};

export { ConsultAnExpert };