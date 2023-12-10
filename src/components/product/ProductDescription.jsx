import { Text } from "@chakra-ui/react";

function ProductDescription(props) {
    const {description} = props
    return (
        <>
            <Text w='470px' h='50px' textAlign='justify' fontSize='15px' className='montserrat500'>
                {description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud...'}
            </Text>
        </>
    )
}

export default ProductDescription