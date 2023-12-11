import {
  Box,
  Button,
  Image,
  Flex,
  Text,
  Link,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";

function ArtistProfileCard({ urlFoto, descricao, linkRedesArtista, corFundo }) {
  return (
    <Center>
      <Grid
        bg={corFundo}
        padding="16px"
        marginTop="20px"
        gap="10px"
        templateColumns=" 300px 650px"
        border="solid black 2px"
        borderRadius="6px"
      >
        <GridItem>
          <Box>
            <Box paddingLeft="35px">
              <Image
                border="solid black 3px"
                boxShadow={"-4px 4px 0px 1px #6600CC, -5px 5px 0px 3px #000000"}
                boxSize="225px"
                borderRadius="100%"
                src={urlFoto}
                fallbackSrc="https://via.placeholder.com/500"
              />
            </Box>
            <Box
              marginTop="10px"
              bg={"#6600CC"}
              borderRadius="15px"
              color={"#D9D9D9"}
              textAlign="center"
            >
              <Link padding="2px">{linkRedesArtista}</Link>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box paddingTop="10px">
            <Text textAlign="left" fontWeight="bold">
              {descricao}
            </Text>
          </Box>
          <Box paddingTop="30px" textAlign="center">
            <Button bg="transparent" textDecoration="underline" fontSize="23px">
              Acesse a Loja
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </Center>
  );
}
export default ArtistProfileCard;
