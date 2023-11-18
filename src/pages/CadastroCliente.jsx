import React from "react";
import NavBar from './/..//components/Navbar'
import { Stack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";



function CadastroCliente() {

    return (
        <Stack>
            <NavBar />

            <Text className='fonte01' >Não possui conta?
                <Link> Cadastre-se </Link>
            </Text>

            <Button className='fonte02'> 
                Entrar 
            </Button>

        </Stack>
    );
}

export default CadastroCliente;