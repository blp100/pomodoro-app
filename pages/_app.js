import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import { ThemeContextProvider } from "../components/color-theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeContextProvider>
  );
};

export default MyApp;
