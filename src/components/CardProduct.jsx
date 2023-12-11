import { Box, Center, useColorModeValue, Heading, Text, Stack, Link } from '@chakra-ui/react';
import ProductImage from './product/ProductImage';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

function CardProduct(props) {
  const { title, initialPrice, currentPrice } = props
  const formatInitialPrice = initialPrice ? `R$ ${initialPrice.toFixed(2)}` : ''
  const formatCurrentPrice = currentPrice ? ` R$ ${currentPrice.toFixed(2)}` : 'R$ 0.00'
  return (
    <Center pt={5} px={4}>
      <Link href='produto'>
      <Box
        role={'group'}
        p={6}
        maxW={'15.6rem'}
        h='25rem'
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow='0px 8px 0px 0px black'
        rounded={'lg'}
        pos={'relative'}
        border='solid 3px black'
        >
        {/* <Box
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
          <Image boxSize='fit-content' fallbackSrc='https://via.placeholder.com/500'></Image>
        </Box> */}
        <Box h='15rem'>
          <ProductImage src={props.src} borderRadius='lg' boxSize='15rem' border='solid 3px black'></ProductImage>
        </Box>

        <Stack pt={5} align={'center'}>
          <Heading fontSize={'2xl'} fontWeight={500} className='montserrat'>
            {title || 'Produto'}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontSize={'xl'} className='montserrat'>
              {formatCurrentPrice} 
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              {formatInitialPrice}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Link>
    </Center>
  );
}

export default CardProduct;