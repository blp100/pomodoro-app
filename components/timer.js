import { Box, Center, Circle, CircularProgress, Text } from "@chakra-ui/react";
import { useContext } from "react";
import ThemeContext from "./color-theme";

const Timer = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <Circle
      mx="auto"
      w={["300px", "410px"]}
      h={["300px", "410px"]}
      mt={["48px", "109px", "45px"]}
      bgGradient="linear-gradient(315deg, #2E325A 0%, #0E112A 100%)"
      boxShadow="50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A"
    >
      <Circle
        w={["267.805px", "366px"]}
        h={["267.805px", "366px"]}
        bg="darkBlueBlack"
      >
        <CircularProgress
          size={["283.475px", "373px"]}
          value={93}
          color={themeCtx.themeColor}
          thickness={3.5}
          trackColor="darkBlueBlack"
          capIsRound
        />
        <Box pos="absolute">
          <Text
            textStyle="h1"
            color="lavenderMist"
            position="relative"
            textAlign="Center"
            fontFamily="Kumbh_Sans"
          >
            17:59
          </Text>
          <Text
            textStyle="h3"
            color="lavenderMist"
            position="relative"
            textAlign="Center"
            fontFamily="Kumbh_Sans"
            ml={0.5}
          >
            START
          </Text>
        </Box>
      </Circle>
    </Circle>
  );
};

export default Timer;
