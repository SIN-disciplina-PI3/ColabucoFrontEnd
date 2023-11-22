import { Box, Image, Link, Input, HStack, useColorMode, Button } from '@chakra-ui/react';
import theme from '../styles/theme';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import bag from '../assets/bag.png';
import '../styles/home.css';






function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box>
            <HStack borderBottom='solid 3px black'
                p='10px 100px'
                spacing='8%'>
                <Image src={logo} alt='Logo Colabuco' />
                <Input placeholder='O que você procura?'
                    w='60%'
                    border='solid 3px black'
                    borderRadius='8px'
                />
                <HStack align='center' spacing='15%'>

                    <Link href="/login">
                        <Image src={user} alt='Ícone perfil' />
                    </Link>

                    <Link>
                        <Image href="/carrinho" src={bag} alt='Ícone bolsa de compras' />
                    </Link>
                    <Button _hover='none' onClick={toggleColorMode}>
                        Modo {colorMode === 'light' ? 'Escuro' : 'Claro'}
                    </Button>
                </HStack>

            </HStack>
            <HStack bg="#FFFF00" padding='0  100px' justify='center' spacing='5px' gap='0'>
                <Link
                    style={{ textDecoration: 'none' }} href=""
                    className='fonte2 categoria'>
                    ARTES VISUAIS
                </Link>
                <Link style={{ textDecoration: 'none' }} href="" className='fonte2 categoria'>MÚSICA</Link>
                <Link style={{ textDecoration: 'none' }} href="" className='fonte2 categoria'>LITERATURA</Link>
                <Link style={{ textDecoration: 'none' }} href="" className='fonte2 categoria'>CINEMA</Link>
                <Link style={{ textDecoration: 'none' }} href="" className='fonte2 categoria'>ARTESANATO</Link>
            </HStack>
        </Box>
    );
}

export default Navbar;

