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
                <CardProduct src='https://img.elo7.com.br/product/main/406A1E0/ednaldo-pereira-de-biscuit-presente.jpg' title='Ednaldinho Pereira' currentPrice={90} initialPrice={300}/>
                <CardProduct src='https://i1.sndcdn.com/artworks-BE72T6QuR7IYqIYr-XHJymA-t500x500.jpg' title='Gato Banano' currentPrice={20} initialPrice={60}/>
                <CardProduct src='https://tm.ibxk.com.br/2022/12/15/15135939320320.jpg?ims=1200x675' title='Jotaro Kujo' currentPrice={100} initialPrice={300} />
                <CardProduct src='https://i1.sndcdn.com/artworks-XGGWMQzUrHbzRT1h-z7jChw-t500x500.jpg' title='3 par de meia' currentPrice={5}/>
                <CardProduct src='https://pm1.aminoapps.com/7956/c1871916403f831b4956fa484bee1fad67974bdar1-1080-1314v2_uhq.jpg' title='Rei Chikita'currentPrice={1000}/>
            </Center>
        </Box>
    );
}

export default Offers;