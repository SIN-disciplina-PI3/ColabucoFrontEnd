import {
  Box,
  Text,
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
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [confirmCpfCnpj, setConfirmCpfCnpj] = useState(true);

  function handleClickPassword() {
    setShow(!show);
  }
  function passwordValidation(password) {
    if (password.length > 8) {
      return true;
    } else {
      return false;
    }
  }
  function handlePassword(e) {
    if (passwordValidation(e.target.value)) {
      setPassword(e.target.value);
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }

  function handlePasswordCheck(e) {
    if (e.target.value === password) {
      setConfirmPassword(false);
      alert("Senha confere");
    } else {
      setConfirmPassword(true);
    }
  }

  function handleCpfCnpj(e) {
    const cpfCnpjCheck = e.target.value;
    console.log(cpfCnpjCheck);
    console.log(cpfCnpjCheck.length);
    const checkCnpj = /([0-9]{2}?[0-9]{3}?[0-9]{3}?[0-9]{4}?[0-9]{2})/g;

    const checkCpf = /([0-9]{3}?[0-9]{3}?[0-9]{3}?[0-9]{2})/g;

    if (checkCpf.test(cpfCnpjCheck) && cpfCnpjCheck.length === 11) {
      setCpfCnpj(cpfCnpj);
      setConfirmCpfCnpj(false);

      alert("Válido");
    } else {
      setConfirmCpfCnpj(true);
    }
    if (checkCnpj.test(e.target.value) && cpfCnpjCheck.length === 14) {
      setCpfCnpj(cpfCnpj);
      setConfirmCpfCnpj(false);
      alert("Válido");
    } else {
      setConfirmCpfCnpj(true);
    }
  }

  return (
    <Stack>
      <Box textAlign="center" border="4px" bg={"#FFFF00"} p={8}>
        <Text className="montserrat500" fontSize="4xl" fontWeight="bold">
          CADASTRAR LOJA
        </Text>
        <Text className="montserrat500" fontSize="xl">
          Venda seus produtos e crie conexões em um lugar só
        </Text>
      </Box>

      <FormControl
        className="montserrat500"
        paddingY={8}
        paddingX={32}
        fontWeight="bold"
      >
        <FormLabel>Nome da empresa ou vendedor:</FormLabel>
        <Input
          border="2px"
          placeholder="Digite nome da empresa ou vendedor"
          _hover={{ borderColor: "#6600CC" }}
          focusBorderColor={"#6600CC"}
        />

        <FormLabel paddingTop={4}>CPF ou CNPJ:</FormLabel>
        <Input
          border="2px"
          placeholder="Digite cpf ou cnpj"
          onChange={handleCpfCnpj}
          _hover={{ borderColor: "#6600CC" }}
          focusBorderColor={"#6600CC"}
          isInvalid={confirmCpfCnpj}
        />
        <Text>{cpfCnpj}</Text>

        <FormLabel paddingTop={4}>Telefone:</FormLabel>
        <Input
          border="2px"
          placeholder="ddd + número"
          _hover={{ borderColor: "#6600CC" }}
          focusBorderColor={"#6600CC"}
        />

        <FormLabel paddingTop={4}>Email:</FormLabel>
        <Input
          border="2px"
          type="email"
          placeholder="Digite email"
          _hover={{ borderColor: "#6600CC" }}
          focusBorderColor={"#6600CC"}
        />

        <FormLabel paddingTop={4}>Endereço:</FormLabel>
        <Input
          border="2px"
          placeholder="Endereço com número"
          _hover={{ borderColor: "#6600CC" }}
          focusBorderColor={"#6600CC"}
        />

        <Box paddingTop={4}>
          <Flex gap={2}>
            <Select
              border="2px"
              placeholder="Selecione o Estado"
              _hover={{ borderColor: "#6600CC" }}
              focusBorderColor={"#6600CC"}
            >
              <option value="option1">Pernambuco</option>
            </Select>
            <Select
              border="2px"
              placeholder="Selecione a Cidade"
              _hover={{ borderColor: "#6600CC" }}
              focusBorderColor={"#6600CC"}
            >
              <option value="option1">Recife</option>
              <option value="option2">Olinda</option>
              <option value="option3">Paulista</option>
            </Select>
          </Flex>
        </Box>

        <FormLabel paddingTop={4}>
          Selecione o(s) tipo(s) de arte que você produz:
        </FormLabel>
        <Select
          border="2px"
          placeholder="Selecione o tipo"
          _hover={{ borderColor: "#6600CC" }}
          focusBorderColor={"#6600CC"}
        >
          <option value="option1">Música</option>
          <option value="option2">Literatura</option>
          <option value="option3">Cinema</option>
          <option value="option4">Outros</option>
        </Select>

        <FormLabel paddingTop={4}>
          Políticas de entrega e frete (incluindo prazos de entrega)
        </FormLabel>
        <Select
          border="2px"
          placeholder="Selecione tipo de política de entrega e frete"
          _hover={{ borderColor: "#6600CC" }}
          focusBorderColor={"#6600CC"}
        ></Select>

        <FormLabel paddingTop={4}>
          Uma descrição da sua loja, incluindo o tipo de produtos ou serviços
          que você oferece.
        </FormLabel>
        <Textarea
          border="2px"
          placeholder="Descrição de loja, produtos, serviços ..."
          _hover={{ borderColor: "#6600CC" }}
          focusBorderColor={"#6600CC"}
        />

        <FormLabel paddingTop={4}>Senha:</FormLabel>
        <InputGroup>
          <Input
            border="2px"
            type={show ? "text" : "password"}
            onChange={handlePassword}
            placeholder="Digite a senha"
            _hover={{ borderColor: "#6600CC" }}
            focusBorderColor={"#6600CC"}
          />
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

        {passwordValid ? <Text>✔</Text> : <Text>Mínimo de 8 caracteres</Text>}

        <FormLabel paddingTop={4}>Confirmar Senha:</FormLabel>
        <InputGroup>
          <Input
            border="2px"
            type={show ? "text" : "password"}
            placeholder="Confirme a senha"
            isInvalid={confirmPassword}
            onChange={handlePasswordCheck}
            _hover={{ borderColor: "#6600CC" }}
            focusBorderColor={"#6600CC"}
          />
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

        {confirmPassword ? <Text>Senha não esta igual.</Text> : <Text>✔</Text>}

        <Box paddingTop={4}>
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

        <Checkbox defaultChecked paddingBottom={4}>
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
