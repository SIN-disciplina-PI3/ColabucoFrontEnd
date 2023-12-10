import { Box, Button, Grid, Image, Text, Flex, Link, Center, Stack, Textarea } from "@chakra-ui/react";
import CategoriesFilter from "./productfilters/CategoriesFilter";

function ProfileInformations(){
    return(
        <Box fontWeight={'700'}>
            <Flex className="borda" bgColor={'#DFF362'} h={'106.98px'} p={'41px 40px'} align={'center'} mb={'30px'}>
                <Text fontWeight={'800'} fontSize={'34px'}>INFORMAÇÕES DO PERFIL</Text>
            </Flex>
            <Grid className="borda" p={'70px 80px'} templateColumns={'auto auto'}>
                <Stack w={'220px'}>
                    <Image src="https://images.uncyc.org/pt/thumb/d/db/Ednaldo.jpg/300px-Ednaldo.jpg" w={'220px'} h={'200px'} borderRadius={'100%'}/>
                    <Center>
                        <Link textDecor={'underline'} className="fw7">EDITAR FOTO</Link>
                    </Center>
                    <Center className="borda">@FALAFEL</Center>
                    <Center className="borda">RECIFE - PE</Center>
                </Stack>
                <Stack>
                    <Text>BIOGRAFIA:</Text>
                    <Box mb={'-35px'}>
                        <Textarea border={'solid black 3px'} h={'220px'}></Textarea>
                        <Button position={'relative'} top={'-50px'} left={'1060px'} w={'85px'} bgColor={'transparent'} className="borda">v</Button>
                    </Box>
                    <Text>CATEGORIAS DE INTERESSE:</Text>
                    <CategoriesFilter></CategoriesFilter>
                    <Button className="borda" bgColor={'#DFF362'} w={'200px'} position={'relative'} left={'950px'}>SALVAR</Button>
                </Stack>
            </Grid>
        </Box>
    );
}

export default ProfileInformations;