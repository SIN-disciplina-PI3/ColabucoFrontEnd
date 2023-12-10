import { Text, Box } from "@chakra-ui/react";

function ProductPrice(props){
    const {initialPrice, currentPrice, installments} = props
    
    const formatInitialPrice = initialPrice ? `R$ ${initialPrice.toFixed(2)}` : ''
    const formatCurrentPrice = currentPrice ? `R$ ${currentPrice.toFixed(2)}` : 'R$ 0.00'
    const calculateInstallmentsPrice = (currentPrice/installments)
    const formatInstallmentsPrice = calculateInstallmentsPrice ? calculateInstallmentsPrice.toFixed(2) : '0.00'

    return(
        <>
        <Box pt='20px'>
            <Text as='s' fontSize='26px' className='montserrat500'>{formatInitialPrice}</Text>
            <Text mt='-12px' fontSize='64px' className='montserrat800'>{formatCurrentPrice}</Text>
            <Text mb='20px' fontSize='26px' className='montserrat500'>ou {installments || '0'}x de R$ {formatInstallmentsPrice} sem juros</Text>
        </Box>
        </>
    )
}

export default ProductPrice