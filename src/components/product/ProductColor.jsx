import { Button } from "@chakra-ui/react";

function ProductColor(props){
    return(
        <>
            <Button w='42px' h='42px' bg={props.bg} border='3px solid' borderRadius='10rem'></Button>
        </>
    )
}

export default ProductColor