import { HStack } from '@chakra-ui/react';
import CardProduct from './CardProduct';
import { Heading } from '@chakra-ui/react';

function Offers(){
    return(
        <HStack spacing='3%' p='1% 20%'>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
        </HStack>
    );
}

export default Offers;