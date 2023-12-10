import { Box, Image } from "@chakra-ui/react"

function ProductImage(props){
    return (
        <>
        <Box pt='64px' pl='171px'>
            <Image objectFit='cover' src={props.src} boxSize='500px' border='4px' borderRadius='8px' fallbackSrc='https://via.placeholder.com/500'></Image>
        </Box>
        </>
    )
}

export default ProductImage