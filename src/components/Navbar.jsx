/*import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';*/

import { Box, Image, Link, Flex, Center, Input, Button, Spacer, HStack } from '@chakra-ui/react';

import logo from '../assets/logo.png';
import user from '../assets/user.png';
import bag from '../assets/bag.png';
import '../styles/navbar-style.css';

function Navbar(){
    return(
        <Box>
            <HStack borderBottom='solid 3px black' p='10px 100px' spacing='8%'>
                <Image src={logo} alt='Logo Colabuco'/>
                <Input placeholder='O que você procura?' w='60%' border='solid 3px black' borderRadius='8px'/>
                <HStack align='center' spacing='15%'>
                    <Link><Image src={user} alt='Ícone perfil'/></Link>
                    <Link><Image src={bag} alt='Ícone bolsa de compras'/></Link>
                </HStack>
            </HStack>
            <HStack bg="#FFFF00" padding='0  100px' justify='center' spacing='5px' gap='0'>
                <Link href="" className='montsserrat categoria selecionado'>ARTES VISUAIS</Link>
                <Link href="" className='montsserrat categoria'>MÚSICA</Link>
                <Link href="" className='montsserrat categoria'>LITERATURA</Link>
                <Link href="" className='montsserrat categoria'>CINEMA</Link>
                <Link href="" className='montsserrat categoria'>ARTESANATO</Link>
            </HStack>
        </Box>
    );
}

export default Navbar;