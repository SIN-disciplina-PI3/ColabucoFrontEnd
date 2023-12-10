import { Box, Image } from "@chakra-ui/react"

function ProductImage(props){
    return (
        <>
        {/* <Box pt='64px' pl='171px'> */}
        <Box pt={props.pt} pl={props.pl} >
            <Image 
            objectFit='cover' 
            src={props.src} 
            boxSize={props.boxSize} 
            border={props.border} 
            borderRight={props.borderRight} 
            borderLeft={props.borderLeft} 
            borderBottom={props.borderBottom}
            borderRadius={props.borderRadius}
            borderLeftRadius={props.borderLeftRadius} 
            fallbackSrc='https://via.placeholder.com/500'></Image>
        </Box>
        </>
    )
}

export default ProductImage