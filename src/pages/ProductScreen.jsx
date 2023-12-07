import { Box, Stack, Image, Text, Button } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import ProductImage from "../components/ProductImage"

function ProductScreen() {
    return (
        <>
            <Navbar></Navbar>
            <Stack>
                <Box display='flex' flexDirection='row'>

                    <ProductImage src='https://akamai.sscdn.co/uploadfile/letras/fotos/c/4/e/9/c4e987143a79ddc7769d979b49d86456.jpg' />

                    <Box ml='64px' mt='48px'>

                        <Text fontSize='64px' className="montserrat800title" color='#F60'>Ednaldo Pereira</Text>
                        <Text pl='1px' mt='-101px' fontSize='64px' className="montserrat800title" color='white'>Ednaldo Pereira</Text>

                        <Box display='flex' gap='8px' flexDirection='row'>
                            <Text fontSize='26px' className="montserrat800">Por: </Text>
                            <Text fontSize='26px' px='10px' className='montserrat600italic' w='fit-content' bg='rgba(223, 243, 98, 0.50)' borderRadius='10rem'>@ednaldopereira</Text>
                        </Box>

                        <Box pt='20px'>
                            <Text as='s' fontSize='26px' className='montserrat500'>R$ 00,00</Text>
                            <Text mt='-12px' fontSize='64px' className='montserrat800'>R$ 00,00</Text>
                            <Text mb='20px' fontSize='26px' className='montserrat500'>ou 3x de R$ 00,00 sem juros</Text>
                        </Box>

                        <Text w='470px' h='50px' textAlign='justify' fontSize='15px' className='montserrat500'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation. 
                        </Text>

                        <Box mt='48px' display='flex' flexDirection='row' gap='22px'>
                            <Button w='42px' h='42px' bg='#F6F099' border='3px solid' borderRadius='10rem'></Button>
                            <Button w='42px' h='42px' bg='#F3985B' border='3px solid' borderRadius='10rem'></Button>
                            <Button w='42px' h='42px' bg='#96D5FF' border='3px solid' borderRadius='10rem'></Button>
                            <Button w='42px' h='42px' bg='#8CEAA6' border='3px solid' borderRadius='10rem'></Button>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </>
    )
}

export default ProductScreen