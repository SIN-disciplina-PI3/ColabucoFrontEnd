import { Box, Stack, Image, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar"

function ProductScreen(props){
    return(
        <>
        <Navbar></Navbar>

        <Stack>
            <Box pt='64px' pl='90px'>
                <Image objectFit='cover' boxSize='500px' src={props.src} border='4px' borderRadius='8px' fallbackSrc='https://via.placeholder.com/500'></Image>
            </Box>
            <Text ml='650' mt='40px' fontSize='64px' position='absolute' className="montserrat700">Nome do Produto</Text> 
        </Stack>
        </>
    )
}

export default ProductScreen