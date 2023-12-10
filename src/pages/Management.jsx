import { Box, Center } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import ProfileInformations from "../components/ProfileInformations";

import '../styles/global-styles.css';

function Management(){
    return(
        <Box>
            <Navbar/>
            <Center className="fw7 borda" h={'105.01px'} bgColor={'#6600CC'} color={'white'} fontSize={'25px'}>GESTÃO DE LOJA</Center>

            <Box>
                <ProfileInformations/>
            </Box>
        </Box>
    );
}

export default Management;