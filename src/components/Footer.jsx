import { Box, Image, Flex, VStack, Link, Text } from '@chakra-ui/react';

import whitelogo from '../assets/whitelogo.svg';

function Footer() {
    const handleClick = () => {
        // Rolando para o topo da página
        window.scrollTo(0, 0);
      };
    return (
        <Box mt='140px'>
            <Box bg='#FFFF00' h='8.12rem'></Box>
            <Flex bg='#6600CC'>
                <Link href="/" onClick={handleClick}>
                <Image pl='170px' pt='64px' src={whitelogo}></Image>
                </Link>
                <Box display='flex' pl='64px' my='64px' textAlign='left'flexDirection='column' gap='4' color='white'>
                    <Text fontSize={'25px'} className='montserrat800'>MENU PRINCIPAL</Text>
                    <Link href="/">INÍCIO</Link>
                    <Link href="productscreen">PRODUTOS</Link>
                    <Link href="">ARTISTAS</Link>
                    <Link href="sobrecolabuco">SOBRE A COLABUCO</Link>
                </Box>
                <Box display='flex' pl='72px' my='64px' textAlign='left'flexDirection='column' gap='4' color='white'>
                    <Text fontSize={'25px'} className='montserrat800'>CONTATO</Text>
                    <Text>(81) 94002-8922</Text>
                </Box>
                <Box display='flex' pl='72px' my='64px' textAlign='left'flexDirection='column' gap='4' color='white'>
                    <Text fontSize={'25px'} className='montserrat800'>DESENVOLVIDO POR</Text>
                    <Link href="https://www.linkedin.com/in/carolynecosta/">Ana Carolyne Costa</Link>
                    <Link href="https://www.linkedin.com/in/iale-almeida/">Iale Almeida</Link>
                    <Link href="https://www.linkedin.com/in/lorenzoleao/">Lorenzo Leão</Link>
                    <Link href="https://www.linkedin.com/in/luismsmelo/">Luís Manoel Silvestre</Link>
                    <Link href="https://www.linkedin.com/in/nicholas-b-o-bergqvist-991956223/">Nicholas Bergqvist</Link>
                    <Link href="https://www.linkedin.com/in/rafael-figueiroa/">Rafael Martins</Link>
                </Box>
            </Flex>
        </Box>
    );
}

export default Footer;