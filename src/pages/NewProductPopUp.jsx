import NewProduct from "../components/NewProduct";

import { Center } from '@chakra-ui/react'

function NewProductPopUp(){
    return(
        <Center bgColor={'gray'} h={'100vh'} w={'100vw'}>
            <NewProduct />
        </Center>
    );
}

export default NewProductPopUp;