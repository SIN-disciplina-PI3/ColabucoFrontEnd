import { Box, Text } from '@chakra-ui/react'

function SectionTitleFilters(props){
    return(
        <Box mt='64px' position='relative'>
            <Text position='absolute' w={props.w} h='61px' py='12px' className='montserrat700' fontSize='20px' bg='#DFF362' border='solid 3px black' borderRadius='100'>
                {props.title}
            </Text>
        </Box>
    );
}

export default SectionTitleFilters;