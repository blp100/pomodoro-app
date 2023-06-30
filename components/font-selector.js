import { Button, HStack, Text } from "@chakra-ui/react";
import { themeFontData } from "../lib/constants";

const FontSelector = (props) => {
  const { setFontHandler, font, ...otherProps } = props;
  return (
    <HStack justifyContent="space-between" my={4}>
      <Text textStyle="h4" as="h4">
        FONT
      </Text>
      <HStack width="200px" justifyContent="space-evenly">
        <Button
          width={12}
          height={12}
          borderRadius="50%"
          fontFamily="Kumbh_Sans"
          backgroundColor={
            font === themeFontData.Kumbh_Sans ? "#D7E0FF60" : null
          }
          onClick={(e) => setFontHandler(themeFontData.Kumbh_Sans)}
        >
          Aa
        </Button>
        <Button
          width={12}
          height={12}
          borderRadius="50%"
          fontFamily="Roboto_Slab"
          backgroundColor={
            font === themeFontData.Roboto_Slab ? "#D7E0FF60" : null
          }
          onClick={(e) => setFontHandler(themeFontData.Roboto_Slab)}
        >
          Aa
        </Button>
        <Button
          width={12}
          height={12}
          borderRadius="50%"
          fontFamily="Space_Mono"
          backgroundColor={
            font === themeFontData.Space_Mono ? "#D7E0FF60" : null
          }
          onClick={(e) => setFontHandler(themeFontData.Space_Mono)}
        >
          Aa
        </Button>
      </HStack>
    </HStack>
  );
};

export default FontSelector;
