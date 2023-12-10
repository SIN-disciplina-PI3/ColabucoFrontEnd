import { Box, Button, Grid, Image, Text, Flex } from "@chakra-ui/react";
import artistPicture from '../assets/artistpicture.png';

function ProfileInformations(){
    return(
        <Box w={'100%'} p={'30px 92px'}>
            <Flex className="borda" bgColor={'#DFF362'} h={'106.98px'} p={'41px 40px'} align={'center'} mb={'30px'}>
                <Text fontWeight={'800'} fontSize={'34px'}>INFORMAÇÕES DO PERFIL</Text>
            </Flex>
            <Grid className="borda" p={'70px 80px'}>
                <Box>
                    <Image src=""/>
                </Box>
            </Grid>
        </Box>
    );
}

export default ProfileInformations;