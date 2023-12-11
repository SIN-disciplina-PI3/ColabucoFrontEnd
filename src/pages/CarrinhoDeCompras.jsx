import React from "react";
import Navbar from '../components/Navbar';
import { Box, Text, Stack, FormControl, FormLabel, Input, Checkbox, Link, Center, Flex, Grid, Spacer, Radio, RadioGroup, Image } from "@chakra-ui/react";
import iconCartao from '../assets/image 24.png'
import iconBoleto from '../assets/image 25.png'
import iconPix from '../assets/image 26.png'
import iconTransferencia from '../assets/Rectangle 241.png';
import ProductFinalView from "../components/ProductFinalView";

import styles from '../styles/CarrinhoDeCompras.css'

function CarrinhoDeCompras() {

    return (
        <Box className='content'>
            <Navbar className='content'/>
            <Center border='black 3px solid' h={'144px'} bgColor={'#6600CC'} color={'white'}>
                <Text className='montserrat800' fontSize={'25px'}>FINALIZAÇÃO DE COMPRA</Text>
            </Center>

            <Grid templateColumns={'68% 30%'} p={'50px 70px'} gap={'20px'}>
                <Stack gap={'20px'}>
                    <Box>
                        <Flex className="borda" bgColor={'#DFF362'} h={'62px'} p={'0 32px'} align={'center'}>
                            <Text fontWeight={'800'} fontSize={'20px'}>DADOS DE CONTATO</Text>
                        </Flex>
                        <FormControl border={'solid black 3px'} borderRadius={'0 0 8px 8px'} borderTop={'none'} p={'32px'} fontWeight={'700'}>
                            <Stack gap={'20px'}>
                                <Box>
                                    <Text>DADOS PARA CONTATO</Text>
                                    <Input border={'solid black'} bgColor={'#F5F5F5'}/>
                                </Box>

                                <Stack>
                                    <Text fontWeight={'700'}>DADOS PARA ENTREGA</Text>
                                    <Box>
                                        <FormLabel>Nome</FormLabel>
                                        <Input border={'solid black'} bgColor={'#F5F5F5'}/>
                                    </Box>
                                    <Box>
                                        <FormLabel>Sobrenome</FormLabel>
                                        <Input border={'solid black'} bgColor={'#F5F5F5'}/>
                                    </Box>
                                    <Box>
                                        <FormLabel>CEP</FormLabel>
                                        <Input border={'solid black'} bgColor={'#F5F5F5'}/>
                                    </Box>
                                    <Stack>
                                        <Text>ENTREGA</Text>
                                        <Checkbox> 
                                            <Flex>
                                                <Text>Correios SEDEX via Colabuco Envio</Text>
                                                <Spacer/>
                                                <Text>R$ 4,00</Text>
                                            </Flex>
                                        </Checkbox>
                                        <Checkbox> 
                                            <Flex>
                                                <Text>Pernambucanos (frete fixo)</Text>
                                                <Spacer/>
                                                <Text>R$ 4,00</Text>
                                            </Flex>
                                        </Checkbox>
                                        <Checkbox> 
                                            <Flex>
                                                <Text>Correios PAC via filhosdoMG Envio</Text>
                                                <Spacer/>
                                                <Text>R$ 4,00</Text>
                                            </Flex>
                                        </Checkbox>
                                        <Checkbox> 
                                            <Flex>
                                                <Text>Entrega colabuco :D – Registro Módico</Text>
                                                <Spacer/>
                                                <Text>R$ 4,00</Text>
                                            </Flex>
                                        </Checkbox>
                                    </Stack>
                                    <Grid templateColumns={'auto auto auto'} gap={'20px'}>
                                        <Box>
                                            <FormLabel>Número</FormLabel>
                                            <Input border={'solid black'} bgColor={'#F5F5F5'}></Input>
                                        </Box>
                                        <Box>
                                            <FormLabel>Complemento</FormLabel>
                                            <Input border={'solid black'} bgColor={'#F5F5F5'}></Input>
                                        </Box>
                                        <Box>
                                            <FormLabel>Dados para a nota fiscal (CPF ou CNPJ)</FormLabel>
                                            <Input border={'solid black'} bgColor={'#F5F5F5'} w={"100%"}></Input>
                                        </Box>
                                    </Grid>
                                </Stack>
                            </Stack>
                        </FormControl>
                    </Box>
                    <Box>
                        <Flex className="borda" bgColor={'#DFF362'} h={'62px'} p={'0 32px'} align={'center'}>
                            <Text fontWeight={'800'} fontSize={'20px'}>MÉTODO DE PAGAMENTO</Text>
                        </Flex>
                        <Box border={'solid black 3px'} borderRadius={'0 0 8px 8px'} borderTop={'none'} p={'32px'} fontWeight={'700'}>
                            <RadioGroup>
                                <Stack>
                                    <Flex className="borda" align={'center'}>
                                        <Radio value={'1'} h={'48px'} p={'0 32px'} w={'100%'}>
                                            <Flex><Image src={iconCartao}/>Cartão de Crédito</Flex>
                                        </Radio>
                                    </Flex>
                                    <Flex className="borda" align={'center'}>
                                        <Radio value={'2'} h={'48px'} p={'0 32px'} w={'100%'}>
                                            <Flex><Image src={iconBoleto}/>Boleto</Flex>
                                        </Radio>
                                    </Flex>
                                    <Flex className="borda" align={'center'}>
                                        <Radio value={'3'} h={'48px'} p={'0 32px'} w={'100%'}>
                                            <Flex><Image src={iconPix}/>Pix</Flex>
                                        </Radio>
                                    </Flex>
                                    <Flex className="borda" align={'center'}>
                                        <Radio value={'4'} h={'48px'} p={'0 32px'} w={'100%'}>
                                            <Flex><Image src={iconTransferencia}/>Tranferência</Flex>
                                        </Radio>
                                    </Flex>
                                </Stack>
                            </RadioGroup>
                        </Box>
                    </Box>
                </Stack>
                <Stack gap={"20px"}>
                    <Box>

                        <Flex className="borda" bgColor={'#DFF362'} h={'62px'} p={'0 32px'} align={'center'}>
                                <Text fontWeight={'800'} fontSize={'20px'}>CARRINHO</Text>
                        </Flex>
                        <Stack border={'solid black 3px'} borderY={'none'} p={'32px'} fontWeight={'700'}>
                            <ProductFinalView name={'Kit Amend Expertise'} price={'R$50,00'} img={'https://www.amend.com.br/on/demandware.static/-/Sites-siteCatalog_Amend/default/dwf7d8b04c/Kits/Marula%20png/kit-amend-expertise-marula-fabulous-nutrition-iii-5-produtos-shampoo-mascara-condicionador-oleo-e-leave-in-creme-kit-579.png'}/>
                            <ProductFinalView name={'Beyblade'} price={'R$100,00'} img={'https://images.tcdn.com.br/img/img_prod/664029/beyblade_x_beyblade_x_bx_01_starter_drain_sword_3_60f_10943_1_bfd21e2a70b968fcad80ac559f767ece.jpg'}/>
                            <ProductFinalView name={'RTX 3090'} price={'R$2000,00'} img={'https://m.media-amazon.com/images/I/61AZBIL4+2L.jpg'}/>
                        </Stack>
                        <Stack border={'solid black 3px'} borderRadius={'0 0 8px 8px'} p={'32px'} fontWeight={'700'}>
                            <Flex>
                                <Text>SUBTOTAL</Text>
                                <Spacer/>
                                <Text>R$2150,00</Text>
                            </Flex>
                            <Flex>
                                <Text>CUSTO DO FRETE</Text>
                                <Spacer/>
                                <Text>R$4,00</Text>
                            </Flex>
                            <Flex fontWeight={'800'} fontSize={'24px'}>
                                <Text>TOTAL</Text>
                                <Spacer/>
                                <Text>R$2154,00</Text>
                            </Flex>
                        </Stack>
                    </Box>
                    <Center className={'borda'} bgColor={'#0099FF'} h={'62px'} w={"100%"}>
                        <Link href="statuspedido" fontWeight={'800'} fontSize={'20px'}>
                            <Text>FINALIZAR</Text>
                        </Link>
                    </Center>
                </Stack>
            </Grid>
        </Box>
    )
}

export default CarrinhoDeCompras; 