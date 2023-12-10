import { Box, Stack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import ProductImage from "../components/Product/ProductImage"
import ProductTitle from "../components/Product/ProductTitle"
import ProductArtist from "../components/Product/ProductArtist"
import ProductPrice from "../components/Product/ProductPrice"
import ProductDescription from "../components/Product/ProductDescription"
import ProductColor from "../components/Product/ProductColor"

function ProductScreen() {
    return (
        <>

        <Navbar></Navbar>
        <Stack>
            <Box display='flex' flexDirection='row'>
                <ProductImage />
                <Box ml='64px' mt='48px'>
                    <ProductTitle></ProductTitle>
                    <ProductArtist></ProductArtist>
                    <ProductPrice></ProductPrice>
                    <ProductDescription></ProductDescription>
                    <Box mt='48px' display='flex' flexDirection='row' gap='22px'>
                        <ProductColor bg='#F6F099'></ProductColor>
                        <ProductColor bg='#F3985B'></ProductColor>
                        <ProductColor bg='#96D5FF'></ProductColor>
                        <ProductColor bg='#8CEAA6'></ProductColor>
                    </Box>
                </Box>
            </Box>
        </Stack>

        </>
    )
}

export default ProductScreen