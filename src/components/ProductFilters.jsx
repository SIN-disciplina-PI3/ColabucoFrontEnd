import React from 'react'
import { Button, useDisclosure, Image, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,  DrawerContent, DrawerCloseButton, Stack,} from '@chakra-ui/react'
import sandwich from '../assets/sandwich.svg';
import close from '../assets/close.svg'
import SectionTitleFilters from './SectionTitleFilters';
import CategoriesFilter from './CategoriesFilter';
import CategoriesFilterGenres from './CategoriesFilterGender';
import SliderFilter from './SliderFilter';
import AvailabilityFilters from './AvailabilityFilters';
import ButtonOffers from './ButtonOffers';


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
        size='md'>

        <DrawerOverlay />

        <DrawerContent>
          <Stack h='136px' border='solid 5px black'>
            <DrawerHeader  pt='40px'className='montserrat700' fontSize='32px' textAlign='center'> Filtros
            <DrawerCloseButton w='45' h='27' pt='60px' pr='24px ' _hover={{ backgroundColor: 'none' }}>
              <Image src={close}></Image>
            </DrawerCloseButton>
          </DrawerHeader>
          </Stack>
          

          <DrawerBody align='center' borderX='solid 5px black' pt='32px'>
            <ButtonOffers></ButtonOffers>
            <SectionTitleFilters title='Categorias' />
              <CategoriesFilter></CategoriesFilter>
            <SectionTitleFilters title='Preço' />
              <SliderFilter></SliderFilter>
            <SectionTitleFilters title='Disponibilidade' />
              <AvailabilityFilters></AvailabilityFilters>
            <SectionTitleFilters title='Gênero' />
              <CategoriesFilterGenres></CategoriesFilterGenres>
          </DrawerBody>

           <DrawerFooter>
            <Button className='categoriaFiltros' mr={3}>
              Limpar
            </Button>
            <Button className='categoriaFiltros' _hover={{ backgroundColor: 'none' }} backgroundColor='#09F'>Aplicar</Button>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ProductFilters;