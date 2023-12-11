import { Text, Button, Input, InputGroup, InputRightElement, Stack, Flex, CloseButton, Box, Link} from '@chakra-ui/react';
import styles from '../styles/login.css';
import React from 'react';
import '../styles/home.css';


function Login() {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (

    <Box>
        <Flex direction='row' justifyContent='center' alignItems='center' className='navBar'>   
                <Text>L O G I N </Text>
        </Flex>

        <Stack mx='3.7rem' mt='3rem' alignItems='flex-start' spacing={3}>    
            <Text className='fonte01'> Email </Text>
            <Input borderColor={'black'} width='36rem' className='input' border='solid 2px black' _hover={{ borderColor: "#6600CC" }}/>

            <Text className='fonte01'> Senha</Text>
            <InputGroup size='md' width='36rem' >
                <Input type={show ? 'text' : 'password'} border='solid 2px black' _hover={{ borderColor: "#6600CC" }}/>
                <InputRightElement pr='0.4' marginRight='2' >
                    <Button
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

            <Flex direction={'row'} gap='6px'>

            <Text className='fonte01'>Não possui conta?</Text>
            <Link className='texto03' href='cadastrocliente'>Cadastre-se </Link>
            </Flex>
        </Stack>
        <Flex mt='2.5rem' direction={'column'} alignItems={'center'}>
            <Button w='11rem' h='4rem'_hover='none' backgroundColor='#6600CC' color='white' border='solid 3px black'>
                <Link href='perfilcliente'>ENTRAR</Link>
            </Button>
        </Flex>
    </Box>
    );

}



export default Login;