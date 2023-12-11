import { Center, Image, Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import aboutcolabuco from '../assets/aboutcolabuco.svg'
import Footer from "../components/Footer"

function AboutColabuco() {
    return (
        <>
        <Box className='content'>
            <Navbar className='content'></Navbar>
            <Center className="montserrat800" border='solid 3px black' h={'105.01px'} bgColor={'#6600CC'} color={'white'} fontSize={'25px'}>SOBRE A COLABUCO</Center>
            <Center mt='40px'>
                <Image src={aboutcolabuco}></Image>
            </Center>

            <Footer></Footer>
            </Box>
        </>
    )
}

export default AboutColabuco