import { Box, Text } from '@chakra-ui/react'

function SectionTitle(props){
    return(
        <Box w={'100%'}>
            <Text my={'3rem'} className='montserrat500' fontSize={'3xl'} w='fit-content' p='10px 20px' bg='#DFF362' 
                        border='solid 3px black' borderRadius='10rem'>
                    {props.title}
            </Text>
        </Box>
    );
}

export default SectionTitle;