import React from "react";
import NavBar from './/..//components/Navbar'
import { Button, Input, FormControl, FormLabel, Checkbox, Flex, Box, Text, InputRightElement, InputGroup } from "@chakra-ui/react";
import { useState } from "react";

import './../styles/cadastrocliente.css'


function CadastroCliente() {
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(true);

    function handleClickPassword() {
        setShow(!show);
    }
    function passwordValidation(password) {
        if (password.length >= 8) {
            return true;
        } else {
            return false;
        }
    }
    function handlePassword(e) {
        if (passwordValidation(e.target.value)) {
            setPassword(e.target.value);
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    }

    function handlePasswordCheck(e) {
        if (e.target.value === password) {
            setConfirmPassword(false);
            // alert("Senha confere");
        } else {
            setConfirmPassword(true);
        }
    }

    return (

        <Box>

            <NavBar />

            <Flex flexDirection='column' border='black 3px solid' h={'131px'} bgColor={'#6600CC'} color={'white'} textAlign='center' >
                <Text mt='25px' className='montserrat800' fontSize={'25px'}>CADASTRE-SE</Text>
                <Text className='montserrat500' fontSize={'21px'}>Conheça novos artistas e compre artes incríveis!</Text>
            </Flex>
            <FormControl mt='40px' isRequired className="formulario">

                <FormLabel>Nome</FormLabel>
                <Input border='solid 2px black' width='60%' placeholder='Nome' _hover={{ borderColor: "#6600CC" }} focusBorderColor={"#6600CC"} />

                <FormLabel pt='1%'>Sobrenome</FormLabel>
                <Input border='solid 2px black' width='60%' placeholder='Sobrenome' _hover={{ borderColor: "#6600CC" }} focusBorderColor={"#6600CC"} />

                <FormLabel pt='1%'> Email </FormLabel>
                <Input border='solid 2px black' width='60%' type="email" placeholder='Email' _hover={{ borderColor: "#6600CC" }} focusBorderColor={"#6600CC"} />

                <FormLabel pt='1%'>Senha:</FormLabel>
                <InputGroup width='fit-content'>
                    <Input
                        border='solid 2px black'
                        type={show ? "text" : "password"}
                        onChange={handlePassword}
                        w='695px'
                        placeholder="Digite a senha"
                        _hover={{ borderColor: "#6600CC" }}
                        focusBorderColor={"#6600CC"} />
                    <InputRightElement width="8rem">
                        <Button
                            h="1.75rem"
                            size="md"
                            color="white"
                            bg={"#6600CC"}
                            onClick={handleClickPassword}>
                            {show ? "Esconder" : "Mostrar"}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                {passwordValid ? <Text>✔</Text> : <Text>Mínimo de 8 caracteres</Text>}

                <FormLabel paddingTop={4}>Confirmar Senha:</FormLabel>
                <InputGroup w='fit-content'>
                    <Input
                        border="2px"
                        w='695px'
                        type={show ? "text" : "password"}
                        placeholder="Confirme a senha"
                        isInvalid={confirmPassword}
                        onChange={handlePasswordCheck}
                        _hover={{ borderColor: "#6600CC" }}
                        focusBorderColor={"#6600CC"} />
                    <InputRightElement width="8rem">
                        <Button
                            h="1.75rem"
                            size="md"
                            color="white"
                            bg={"#6600CC"}
                            onClick={handleClickPassword}>      
                            {show ? "Esconder" : "Mostrar"}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                {confirmPassword ? <Text>Senha não esta igual.</Text> : <Text>✔</Text>}

                <Checkbox pl='8%' pt='3%' mb='3%'>Li e concordo com os Termos e Condições da Plataforma. </Checkbox>

            </FormControl>
            <Button marginLeft='650px' width='357px' h='67px' marginBottom='3%' backgroundColor='#F0F000' _hover='none' border='solid 2px black' fontSize='25px'>
                <Text className='montserrat800'>CRIAR CONTA</Text>
            </Button>
        </Box>
    );
}

export default CadastroCliente;