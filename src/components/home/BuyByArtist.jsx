import { Box, Center } from '@chakra-ui/react';
import SectionTitle from "../SectionTitle";
import ArtistProfile from '../ArtistProfile';
import artist1 from '../../assets/artist1.png';
import artist2 from '../../assets/artist2.png';
import artist3 from '../../assets/artist3.png';
import artist4 from '../../assets/artist4.png';


function BuyByArtist() {
    return (
        <Box>
            <SectionTitle title='Compre por Artista' />
            <Center>
                <ArtistProfile picture={artist1} />
                <ArtistProfile picture={artist2} />
                <ArtistProfile picture={artist3} />
                <ArtistProfile picture={artist4} />
            </Center>
        </Box>
    );
}

export default BuyByArtist;