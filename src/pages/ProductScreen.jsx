import { Box, Flex } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import ProductImage from "../components/product/ProductImage"
import ProductTitle from "../components/product/ProductTitle"
import ProductArtist from "../components/product/ProductArtist"
import ProductPrice from "../components/product/ProductPrice"
import ProductDescription from "../components/product/ProductDescription"
import ProductColor from "../components/product/ProductColor"
import Footer from "../components/Footer"

function ProductScreen() {
    return (
        <>

        <Navbar></Navbar>
       
            <Flex>
                <ProductImage pt='64px' pl='171px' border='4px' borderRadius='8px' src='https://i.discogs.com/yGmG6qztvTovGqYvQOefrsdlW5dLTIHdyrQVw2PgUfk/rs:fit/g:sm/q:90/h:554/w:554/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTY1MzY4/NTYtMTU3MjU0OTEx/OS02NjQzLmpwZWc.jpeg'/>
                <Box ml='64px' mt='48px'>
                    <ProductTitle title='Ednaldo Pereira'></ProductTitle>
                    <ProductArtist title='@ednaldopereira'></ProductArtist>
                    <ProductPrice initialPrice={900} currentPrice={450} installments={10}></ProductPrice>
                    <ProductDescription></ProductDescription>
                    <Flex mt='48px' gap='22px'>
                        <ProductColor bg='#F6F099'></ProductColor>
                        <ProductColor bg='#F3985B'></ProductColor>
                        <ProductColor bg='#96D5FF'></ProductColor>
                        <ProductColor bg='#8CEAA6'></ProductColor>
                    </Flex>
                </Box>
            </Flex>
        <Footer />

        </>
    )
}

export default ProductScreen