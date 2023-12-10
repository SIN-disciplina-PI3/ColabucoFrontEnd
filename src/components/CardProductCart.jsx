import ProductImage from "./product/ProductImage"
import { Flex, Box, Text } from "@chakra-ui/react"

function CardProductCart(props){
    const { productTitle, price } = props
    const formatPrice = price ? ` R$ ${price.toFixed(2)}` : 'R$ 0.00'

    return(
        <>
            <Flex pb='30px'>
                <ProductImage h='135px' 
                boxSize='200px' 
                border='solid 0.188rem' 
                borderLeft='solid 9px' 
                borderBottom='solid 0.75rem' 
                borderRight='solid 0px'
                borderLeftRadius={'8px'} 
                src={props.src}/>
                <Box w='27.25rem' textAlign="justify" border='solid 0.188rem' borderBottom='solid 0.75rem' borderBottomRightRadius={'8px'}>
                    <Text px='1.12rem' pt='1.5rem' fontSize='1.75rem' className='montserrat700'>{productTitle}</Text>
                    <Text pl='1.12rem' pt='0.8rem' fontSize='1.25rem'className='montserrat800'>{formatPrice}</Text>
                </Box>
            </Flex>
        </>
    )
}

export default CardProductCart
