import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import Loading from "@/components/Loading";
import { useRouterTransition } from "../hooks/useRouterTransition";

function MyApp({ Component, pageProps }: AppProps) {
  const { loading } = useRouterTransition();

  return (
    <ChakraProvider theme={theme}>
      {loading ? <Loading /> : <Component {...pageProps} />}
    </ChakraProvider>
  );
}

export default MyApp;
