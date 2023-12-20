///1
import React, { useState, useEffect } from 'react';
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
    Grid,
    GridItem,
} from '@chakra-ui/react'
const MenuBar = () => {
    const [activeMenu, setActiveMenu] = useState('menu1');
    const [content, setContent] = useState('');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    useEffect(() => {
        // Change content based on active menu
        switch (activeMenu) {
            case 'menu1':
                setContent('Content for menu 1');
                break;
            case 'menu2':
                setContent('Content for menu 2');
                break;
            case 'menu3':
                setContent('Content for menu 3');
                break;
            default:
                setContent('No content');
                break;
        }
    }, [activeMenu]);

    useEffect(() => {
        // Change active menu every 5 seconds
        const interval = setInterval(() => {
            switch (activeMenu) {
                case 'menu1':
                    setActiveMenu('menu2');
                    break;
                case 'menu2':
                    setActiveMenu('menu3');
                    break;
                case 'menu3':
                    setActiveMenu('menu1');
                    break;
                default:
                    setActiveMenu('menu1');
                    break;
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [activeMenu]);

    return (
        <Grid
            gridTemplateColumns="1fr 1fr"
    // grid - template - rows:
        >
            <div>
                <div className="menu-bar">
                    <button className={activeMenu === 'menu1' ? 'active' : ''} onClick={() => handleMenuClick('menu1')} style={{
                        background: activeMenu === "menu1" ? "red" : "white"
                    }}>
                        Menu 1
                    </button>
                </div>
                <div className="menu-bar">

                    <button className={activeMenu === 'menu2' ? 'active' : ''} onClick={() => handleMenuClick('menu2')} style={{
                        background: activeMenu === "menu2" ? "red" : "white"
                    }}>
                        Menu 2
                    </button>
                </div>
                <div className="menu-bar">

                    <button className={activeMenu === 'menu3' ? 'active' : ''} onClick={() => handleMenuClick('menu3')} style={{
                        background: activeMenu === "menu3" ? "red" : "white"
                        }}>
                        Menu 3
                    </button>
                </div>
            </div>
            <div className="content-box">{content}</div>
        </Grid>
    );
};

export default MenuBar;



