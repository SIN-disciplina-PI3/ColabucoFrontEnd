import { Text } from "@chakra-ui/react";

function ProductTitle(props){
    const {title} = props
    return (
        <>
            <Text fontSize='4rem' className="montserrat800title" color='#F60'>{title || 'Nome do produto'}</Text>
            <Text pl='0.063rem' mt='-6.3rem' fontSize='4rem' className="montserrat800title" color='white'>{title || 'Nome do produto'}</Text>
        </>
    )
}

export default ProductTitle