import { Center, Box } from '@chakra-ui/react';
import CardProduct from './CardProduct';
import '../styles/home.css'
import SectionTitle from './SectionTitle';
import ProductFilters from './ProductFilters';

function Offers(props){
    return(
        <Box my={12}>
            <SectionTitle title='Ofertas'/>
            <ProductFilters></ProductFilters>
            <Center>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </Center>
        </Box>
    );
}

export default Offers;