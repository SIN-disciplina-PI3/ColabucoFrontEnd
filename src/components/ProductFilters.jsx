import React from 'react'

import {
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center,
} from '@chakra-ui/react'

import sandwich from '../assets/sandwich.svg';

import sandwich2 from '../assets/sandwich2.svg';

import SectionTitle from './SectionTitle';

import { Button, Input, useDisclosure } from '@chakra-ui/react'

import '../styles/home.css';
import SectionTitleFilters from './SectionTitleFilters';

function ProductFilters() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>

      <Button ref={btnRef} colorScheme='#FFFEEF' onClick={onOpen}>
        <Image src={sandwich}></Image>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='md'
      >
        <DrawerOverlay />
        <DrawerContent>

          <DrawerHeader h='136px'className='montserrat700' fontSize="32px" border='solid 5px black' textAlign="center">Filtros
            <DrawerCloseButton w='45' h='27' marginLeft="auto" marginRight="auto" display='block'>
              <Image src={sandwich2}></Image>
            </DrawerCloseButton>
          </DrawerHeader>

          <DrawerBody align='center' borderX='solid 5px black' pt='32px'>
            <Button
              w='353px' h='65px' border='solid 3px black' borderRadius='8px' bg='#0099FF' borderBottom="solid 5px" borderLeft="solid 5px"
              className='montserrat600' fontSize="20px" colorScheme='buttonscheme' textColor='black'
            > PROMOÇÃO </Button>

            <SectionTitleFilters title='Categorias' />
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>

      </Drawer>
    </>
  )
}

export default ProductFilters;