import { Box, Center, Image, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import thanksImage from '../assets/Group 137.png';
import Footer from "../components/Footer";

function Checkout(){
    return(
        <Box className='content'>
            <Navbar className='content'></Navbar>
            <Center border='black 3px solid' h={'144px'} bgColor={'#6600CC'} color={'white'}>
                <Text className='montserrat800' fontSize={'25px'}>FINALIZAÇÃO DE COMPRA</Text>
            </Center>
            <Center pt={'40px'}>
                <Image src={thanksImage}></Image>
            </Center>
            <Footer />
        </Box>
    );
}

export default Checkout;