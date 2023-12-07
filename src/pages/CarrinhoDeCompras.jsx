import React from "react";
import Navbar from '../components/Navbar';
import { Box, Text, Stack, FormControl, FormLabel, Input, Checkbox,Select } from "@chakra-ui/react";
import styles from '../styles/CarrinhoDeCompras.css'



function CarrinhoDeCompras() {

    return (

        <Box >
            <Navbar />
            <br></br>
            <br></br>
            <Text m={3} pl={280} w={696} h={10} bgColor={'yellow'} borderRadius={5} pt={2} fontWeight={'bold'}> DADOS PARA CONTATO </Text>
            <Stack className="dadosContato" pt={-20}>
                <FormLabel pt={5}> NOME COMPLETO </FormLabel>
                <Input w={550} placeholder='Nome' />
                <FormLabel> EMAIL </FormLabel>
                <Input w={550} type="email" placeholder='Sobrenome'
                />

                <FormLabel>Código Postal</FormLabel>
                <Input w={550} placeholder='CEP' />

                <FormLabel>Endereço de Entrega</FormLabel>
                <Input w={550} placeholder='Entrega' />


                <Checkbox pt={8}> Correios SEDEX via Colabuco Envio <Text pl={219} display={'inline'}> 4,00 </Text></Checkbox>

                <Checkbox> Pernambucanos (frete fixo) <Text pl={286} display={'inline'}> 4,00</Text></Checkbox>


                <Checkbox> Correios PAC via filhosdoMG Envio <Text pl={228} display={'inline'}> 4,00 </Text></Checkbox>


                <Checkbox>Entrega colabuco :D – Registro Módico <Text pl={200} display={'inline'}> 4,00 </Text></Checkbox>
            </Stack>
            <br></br>
       

            <Stack className="metodoPagamento">
                <FormLabel>Método de Pagamento </FormLabel>
                <Select w={550} placeholder='Selecione '>
                    <option value='option1'>Crédito</option>
                    <option value='option2'>Débito</option>
                    <option value='option3'>PIX</option>
                    <option value='option4'> Boleto</option>
                </Select>
            </Stack>
        </Box>
    )
}

export default CarrinhoDeCompras; 