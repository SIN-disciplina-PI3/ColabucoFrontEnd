import { Center, Box } from '@chakra-ui/react';
import CardProduct from '../CardProduct';
import SectionTitle from '../SectionTitle';
import ProductFilters from '../ProductFilters';

function Offers(props) {
    return (
        <Box my={12}>
            <ProductFilters></ProductFilters>
            <SectionTitle title='Ofertas'/>
            <Center>
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </Center>
        </Box>
    );
}

export default Offers;