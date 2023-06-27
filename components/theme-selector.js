import { HStack, IconButton, Text } from "@chakra-ui/react";
import { themeColorData } from "../lib/constants";
import { IoIosCheckmark } from "react-icons/io";

const ThemeSelector = (props) => {
  const { setColorHandler, color, ...otherProps } = props;

  return (
    <HStack justifyContent="space-between" my={4}>
      <Text textStyle="h4" as="h4">
        COLOR
      </Text>
      <HStack width="200px" justifyContent="space-evenly">
        <IconButton
          bgColor="pastelRed"
          width={12}
          height={12}
          borderRadius="50%"
          opacity={0.8}
          transitionProperty="all"
          transitionDuration="0.3s"
          transitionTimingFunction="ease-out"
          color="darkByzantineBlue"
          _hover={{
            opacity: 1,
            saturate: 2,
          }}
          onClick={(e) => setColorHandler(themeColorData.red)}
          icon={
            color === themeColorData.red ? <IoIosCheckmark size={40} /> : null
          }
        />
        <IconButton
          bgColor="electricBlue"
          width={12}
          height={12}
          borderRadius="50%"
          opacity={0.8}
          transitionProperty="all"
          transitionDuration="0.3s"
          transitionTimingFunction="ease-out"
          color="darkByzantineBlue"
          _hover={{
            opacity: 1,
            saturate: 2,
          }}
          onClick={(e) => setColorHandler(themeColorData.blue)}
          icon={
            color === themeColorData.blue ? <IoIosCheckmark size={40} /> : null
          }
        />
        <IconButton
          bgColor="heliotrope"
          width={12}
          height={12}
          borderRadius="50%"
          opacity={0.8}
          transitionProperty="all"
          transitionDuration="0.3s"
          transitionTimingFunction="ease-out"
          color="darkByzantineBlue"
          _hover={{
            opacity: 1,
            saturate: 2,
          }}
          onClick={(e) => setColorHandler(themeColorData.purple)}
          icon={
            color === themeColorData.purple ? (
              <IoIosCheckmark size={40} />
            ) : null
          }
        />
      </HStack>
    </HStack>
  );
};

export default ThemeSelector;
