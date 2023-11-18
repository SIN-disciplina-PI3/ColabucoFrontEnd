import React from "react";
import NavBar from './/..//components/Navbar'
import { Stack, Text, Button, Input,FormControl, FormLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from './../styles/cadastrocliente.css'



function CadastroCliente() {

    return (
        
        <Stack>
            <NavBar />

            <Text pb='5%' className="texto05"> CADASTRE-SE </Text>

            <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder='First name' />
            </FormControl>

        </Stack>
    );
}

export default CadastroCliente;