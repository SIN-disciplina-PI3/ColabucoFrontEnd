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
} from '@chakra-ui/react'

import sandwich from '../assets/sandwich.svg';

import {Button, Input, useDisclosure} from '@chakra-ui/react'

import '../styles/home.css';

function ProductFilters() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
 
  return (
    <>
    
      <Button ref={btnRef} colorScheme='#FFFEEF' onClick={onOpen}>
        <Image src = {sandwich}></Image>
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
          <DrawerCloseButton>
            <Image src = {sandwich}></Image>
          </DrawerCloseButton>

          <DrawerHeader className='montserrat700' textAlign="center" fontSize="32px" border='solid 5px black'>Filtros</DrawerHeader>

          <DrawerBody align='center' borderX='solid 5px black' pt='32px'>
            <Button
            w='353px'h='65px' border='solid 3px black' borderRadius='8px' bg='#0099FF' 
            className='montserrat600' fontSize="20px" colorScheme='buttonscheme' textColor='black'
          > PROMOÇÃO </Button>
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