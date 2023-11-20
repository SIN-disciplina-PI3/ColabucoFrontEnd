import React from "react";
import NavBar from './/..//components/Navbar'
import { Stack, Text, Button, Input, FormControl, FormLabel, Checkbox,Box } from "@chakra-ui/react";

import styles from './../styles/cadastrocliente.css'



function CadastroCliente() {

    return (

        <Stack>
            <NavBar />
            <Box className="texto05">
                <Text pl='22%'>
                    CADASTRE-SE
                </Text>
                <Text>
                    Conheça novos artistas e compre artes incríveis!
                </Text>
            </Box>
    
            <FormControl isRequired className="formulario" >


                <FormLabel >Nome</FormLabel>
                <Input width='60%' placeholder='Nome' />



                <FormLabel pt='1%' >Sobrenome</FormLabel>
                <Input width='60%' placeholder='Sobrenome' />



                <FormLabel pt='1%' > Email </FormLabel>
                <Input width='60%' type="email" placeholder='Email' />



                <FormLabel pt='1%'>Senha </FormLabel>
                <Input width='60%' type="password" placeholder='Senha' />

                <FormLabel pt='1%'>Confirmar Senha </FormLabel>
                <Input width='60%' type="password" placeholder='Senha' /> <br></br>

                <Checkbox pl='8%' pt='3%'>Li e concordo com os Termos e Condições da Plataforma. </Checkbox>
                <br></br>
                <br></br>
            </FormControl>
            <Button marginLeft='42%' width='20%' marginBottom='3%' backgroundColor='#F0F000' _hover='none' > Criar conta </Button>
        </Stack>
    );
}

export default CadastroCliente;