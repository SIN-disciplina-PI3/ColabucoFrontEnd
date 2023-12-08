import { Box, Text, Button, Input, Center, Grid,
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Select, Textarea 
} from '@chakra-ui/react';
import '../styles/global-styles.css';

function NewProduct(){
    return(
        <Box h={'930px'} w={'1097px'} bgColor={'white'}>
            <Center className='montserrat700' fontSize={'32px'} bgColor={'#FFFF00'} border={'solid black 3px'} h={'144px'}>
                <Text>NOVO PRODUTO</Text>
            </Center>
            <FormControl p={'45px 70px'} isRequired>
                <Grid templateColumns={'auto auto'} gap={'17px'}>
                    <Box className='spacingy'>
                        <FormLabel className='fw7'>Adicionar fotos</FormLabel>
                        <Box className='borda' bgColor={'#E89BC0'} boxShadow={'10px 10px #DFF362, 10px 10px 0px 3px black'} h={'289.88px'} w={'213.15px'}></Box>

                        <FormLabel className='fw7'>Adicionar variação</FormLabel>
                        <Box className='spacingy' w={'224px'}>
                            <Button bgColor={'white'} w={'224px'}>+</Button>
                            <Button bgColor={'white'} w={'224px'}>+</Button>
                        </Box>
                    </Box>
                    <Box className='spacingy'>
                        <FormLabel className='fw7'>Título do produto</FormLabel>
                        <Input className='borda'></Input>

                        <FormLabel className='fw7'>Estoque</FormLabel>
                        <Input className='borda'></Input>

                        <FormLabel className='fw7'>Descrição</FormLabel>
                        <Textarea className='borda'></Textarea>

                        <FormLabel className='fw7'>Formas de pagamento</FormLabel>
                        <Input className='borda'></Input>

                        <Grid templateColumns={'auto auto'} gap={'20px'}>
                            <Box>
                                <FormLabel className='fw7'>Categoria</FormLabel>
                                <Input className='borda'></Input>
                            </Box>
                            <Box>
                                <FormLabel className='fw7'>Opções de entrega</FormLabel>
                                <Select className='borda'></Select>
                            </Box>
                        </Grid>

                        <FormLabel className='fw7'>Dimensões do produto</FormLabel>
                        <Grid templateColumns={'auto auto auto'} gap={'20px'}>
                            <Input placeholder='altura' className='borda'></Input>
                            <Input placeholder='largura' className='borda'></Input>
                            <Input placeholder='comprimento' className='borda'></Input>
                        </Grid>

                        <FormLabel className='fw7'>Preço</FormLabel>
                        <Grid templateColumns={'auto 306px'} gap={"20px"}>
                            <Input placeholder='R$' className='borda'></Input>
                            <Button h={'48px'} bgColor={'#6600CC'} fontWeight={'800'} color={'white'} fontSize={'30px'}>PUBLICAR</Button>
                        </Grid>
                    </Box>
                </Grid>
            </FormControl>
        </Box>
    );
}

export default NewProduct;