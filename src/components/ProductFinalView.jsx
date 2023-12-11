import { Flex, Box, Text, Spacer, Image} from '@chakra-ui/react'

function ProductFinalView({name, img, price}){

    return(
        <Flex align={'center'} gap={'10px'}>
            <Box className="borda" w={'50px'} h={'50px'}>
                <Image src={img}/>
            </Box>
            <Text>{name}</Text>
            <Spacer/>
            <Text>1x</Text>
            <Text>{price}</Text>
        </Flex>
    );
}

export default ProductFinalView;