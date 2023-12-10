import { Box, Text, Button, Input, Center, Grid, Stack,
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Select, Textarea 
} from '@chakra-ui/react';
import '../styles/global-styles.css';

function NewProduct({onClose}){
    return(
        <Center position={'fixed'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>

            <Box w={'1097px'} bgColor={'white'} zIndex={1} fontWeight={'700'}>
                <Center fontSize={'32px'} bgColor={'#FFFF00'} border={'solid black 3px'} h={'144px'}>
                    <Text>NOVO PRODUTO</Text>
                </Center>
                <FormControl p={'45px 70px'} isRequired>
                    <Grid templateColumns={'auto auto'} gap={'17px'}>
                        <Stack>
                            <Box mb={'20px'}>
                                <FormLabel fontWeight={'700'}>Adicionar fotos</FormLabel>
                                <Box className='borda' bgColor={'#E89BC0'} boxShadow={'10px 10px #DFF362, 10px 10px 0px 3px black'} h={'289.88px'} w={'213.15px'}></Box>
                            </Box>

                            <Box>
                                <FormLabel fontWeight={'700'}>Adicionar variação</FormLabel>
                                <Box className='spacingy' w={'224px'}>
                                    <Button bgColor={'white'} w={'224px'} className='borda' text>+</Button>
                                    <Button bgColor={'white'} w={'224px'} className='borda'>+</Button>
                                </Box>
                            </Box>
                        </Stack>
                        <Stack>
                            <Box>
                                <FormLabel fontWeight={'700'}>Título do produto</FormLabel>
                                <Input border={'solid black 3px'}></Input>
                            </Box>

                            <Box>
                                <FormLabel fontWeight={'700'}>Estoque</FormLabel>
                                <Input border={'solid black 3px'}></Input>
                            </Box>

                            <Box>
                                <FormLabel fontWeight={'700'}>Descrição</FormLabel>
                                <Textarea border={'solid black 3px'}></Textarea>
                            </Box>

                            <Box>
                                <FormLabel fontWeight={'700'}>Formas de pagamento</FormLabel>
                                <Select border={'solid black 3px'}>
                                    <option>Cartão de Crédito</option>
                                    <option>Cartão de Débito</option>
                                    <option>Pix</option>
                                </Select>
                            </Box>

                            <Grid templateColumns={'auto auto'} gap={'20px'}>
                                <Box>
                                    <FormLabel fontWeight={'700'}>Categoria</FormLabel>
                                    <Select border={'solid black 3px'}>
                                        <option>Artes Visuais</option>
                                        <option>Cinema</option>
                                        <option>Música</option>
                                        <option>Literatura</option>
                                        <option>Artesanato</option>
                                        <option>Papelaria</option>
                                        <option>Digital</option>
                                    </Select>
                                </Box>
                                <Box>
                                    <FormLabel fontWeight={'700'}>Opções de entrega</FormLabel>
                                    <Select border={'solid black 3px'}>
                                        <option>Correios</option>
                                        <option>Retirada pessoalmente</option>
                                        <option>Sedex</option>
                                    </Select>
                                </Box>
                            </Grid>

                            <Box>
                                <FormLabel fontWeight={'700'}>Dimensões do produto</FormLabel>
                                <Grid templateColumns={'auto auto auto'} gap={'20px'}>
                                    <Input placeholder='altura' border={'solid black 3px'}></Input>
                                    <Input placeholder='largura' border={'solid black 3px'}></Input>
                                    <Input placeholder='comprimento' border={'solid black 3px'}></Input>
                                </Grid>
                            </Box>

                            <FormLabel fontWeight={'700'}>Preço</FormLabel>
                            <Grid templateColumns={'auto 306px'} gap={"20px"}>
                                <Input placeholder='R$' border={'solid black 3px'}></Input>
                                <Button onClick={onClose} h={'48px'} bgColor={'#6600CC'} fontWeight={'800'} color={'white'} fontSize={'30px'}>PUBLICAR</Button>
                            </Grid>
                        </Stack>
                    </Grid>
                </FormControl>
            </Box>
        </Center>
    );
}

export default NewProduct;