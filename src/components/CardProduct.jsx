import { Box, Center, useColorModeValue, Heading, Text, Stack, Image, } from '@chakra-ui/react';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

function CardProduct() {
  return (
    <Center pt={5} px={4}>
      <Box
        role={'group'}
        p={6}
        maxW={'250px'}
        h='400px'
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow='0px 8px 0px 0px black'
        rounded={'lg'}
        pos={'relative'}
        border='solid 3px black'
      >
        <Box
          rounded={'lg'}
          w='200px'
          h='240px'
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
          border='solid 3px black'
          bg='rgba(0, 0, 0, 0.15)'
        >
        </Box>
        <Stack pt={5} align={'center'}>
          <Heading fontSize={'2xl'} fontWeight={500} className='montserrat'>
            Cadeira Bonita
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontSize={'xl'} className='montserrat'>
              R$100,00
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default CardProduct;