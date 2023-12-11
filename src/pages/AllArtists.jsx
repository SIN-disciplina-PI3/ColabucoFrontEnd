import { Center, Image } from "@chakra-ui/react"
import allartists from '../assets/allartists.svg';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AllArtists(){
    return(
        <>
        <Navbar />
        <Center>
            <Image mt='48px'src={allartists}></Image>
        </Center>
        <Footer />
        </>
    )
}

export default AllArtists