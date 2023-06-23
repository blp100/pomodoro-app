import { extendTheme } from "@chakra-ui/react";
import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";

const kumbhFont = Kumbh_Sans({
  weight: ["700"],
  subsets: ["latin"],
});
const robotoFont = Roboto_Slab({
  weight: ["700"],
  subsets: ["latin"],
});
const spaceFont = Space_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

const theme = extendTheme({
  fonts: {
    Kumbh_Sans: kumbhFont.style.fontFamily,
    Roboto_Slab: robotoFont.style.fontFamily,
    Space_Mono: spaceFont.style.fontFamily,
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["80px", "100px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: ["-4px", "-5px"],
    },
    h2: {
      fontSize: ["20px", "28px"],
      fontWeight: "bold",
    },
    h3: {
      fontSize: ["14px", "16px"],
      fontWeight: "bold",
      letterSpacing: ["13.125px", "15px"],
    },
    h4: {
      fontSize: ["11px", "13px"],
      fontWeight: "bold",
      letterSpacing: ["4.231px", "5px"],
    },
    body1: {
      fontSize: "14px",
      fontWeight: "bold",
    },
    body2: {
      fontSize: "12px",
      fontWeight: "bold",
    },
  },
});

export default theme;
