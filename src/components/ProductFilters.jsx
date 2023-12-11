import React from 'react'
import { Box, Button, useDisclosure, Image, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,  DrawerContent, DrawerCloseButton, Stack,} from '@chakra-ui/react'
import sandwich from '../assets/sandwich.svg';
import close from '../assets/close.svg'
import SectionTitleFilters from './productfilters/SectionTitleFilters';
import CategoriesFilter from './productfilters/CategoriesFilter';
import CategoriesFilterGender from './productfilters/CategoriesFilterGender';
import SliderFilter from './productfilters/SliderFilter';
import AvailabilityFilters from './productfilters/AvailabilityFilters';
import ButtonOffers from './productfilters/ButtonOffers';

function ProductFilters(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button left={props.left} bottom={props.bottom} ref={btnRef} colorScheme='#FFFEEF' onClick={onOpen}>
        <Image src={sandwich}></Image>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='md'>

        <DrawerOverlay />

        <DrawerContent>
          <Stack h='8.5rem' border='solid 0.3rem black'>
            <DrawerHeader pt='2.5rem' className='montserrat700' fontSize='2rem' textAlign='center'> Filtros
            <DrawerCloseButton w='2.8rem' h='1.6rem' pt='3.7rem' pr='1.5rem' _hover={{ backgroundColor: 'none' }}>
              <Image src={close}></Image>
            </DrawerCloseButton>
          </DrawerHeader>
          </Stack>
          

          <DrawerBody align='center' borderX='solid 5px black' pt='32px'>
            <ButtonOffers></ButtonOffers>
            <SectionTitleFilters w='11.7rem' title='Categorias' />
            <Box pt='100px'>
              <CategoriesFilter></CategoriesFilter>
            </Box>
            <SectionTitleFilters w='6.6rem' title='Preço' />
              <SliderFilter></SliderFilter>
            <SectionTitleFilters w='13rem' title='Disponibilidade' />
              <AvailabilityFilters></AvailabilityFilters>
            <SectionTitleFilters w='7.6rem'title='Gênero' />
              <CategoriesFilterGender></CategoriesFilterGender>
          </DrawerBody>

           <DrawerFooter border='solid 0.3rem black'>
            <Button className='categoriaFiltros' mr={3}>
              Limpar
            </Button>
            <Button className='categoriaFiltros' onClick={onClose} _hover={{ backgroundColor: 'none' }} backgroundColor='#09F'>Aplicar</Button>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ProductFilters;