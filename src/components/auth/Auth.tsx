import {
  Box,
  Button,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Hero } from "../Hero";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";

export const Auth = () => {
  const [data, setData] = useState<string>("");
  const toast = useToast();
  const router = useRouter();

  async function handleLogin() {
    if (!data) {
      toast({
        title: "Deve inserir uma key!",
        isClosable: true,
        status: "error",
        duration: 2000,
      });
      return;
    }
    try {
      const response = await api.get("/timezone", {
        headers: {
          "X-RapidAPI-Key": data,
        },
      });

      toast({
        title: "Login realizado com sucesso!",
        status: "success",
        isClosable: true,
        duration: 2000,
      });

      router.push({
        pathname: "/home",
        query: { api_key: data },
      });

      console.log(response.data);
    } catch (error) {
      toast({
        title: "Insira uma key válida!",
        isClosable: true,
        status: "error",
        duration: 2000,
      });
    }
  }

  return (
    <>
      <Hero />
      <Box
        borderRadius={20}
        justifyContent="center"
        w={"xl"}
        boxShadow={"2xl"}
        margin={5}
        p={6}
        bg={"blackAlpha.400"}
      >
        <Stack spacing={3}>
          <FormLabel color="orange">API KEY: </FormLabel>
          <Input
            isRequired
            borderRadius={10}
            bg={"gray.200"}
            type="text"
            variant="flushed"
            placeholder="API_KEY"
            textAlign="center"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </Stack>
        <Button
          rightIcon={<FaAngleRight />}
          colorScheme="orange"
          variant="solid"
          mt={12}
          w="full"
          onClick={handleLogin}
        >
          ENTRAR
        </Button>
        <Box display="inline-flex" alignItems="center" mt="10rem">
          <Text align={"end"} color="orange">
            Ainda não tem conta ?
            <Link
              m={2}
              h="8"
              size="xs"
              href="https://www.api-football.com/pricing"
              isExternal
              color="orange.100"
              variant="solid"
            >
              Cadastre-se
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};
