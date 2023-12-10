import { Text, Box} from "@chakra-ui/react";

function ProductArtist(props){
    const {title} = props
    return (
        <>
        <Box display='flex' gap='8px' flexDirection='row'>
            <Text fontSize='26px' className="montserrat800">Por: </Text>
            <Text fontSize='26px' px='10px' className='montserrat600italic' w='fit-content' bg='rgba(223, 243, 98, 0.50)' borderRadius='10rem'>{title || '@nomedoartista'}</Text>
        </Box>
        </>
    )
}

export default ProductArtist