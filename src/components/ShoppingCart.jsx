import React from 'react'
import { Link, Icon, Flex, Text, Button, useDisclosure, Image, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,  DrawerContent, DrawerCloseButton, Stack,} from '@chakra-ui/react'
import close from '../assets/close.svg'
import { FiShoppingBag } from "react-icons/fi";
import CardProductCart from './CardProductCart';



function ShoppingCart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Link size='lg'>
        <Icon as={FiShoppingBag} w={8} h={8} ref={btnRef} colorScheme='teal' onClick={onOpen} />
        </Link>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='md'>

        <DrawerOverlay />

        <DrawerContent>
          <Stack h='8.5rem' border='solid 0.3rem black'>
            <DrawerHeader pt='2.5rem' className='montserrat700' fontSize='2rem' textAlign='center'> Carrinho de compras
            <DrawerCloseButton w='2.8rem' h='1.6rem' pt='3.7rem' pr='1.5rem' _hover={{ backgroundColor: 'none' }}>
              <Image src={close}></Image>
            </DrawerCloseButton>
          </DrawerHeader>
          </Stack>
          

          <DrawerBody align='center' borderX='solid 5px black' pt='32px'>
            <CardProductCart src='https://img.elo7.com.br/product/main/406A1E0/ednaldo-pereira-de-biscuit-presente.jpg' productTitle='Ednaldinho Pereira' price={90}></CardProductCart>
            <CardProductCart src='https://i1.sndcdn.com/artworks-BE72T6QuR7IYqIYr-XHJymA-t500x500.jpg' productTitle='Gato Banano' price={1200}></CardProductCart>
            <CardProductCart src='https://tm.ibxk.com.br/2022/12/15/15135939320320.jpg?ims=1200x675' productTitle='Jotaro Kujo' price={9000}></CardProductCart>
          </DrawerBody>

           <DrawerFooter border='solid 0.3rem black'>
            <Flex direction='row'>
            <Text mr='9rem' fontSize='1.2rem'>Total: R$10,290.00 </Text>
            <Button className='categoriaFiltros' _hover={{ backgroundColor: 'none' }} backgroundColor='#DFF362'>
                <Link href='carrinho'>
                INICIAR COMPRA
                </Link>
            </Button>
            </Flex>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ShoppingCart;