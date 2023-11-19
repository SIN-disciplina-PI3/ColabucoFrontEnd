import React from "react";
import NavBar from './/..//components/Navbar'
import { Stack, Text, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from './../styles/cadastrocliente.css'



function CadastroCliente() {

    return (

        <Stack>
            <NavBar />

            <Text mt='-8px' borderWidth='2.4px'  borderTopColor='black' borderBottomColor='black' borderLeftColor='#6600CC'
            borderRightColor='#6600CC'  
            className="texto05" height='150' > CADASTRE-SE </Text>

            <FormControl isRequired pl='30%' >


                <FormLabel className='formulario'  >Nome</FormLabel>
                <Input width='50%' placeholder='Nome' />



                <FormLabel className='formulario'  >Nome</FormLabel>
                <Input width='50%' placeholder='Nome' />



                <FormLabel className='formulario'  >Nome</FormLabel>
                <Input width='50%' placeholder='Nome' />



                <FormLabel className='formulario'  >Nome</FormLabel>
                <Input width='50%' placeholder='Nome' />
            </FormControl>

        </Stack>
    );
}

export default CadastroCliente;