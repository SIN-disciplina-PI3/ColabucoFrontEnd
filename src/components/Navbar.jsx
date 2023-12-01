import { Box, Image, Link, Input, HStack, useColorMode, CircleIcon, IconButton, Icon } from '@chakra-ui/react';
import theme from '../styles/theme';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import bag from '../assets/bag.png';
import '../styles/home.css';
import { SunIcon, } from '@chakra-ui/icons';
import { FiSun, FiMoon,FiUser, FiShoppingBag } from "react-icons/fi";


function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
   
    return (
        <Box>
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

                    <Link href="/login">
                        <Icon as={FiUser}  w={8} h={8} />
                    </Link>

                    <Link size='lg' href='/carrinho'>
                        <Icon as={FiShoppingBag}  w={8} h={8} />
                    </Link>

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
                <Link
                    style={{ textDecoration: 'none' }} href="/"
                    className='fonte2 categoria'>
                    INÍCIO
                </Link>
                <Link style={{ textDecoration: 'none' }} href="" className='fonte2 categoria'>PRODUTOS</Link>
                <Link style={{ textDecoration: 'none' }} href="" className='fonte2 categoria'>ARTISTAS</Link>
                <Link style={{ textDecoration: 'none' }} href="" className='fonte2 categoria'>SOBRE A COLABUCO</Link>

            </HStack>
        </Box>
    );
}

export default Navbar;

