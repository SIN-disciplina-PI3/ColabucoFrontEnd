import { Box, Center, Stack } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import ProfileInformations from "../components/ProfileInformations";
import ArtistProducts from "../components/ArtistProducts";

import "../styles/global-styles.css";

function ArtistProfile() {
  return (
    <Box className='content'>
      <Navbar className='content'/>
      <Center
        className="fw7 borda"
        h={"105.01px"}
        bgColor={"#6600CC"}
        color={"white"}
        fontSize={"25px"}
      >
        GESTÃO DE LOJA
      </Center>

      <Stack w={"100%"} p={"30px 92px"} gap={"35px"}>
        <ProfileInformations />
        <ArtistProducts />
      </Stack>
    </Box>
  );
}

export default ArtistProfile;
