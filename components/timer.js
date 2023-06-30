import { Box, Circle, CircularProgress, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "./color-theme";

const Timer = () => {
  const themeCtx = useContext(ThemeContext);
  const [countDownTime, setCountDownTime] = useState(
    themeCtx.pomodoroDuration * 60 * 1000
  );
  const [intervalId, setIntervalId] = useState(0);
  const [countingStatus, setCountingStatus] = useState("pause");

  const [timerDuration, setTimerDuration] = useState(["25", "5", "15"]);

  const startCountDown = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    if (countingStatus === "end") {
      setCountDownTime(() => 0.1 * 60 * 1000);
      setCountingStatus(() => "pause");
      return;
    }

    const newIntervalId = setInterval(() => {
      setCountDownTime((countDownTime) => countDownTime - 1000);
    }, 1000);
    setIntervalId(newIntervalId);
    setCountingStatus("counting");
  };

  useEffect(() => {
    if (countDownTime <= 0) {
      clearInterval(intervalId);
      setIntervalId(0);
      setCountingStatus("end");
    }
  }, [countDownTime, themeCtx.pomodoroDuration]);

  useEffect(() => {
    if (timerDuration[0] != themeCtx.pomodoroDuration) {
      // console.log("true");
      // console.log("Timer", timerDuration[0]);
      // console.log("context", themeCtx.pomodoroDuration);
    }
  }, [timerDuration, themeCtx.pomodoroDuration]);

  const btnName =
    countingStatus === "pause"
      ? "START"
      : countingStatus === "counting"
      ? "PAUSE"
      : "RESTART";

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
          value={(countDownTime / 60 / 1000 / 2) * 100}
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
            fontFamily={themeCtx.themeFont}
          >
            {Math.floor(countDownTime / 1000 / 60 / 10).toString() +
              Math.floor((countDownTime / 1000 / 60) % 10).toString() +
              ":" +
              Math.floor(((countDownTime / 1000) % 60) / 10).toString() +
              Math.floor(((countDownTime / 1000) % 60) % 10).toString()}
          </Text>
          <Text
            textStyle="h3"
            color="lavenderMist"
            position="relative"
            textAlign="Center"
            fontFamily={themeCtx.themeFont}
            ml={0.5}
            onClick={startCountDown}
          >
            {btnName}
          </Text>
        </Box>
      </Circle>
    </Circle>
  );
};

export default Timer;
