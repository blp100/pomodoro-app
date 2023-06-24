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

const fonts = {
  Kumbh_Sans: kumbhFont.style.fontFamily,
  Roboto_Slab: robotoFont.style.fontFamily,
  Space_Mono: spaceFont.style.fontFamily,
};

export default fonts;
