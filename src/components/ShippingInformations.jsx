import { Box, Flex, Image, Text, HStack } from '@chakra-ui/react';
import boxes1 from '../assets/boxes1.png';
import boxes2 from '../assets/boxes2.png';
import '../styles/home.css'

function ShippingInformations() {
    return (
        <HStack mb={12} bg='#E89BC0' align='center' spacing='20%' padding='1% 15%'>
            <HStack>
                <Image src={boxes1} w='70px' />
                <Text w='420px' className='montserrat500' align='start'>Nossa política de entregas é rápida e confiável, garantindo que suas compras cheguem até você no prazo e em perfeito estado, para que você possa desfrutar das suas novas aquisições sem demora.</Text>
            </HStack>
            <HStack>
                <Image src={boxes2} w='70px' />
                <Text w='420px' className='montserrat500' align='start'>Se por qualquer motivo você não estiver completamente satisfeito com sua compra, nossa política de devoluções é simples e justa, garantindo que você possa fazer devoluções sem complicações e obter a assistência que merece.</Text>
            </HStack>
        </HStack>
    );
}

export default ShippingInformations;