import { Center, Image } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import aboutcolabuco from '../assets/aboutcolabuco.svg'
import Footer from "../components/Footer"

function AboutColabuco() {
    return (
        <>
            <Navbar></Navbar>
            <Center className="fw7" border='solid 3px black' h={'105.01px'} bgColor={'#6600CC'} color={'white'} fontSize={'25px'}>SOBRE A COLABUCO</Center>
            <Center mt='40px'>
                <Image src={aboutcolabuco}></Image>
            </Center>

            <Footer></Footer>
        </>
    )
}

export default AboutColabuco