import { Button, HStack, Text } from "@chakra-ui/react";
import { themeColorData } from "../lib/constants";

const ThemeSelector = (props) => {
const {setColorHandler, ...otherProps} = props;

  return (
    <HStack justifyContent="space-between" my={4}>
      <Text textStyle="h4" as="h4">
        COLOR
      </Text>
      <HStack width="200px" justifyContent="space-evenly">
        <Button
          bgColor="pastelRed"
          width={12}
          height={12}
          borderRadius="50%"
          opacity={0.8}
          transitionProperty="all"
          transitionDuration="0.3s"
          transitionTimingFunction="ease-out"
          _hover={{
            opacity: 1,
            saturate: 2,
          }}
          onClick={(e) => setColorHandler(themeColorData.red)}
        />
        <Button
          bgColor="electricBlue"
          width={12}
          height={12}
          borderRadius="50%"
          opacity={0.8}
          transitionProperty="all"
          transitionDuration="0.3s"
          transitionTimingFunction="ease-out"
          _hover={{
            opacity: 1,
            saturate: 2,
          }}
          onClick={(e) => setColorHandler(themeColorData.blue)}
        />
        <Button
          bgColor="heliotrope"
          width={12}
          height={12}
          borderRadius="50%"
          opacity={0.8}
          transitionProperty="all"
          transitionDuration="0.3s"
          transitionTimingFunction="ease-out"
          _hover={{
            opacity: 1,
            saturate: 2,
          }}
          onClick={(e) => setColorHandler(themeColorData.purple)}
        />
      </HStack>
    </HStack>
  );
};

export default ThemeSelector;
