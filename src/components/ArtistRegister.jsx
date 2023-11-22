import {
  Box,
  Text,
  Heading,
  Stack,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Checkbox,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

function ArtistRegister() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

  function handleClickPassword() {
    setShow(!show);
  }

  return (
    <Stack>
      <Box textAlign="center" border="4px" bg={"#FFFF00"} p={8}>
        <Text className="montserrat600" fontSize="4xl" fontWeight="bold">
          CADASTRAR LOJA
        </Text>
        <Text className="montserrat600" fontSize="xl">
          Venda seus produtos e crie conexões em um lugar só
        </Text>
      </Box>

      <FormControl
        className="montserrat600"
        paddingY={8}
        paddingX={32}
        fontWeight="bold"
      >
        <FormLabel>Nome da empresa ou vendedor:</FormLabel>
        <Input border="2px" />

        <FormLabel>CPF ou CNPJ:</FormLabel>
        <Input border="2px"></Input>

        <FormLabel>Telefone:</FormLabel>
        <Input border="2px" />

        <FormLabel>Email:</FormLabel>
        <Input border="2px" type="email" />
        <FormLabel>Endereço:</FormLabel>
        <Input border="2px" />
        <Box paddingTop={4}>
          <Flex gap={2}>
            <Select border="2px"></Select>
            <Select border="2px"></Select>
          </Flex>
        </Box>
        <FormLabel>Selecione o(s) tipo(s) de arte que você produz:</FormLabel>
        <Select border="2px"></Select>
        <FormLabel>
          Políticas de entrega e frete (incluindo prazos de entrega)
        </FormLabel>
        <Select border="2px"></Select>
        <FormLabel>
          Uma descrição da sua loja, incluindo o tipo de produtos ou serviços
          que você oferece.
        </FormLabel>
        <Textarea
          border="2px"
          placeholder="Descrição de loja, produtos, serviços ..."
        />
        <FormLabel>Senha:</FormLabel>
        <InputGroup>
          <Input border="2px" type={show ? "text" : "password"} />
          <InputRightElement width="8rem">
            <Button
              h="1.75rem"
              size="md"
              color="white"
              bg={"#6600CC"}
              onClick={handleClickPassword}
            >
              {show ? "Esconder" : "Mostrar"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <FormLabel>Confirmar Senha:</FormLabel>
        <InputGroup>
          <Input border="2px" type={show ? "text" : "password"} />
          <InputRightElement width="8rem">
            <Button
              h="1.75rem"
              size="md"
              color="white"
              bg={"#6600CC"}
              onClick={handleClickPassword}
            >
              {show ? "Esconder" : "Mostrar"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Box>
          <Text color={"#9E9E9E"}>
            Por favor, leia atentamente os termos e condições abaixo antes de
            prosseguir com o cadastro da sua loja no nosso marketplace. Ao
            marcar a caixa de seleção abaixo, você indica sua compreensão e
            concordância com os termos estabelecidos.
          </Text>
          <Text color={"#666666"}>
            Termos e Condições: Aceitação da Plataforma Colabuco
          </Text>
        </Box>
        <Checkbox defaultUnChecked paddingBottom={4}>
          Li e concordo com os Termos e Condições da Plataforma
        </Checkbox>
        <Button display="block" color="white" bg={"#6600CC"} size="lg">
          CADASTRAR LOJA
        </Button>
      </FormControl>
    </Stack>
  );
}

export default ArtistRegister;
