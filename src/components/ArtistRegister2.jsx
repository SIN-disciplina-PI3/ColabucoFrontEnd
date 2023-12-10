import {
  Box,
  Text,
  Stack,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Image,
  Grid,
  GridItem,
  Center,
  CloseButton,
  Link
} from "@chakra-ui/react";
import "../styles/artistregistercss.css";
import imagem from "../assets/vetor-ArtistRegister2.svg";
function ArtistRegister2({onClose, createStorage}) {
  return (
    <Center position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -35%)'} h={'150vh'}>
      <Stack bgColor={'white'}>
        <Box textAlign="center" border="4px" bg={"#FFFF00"} p={8}>
          <Box position={'absolute'} left={'93%'}>
            <CloseButton onClick={onClose}/>
          </Box>
          <Text className="montserrat500" fontSize="4xl" fontWeight="bold">
            CADASTRAR LOJA
          </Text>
          <Text className="montserrat500" fontSize="xl">
            Venda seus produtos e crie conexões em um lugar só
          </Text>
        </Box>
        <form onSubmit={createStorage}>
          <FormControl
            className="montserrat500"
            paddingY={8}
            paddingX={32}
            fontWeight="bold"
          >
            <Grid templateColumns="repeat(2, 1fr)" gap={5} paddingRight="20%">
              <GridItem justifySelf="end">
                <FormLabel>Foto de Perfil</FormLabel>
                <Box position="relative">
                  <Input
                    className="inputFile"
                    w={180}
                    h={246}
                    type="file"
                    bg={"#E89BC0"}
                    borderWidth="3px"
                    borderColor={"#000000"}
                    boxShadow={"5px 5px 0px 1px #DFF362, 6px 6px 0px 3px #000000"}
                    _hover={{ borderColor: "#6600CC" }}
                  />

                  <Box position="absolute" top="40%" right="39%">
                    <Image src={imagem} display="block" />
                  </Box>
                </Box>
                <Box marginTop={2} position="relative">
                  <FormLabel>Portifólio:</FormLabel>
                  <Input
                    className="inputFile"
                    w={190}
                    h={210}
                    type="file"
                    bg={"#DFF362"}
                    borderWidth="3px"
                    borderColor={"#000000"}
                    boxShadow={"4px 4px 0px 1px #E89BC0, 5px 5px 0px 3px #000000"}
                    _hover={{ borderColor: "#6600CC" }}
                  />
                  <Box position="absolute" top="45%" right="39%">
                    <Image src={imagem} display="block" />
                  </Box>
                </Box>
              </GridItem>
              <GridItem justifySelf="start">
                <FormLabel>Nome da Loja:</FormLabel>
                <Input
                  type="text"
                  bg={"#f5f5f5"}
                  borderWidth="3px"
                  borderColor={"#000000"}
                  _hover={{ borderColor: "#6600CC" }}
                  focusBorderColor={"#6600CC"}
                />
                <FormLabel paddingTop={4}>Descrição:</FormLabel>
                <Textarea
                  bg={"#f5f5f5"}
                  borderWidth="3px"
                  borderColor={"#000000"}
                  _hover={{ borderColor: "#6600CC" }}
                  focusBorderColor={"#6600CC"}
                />
                <FormLabel paddingTop={4}>Localização:</FormLabel>
                <Box>
                  <Flex gap={2}>
                    <Input
                      bg={"#f5f5f5"}
                      borderWidth="3px"
                      borderColor={"#000000"}
                      _hover={{ borderColor: "#6600CC" }}
                      focusBorderColor={"#6600CC"}
                    />
                    <Input
                      bg={"#f5f5f5"}
                      borderWidth="3px"
                      borderColor={"#000000"}
                      _hover={{ borderColor: "#6600CC" }}
                      focusBorderColor={"#6600CC"}
                    />
                  </Flex>
                </Box>
                <FormLabel paddingTop={4}>Descrição:</FormLabel>
                <Textarea
                  h={199}
                  borderWidth="3px"
                  bg={"#f5f5f5"}
                  borderColor={"#000000"}
                  _hover={{ borderColor: "#6600CC" }}
                  focusBorderColor={"#6600CC"}
                />
              </GridItem>
            </Grid>
            <Center paddingY={8} paddingX={32}>
              <Link
                display="block"
                color="white"
                bg={"#6600CC"}
                size="lg"
                borderWidth="3px"
                borderColor={"#000000"}
                href="perfilartista"
              >
                  CRIAR LOJA
              </Link>
            </Center>
          </FormControl>
        </form>
      </Stack>
    </Center>
  );
}
export default ArtistRegister2;
