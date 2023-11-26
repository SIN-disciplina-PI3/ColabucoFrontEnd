import React from 'react'
import { Button, useDisclosure, Image, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,  DrawerContent, DrawerCloseButton,} from '@chakra-ui/react'
import sandwich from '../assets/sandwich.svg';
import sandwich2 from '../assets/sandwich2.svg';
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
          <DrawerHeader h='136px' className='montserrat700' fontSize='32px' border='solid 5px black' textAlign='center'> Filtros
            <DrawerCloseButton w='45' h='27' pt='35px' pr='24px '>
              <Image src={sandwich2}></Image>
            </DrawerCloseButton>
          </DrawerHeader>

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