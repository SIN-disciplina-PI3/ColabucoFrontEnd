import { Center, Box } from '@chakra-ui/react';
import CardProduct from '../CardProduct';
import SectionTitle from '../SectionTitle';

function TopSelling() {
    return (
        <Box my={12}>
            <SectionTitle title='Produtos mais vendidos' />
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

export default TopSelling;