import React from "react";
import Navbar from '../components/Navbar';
import { Text,Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import styles from '../styles/CarrinhoDeCompras.css'






function CarrinhoDeCompras() {

    return (
        <Stack className="montserrat600">

            <Navbar />
            <FormLabel>DADOS PARA CONTATO: </FormLabel>
            <FormControl isRequired>
                
                <FormLabel>NOME </FormLabel>
                <Input placeholder='Nome' />
                
                <FormLabel>First name</FormLabel>
                <Input placeholder='First name' />

                <FormLabel>First name</FormLabel>
                <Input placeholder='First name' />

                <FormLabel>First name</FormLabel>
                <Input placeholder='First name' />

               
            </FormControl>




        </Stack>
    )






}

export default CarrinhoDeCompras; 