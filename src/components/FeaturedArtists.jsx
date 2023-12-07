import { Box, Text } from "@chakra-ui/react";
import '../styles/home.css';

function FeaturedArtists(sombra) {
    return (
        <>
            <Box w='530px' h='290px' my={2} bg='#D9D9D9' mx={5} border='solid 3px black' borderRadius='8px' boxShadow={'5px 5px #6600CC, 5px 5px 0px 2px black'}>
                <Text fontSize='2xl' className='montserrat500' position='relative' top='50%' transform='translate(0px, -50%)'>
                    Artistas em destaque
                </Text>
            </Box>
        </>
    );
}

export default FeaturedArtists;