import { Box, Button, Center, Image, Flex, Text } from "@chakra-ui/react";
import allartists from "../assets/allartists.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArtistProfileCard from "../components/ArtistProfileCard";

function AllArtists() {
  const texto =
    "Olá! Sou o Falafel, um jovem artista e estudante de Expressão Gráfica na UFPE. Minha paixão pela criação visual se traduz em belos posters que refletem minha jornada criativa e inspiração. No Colabuco, compartilho minha arte de forma independente, cada peça é única e representa meu amor pela expressão gráfica. Cada compra ajuda a apoiar meu sonho artístico e me permite continuar a criar e inovar. Espero que você encontre algo especial em meu trabalho para decorar seu espaço ou presentear alguém. Bem-vindo à minha loja, e obrigado por apoiar o mundo da arte independente. 🦀🏖";
  return (
    <>
    <Box className='content'>
      <Navbar className='content'/>
      <Center>
        <Image mt="48px" src={allartists}></Image>
      </Center>
      <ArtistProfileCard
        linkRedesArtista="@linkartista"
        descricao={texto}
        corFundo="#FFFF00"
      />
      <ArtistProfileCard
        linkRedesArtista="@linkartista"
        descricao={texto}
        corFundo="#FF6600"
      />
      <ArtistProfileCard
        linkRedesArtista="@linkartista"
        descricao={texto}
        corFundo="#0099FF"
      />
      <ArtistProfileCard
        linkRedesArtista="@linkartista"
        descricao={texto}
        corFundo="#FF24BD"
      />
      <Footer />
      </Box>
    </>
  );
}

export default AllArtists;
