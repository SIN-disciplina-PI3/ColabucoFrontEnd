import React from 'react'
import { Box, Image, Link, Input, HStack, useColorMode, IconButton, Icon, Text, Portal, Drawer, useDisclosure } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import { FiSun, FiMoon, FiUser, FiShoppingBag } from "react-icons/fi";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
} from '@chakra-ui/react'
import Login from '../pages/Login';
import ShoppingCart from './ShoppingCart';


function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Box >
            <HStack borderBottom='solid 3px black'
                p='10px 100px'
                spacing='8%'>
                <Link href='/'><Image src={logo} alt='Logo Colabuco' /></Link>
                <Input placeholder='O que você procura?'
                    w='60%'
                    border='solid 3px black'
                    borderRadius='8px'
                />
                <HStack align='center' spacing='15%'>

                    <Popover>
                        <PopoverTrigger>
                            <Link >
                                <Icon as={FiUser} w={8} h={8} />
                            </Link>
                        </PopoverTrigger>
                        <Portal>
                        <PopoverContent w='45rem' h='30rem'>
                        <PopoverArrow />
                        <PopoverBody>
                            <Login></Login>
                        </PopoverBody>
                        </PopoverContent>
                        </Portal>
                    </Popover>

                    <ShoppingCart></ShoppingCart>

                    <IconButton
                        icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
                        aria-label='Sun'
                        isRound={true}
                        size='sm'
                        onClick={toggleColorMode}

                    />

                    {/*<Button src={SunIcon} onClick={toggleColorMode}>
                         {colorMode === 'light' ? 'Escuro' : 'Claro'}
                         </Button> */ }

                </HStack>

            </HStack>
            <HStack bg="#FFFF00" padding='0  100px' justify='center' spacing='5px' gap='0'>
                <Link borderBottom='solid 3px transparent' style={{ textDecoration: 'none' }} href="/" className='fonte2 categoria'>INÍCIO</Link>
                <Link borderBottom='solid 3px transparent' style={{ textDecoration: 'none' }} href="productscreen" className='fonte2 categoria'>PRODUTOS</Link>
                <Link borderBottom='solid 3px transparent' style={{ textDecoration: 'none' }} href="" className='fonte2 categoria'>ARTISTAS</Link>
                <Link borderBottom='solid 3px transparent' style={{ textDecoration: 'none' }} href="sobrecolabuco" className='fonte2 categoria'>SOBRE A COLABUCO</Link>
            </HStack>
        </Box>
    );
}

export default Navbar;

