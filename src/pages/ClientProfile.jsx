import { useState } from "react";
import { Box, Button, Center, Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ProfileInformations from "../components/ProfileInformations";
import ArtistRegister from "../components/ArtistRegister";
import ArtistRegister2 from "../components/ArtistRegister2";

function ClientProfile(){
    const [popup1Visible, setPopup1Visible] = useState(false);
    const [popup2Visible, setPopup2Visible] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);

    const handleOpenPopup1 = () => {
        setPopup1Visible(true);
        setIsBlurred(true);
    };

    const handleNextPopup = () => {
        setPopup1Visible(false);
        setPopup2Visible(true);
    }
  
    const handleClosePopup1 = () => {
        setPopup1Visible(false);
        setIsBlurred(false);
    };

    const handleClosePopup2 = () => {
        setPopup2Visible(false);
        setIsBlurred(false);
    };

    const handleCreateStorage = () => {

    }

    return(
        <Box>
            <Navbar/>
            <Center className="fw7 borda" h={'105.01px'} bgColor={'#6600CC'} color={'white'} fontSize={'25px'}>PERFIL</Center>
            <Stack w={'100%'} p={'30px 92px'}>
                <ProfileInformations/>
                <Button onClick={handleOpenPopup1} bgColor={'#6600CC'} color={'white'} fontWeight={'700'} h={'50px'} w={'250px'} position={'relative'} left={'1428px'}>ME TORNAR ARTISTA</Button>
                <Box>
                    {popup1Visible && <ArtistRegister nextPopup={handleNextPopup} onClose={handleClosePopup1}/>}
                    {popup2Visible && <ArtistRegister2 createStorage={handleCreateStorage} onClose={handleClosePopup2}/>}
                </Box>
            </Stack>
        </Box>
    );
}

export default ClientProfile;