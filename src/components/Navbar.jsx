import { Box, Image, Link, Input, HStack } from '@chakra-ui/react';

import logo from '../assets/logo.png';
import user from '../assets/user.png';
import bag from '../assets/bag.png';
import '../styles/home.css';

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
                <Link href="" className='montserrat600 categoria selecionado'>ARTES VISUAIS</Link>
                <Link href="" className='montserrat600 categoria'>MÚSICA</Link>
                <Link href="" className='montserrat600 categoria'>LITERATURA</Link>
                <Link href="" className='montserrat600 categoria'>CINEMA</Link>
                <Link href="" className='montserrat600 categoria'>ARTESANATO</Link>
            </HStack>
        </Box>
    );
}

export default Navbar;