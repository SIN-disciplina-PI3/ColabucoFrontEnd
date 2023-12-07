import { Text, Button, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react';
import styles from '../styles/login.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Login() {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (

        <Stack className='box'>

            <navBar className='navBar' > L O G I N </navBar>

            <Text className='texto fonte01'> Email </Text>
            <Input
                borderColor={'black'}
                width='30%'
                className='input'
            />

            <Text className='texto2 fonte01'> Senha</Text>
            <InputGroup size='md' width='30%' borderColor={'black'} >


                <Input
                    type={show ? 'text' : 'password'}
                />
                <InputRightElement pr='0.4' marginRight='2' >
                    <Button
                    _hover='none'
                    transitionDelay='0.3s'
                        color='white'
                        backgroundColor='#6600CC'
                        h='1.80rem'
                        size='xs'
                        onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>

            </InputGroup>

            <Text className='fonte01' >Não possui conta?
                <Link className='texto03' to='/cadastrocliente'> Cadastre-se </Link>
            </Text>

            <Button className='fonte02' _hover='none' backgroundColor='#6600CC' color='white'> Entrar </Button>
        </Stack>
    );

}



export default Login;