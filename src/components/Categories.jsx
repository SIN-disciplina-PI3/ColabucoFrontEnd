import SectionTitle from "./SectionTitle";
import { Box, Image, Center, Text } from '@chakra-ui/react';
import IconMusic from '../assets/cd.png';
import IconCinema from '../assets/film-reel.png';
import IconLiterature from '../assets/open-book.png';

function Categories() {
    return (
        <Box my={12}>
            <SectionTitle title='Categorias' />

            <Center>
                {/* card musica */}
                <Box mx={4} border={'solid 4px black'} borderRadius={'8px'} w={'350px'} h={'340px'}>
                    <Box h={'70%'} borderBottom={'solid 3px black'} bg={'#FFFF00'}>
                        <Image src={IconMusic} className="centralize" />
                    </Box>
                    <Box h={'30%'}>
                        <Text className='montserrat600 centralize' fontSize={'3xl'}>MÚSICA</Text>
                    </Box>
                </Box>

                {/* card cinema */}
                <Box mx={4} border={'solid 4px black'} borderRadius={'8px'} w={'350px'} h={'340px'}>
                    <Box h={'70%'} borderBottom={'solid 3px black'} bg={'#0099FF'}>
                        <Image src={IconCinema} className="centralize" />
                    </Box>
                    <Box h={'30%'}>
                        <Text className='montserrat600 centralize' fontSize={'3xl'}>CINEMA</Text>
                    </Box>
                </Box>

                {/* card literatura */}
                <Box mx={4} border={'solid 4px black'} borderRadius={'8px'} w={'350px'} h={'340px'}>
                    <Box h={'70%'} borderBottom={'solid 3px black'} bg={'#FF6600'}>
                        <Image src={IconLiterature} className="centralize" />
                    </Box>
                    <Box h={'30%'}>
                        <Text className='montserrat600 centralize' fontSize={'3xl'}>LITERATURA</Text>
                    </Box>
                </Box>
            </Center>
        </Box>
    );
}

export default Categories;