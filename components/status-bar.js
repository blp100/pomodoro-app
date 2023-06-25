import { Text, Flex, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { initialTabs as tabs } from "../lib/constants";
import { useContext, useState } from "react";
import ThemeContext from "./color-theme";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const StatusBar = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const themeCtx = useContext(ThemeContext);

  return (
    <Flex
      w={["327px", "373px"]}
      h="63px"
      bgColor="darkBlueBlack"
      mx="auto"
      mt={["45px","55px"]}
      borderRadius="31.5px"
      alignItems="center"
      justifyContent="center"
      zIndex={1}
      textAlign="center"
    >
      {tabs.map((item) => (
        <Flex
          key={item.label}
          position="relative"
          w={["105.2px", "120px"]}
          h="48px"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          onClick={() => setSelectedTab(item)}
        >
          <Text
            as="sapn"
            pos="relative"
            zIndex={1}
            userSelect="none"
            textStyle={"body1"}
            fontSize={["12px, 14px"]}
            _hover={{
              opacity: 0.8,
            }}
            color={item === selectedTab ? "darkByzantineBlue" : "lavenderMist"}
            opacity={item === selectedTab ? "1" : "0.4"}
          >{`${item.label}`}</Text>
          {item === selectedTab ? (
            <ChakraBox
              transition={{
                layout: {
                  type: "spring",
                  duration: 0.3,
                  // ease: "easeOut",
                },
              }}
              pos="absolute"
              left={0}
              right={0}
              bottom={0}
              height="48px"
              bgColor={themeCtx.themeColor}
              borderRadius="26.5px"
              zIndex={0}
              layoutId="pill"
            />
          ) : null}
        </Flex>
      ))}
    </Flex>
  );
};

export default StatusBar;
