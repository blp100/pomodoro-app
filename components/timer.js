import { Box, Circle, CircularProgress, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "./color-theme";
import { initialTabs as tabs } from "../lib/constants";

const Timer = (props) => {
  const { timerData, statusHandler, ...otherProps } = props;

  const themeCtx = useContext(ThemeContext);
  const [countDownTime, setCountDownTime] = useState(
    themeCtx.pomodoroDuration * 60 * 1000
  );
  const [intervalId, setIntervalId] = useState(0);
  const [countingStatus, setCountingStatus] = useState("pause");

  //timer
  const [tempPomodoro, setTempPomodoro] = useState(25);
  const [tempShort, setTempShort] = useState(5);
  const [tempLong, setTempLong] = useState(15);
  const [timerLabel, setTimerLabel] = useState(25);
  // step even it mean pomodoro
  // step 1, 3, 5 it mean short break, 7 is long break
  const [timerStep, setTimerStep] = useState(0);

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
    setCountDownTime(() => 0.1 * 60 * 1000);
    // console.log(timerData);
    startNewTimer();
  };

  const startNewTimer = () => {
    const newIntervalId = setInterval(() => {
      setCountDownTime((countDownTime) => countDownTime - 1000);
    }, 1000);
    setIntervalId(newIntervalId);
    setCountingStatus("counting");
  };

  useEffect(() => {
    if (tempPomodoro != Number(themeCtx.pomodoroDuration)) {
      setTempPomodoro(() => Number(themeCtx.pomodoroDuration));
    }
  }, [tempPomodoro, themeCtx.pomodoroDuration]);
  useEffect(() => {
    if (tempShort != Number(themeCtx.shortBreakDuration)) {
      setTempShort(() => Number(themeCtx.shortBreakDuration));
    }
  }, [tempShort, themeCtx.shortBreakDuration]);
  useEffect(() => {
    if (tempLong != Number(themeCtx.longBreakDuration)) {
      setTempLong(() => Number(themeCtx.longBreakDuration));
    }
  }, [tempLong, themeCtx.longBreakDuration]);

  useEffect(() => {
    if (countDownTime <= 0) {
      clearInterval(intervalId);
      setIntervalId(0);
      if ((timerStep % 2) == 0) {
        setTimerStep((timerStep)=>timerStep+1);
        setCountDownTime(()=>tempShort * 60 * 1000);
        statusHandler(tabs[1]);
        startNewTimer();
      }
      // setCountingStatus("end");
    }
  }, [countDownTime]);

  useEffect(() => {
      if (timerData == tabs[0]) {
        setTimerLabel(() => tempPomodoro);
        setCountDownTime(() => tempPomodoro * 60 * 1000);
      } else if (timerData == tabs[1]) {
        setTimerLabel(() => tempShort);
        setCountDownTime(() => tempShort * 60 * 1000);
      } else if (timerData == tabs[2]) {
        setTimerLabel(() => tempLong);
        setCountDownTime(() => tempLong * 60 * 1000);
      }
  }, [timerData]);

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
          value={(countDownTime / 60 / 1000 / timerLabel) * 100}
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
