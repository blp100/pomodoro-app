import { Box, Circle, CircularProgress, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "./color-theme";
import { initialTabs as tabs } from "../lib/constants";

const Timer = (props) => {
  const {
    timerData,
    statusHandler,
    countingStatus,
    setCountingStatus,
    ...otherProps
  } = props;

  const themeCtx = useContext(ThemeContext);
  const [countDownTime, setCountDownTime] = useState(
    themeCtx.pomodoroDuration * 60 * 1000
  );
  const [intervalId, setIntervalId] = useState(0);

  //timer
  const [tempPomodoro, setTempPomodoro] = useState(
    Number(themeCtx.pomodoroDuration)
  );
  const [tempShort, setTempShort] = useState(
    Number(themeCtx.shortBreakDuration)
  );
  const [tempLong, setTempLong] = useState(Number(themeCtx.longBreakDuration));
  const [timerLabel, setTimerLabel] = useState(5);
  // step even it mean pomodoro
  // step 1, 3, 5 it mean short break, 7 is long break
  const [timerStep, setTimerStep] = useState(0);

  const startCountDown = () => {
    if (intervalId) {
      clearInterval(intervalId);

      setCountingStatus("pause");
      setIntervalId(0);
      return;
    }

    if (countingStatus === "end") {
      setCountDownTime(() => tempPomodoro * 60 * 1000);
      setCountingStatus(() => "pause");
      return;
    }

    // For TEST

    // setCountDownTime(() => tempPomodoro * 60 * 1000);
    // console.log(timerData);
    if (timerData === tabs[1] && timerStep % 2 === 0) {
      setTimerStep((timerStep) => timerStep + 1);
    } else if (timerData === tabs[2] && timerStep !== 7) {
      setTimerStep(() => 7);
    }
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
    if (
      tempPomodoro != Number(themeCtx.pomodoroDuration) &&
      countingStatus !== "counting"
    ) {
      setTempPomodoro(() => Number(themeCtx.pomodoroDuration));
    }
  }, [tempPomodoro, themeCtx.pomodoroDuration]);
  useEffect(() => {
    if (
      tempShort != Number(themeCtx.shortBreakDuration) &&
      countingStatus !== "counting"
    ) {
      setTempShort(() => Number(themeCtx.shortBreakDuration));
    }
  }, [tempShort, themeCtx.shortBreakDuration]);
  useEffect(() => {
    if (
      tempLong != Number(themeCtx.longBreakDuration) &&
      countingStatus !== "counting"
    ) {
      setTempLong(() => Number(themeCtx.longBreakDuration));
    }
  }, [tempLong, themeCtx.longBreakDuration]);

  useEffect(() => {
    if (countDownTime <= 0) {
      clearInterval(intervalId);
      setIntervalId(0);
      if (timerStep % 2 === 0) {
        if (timerStep !== 6) {
          setTimerStep((timerStep) => timerStep + 1);
          setCountDownTime(() => tempShort * 60 * 1000);
          statusHandler(tabs[1]);
          startNewTimer();
        } else if (timerStep === 6) {
          setTimerStep((timerStep) => timerStep + 1);
          setCountDownTime(() => tempLong * 60 * 1000);
          statusHandler(tabs[2]);
          startNewTimer();
        }
      } else {
        if (timerStep === 7) {
          console.log("test");
          setTimerStep(() => 0);
          // statusHandler(tabs[0]);
          setCountDownTime(() => 0);
          statusHandler(tabs[0]);
          setCountingStatus("end");
        } else {
          setTimerStep((timerStep) => timerStep + 1);
          setCountDownTime(() => tempPomodoro * 60 * 1000);
          statusHandler(tabs[0]);
          startNewTimer();
        }
      }
    }
  }, [countDownTime]);

  useEffect(() => {
    if (countingStatus != "end") {
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
    }
  }, [timerData]);

  useEffect(() => {
    if (timerLabel != tempPomodoro && countingStatus != "counting") {
      if (timerData === tabs[0]) {
        setTimerLabel(() => tempPomodoro);
        setCountDownTime(() => tempPomodoro * 60 * 1000);
      } else if (timerData === tabs[1]) {
        setTimerLabel(() => tempShort);
        setCountDownTime(() => tempShort * 60 * 1000);
      } else if (timerData === tabs[2]) {
        setTimerLabel(() => tempLong);
        setCountDownTime(() => tempLong * 60 * 1000);
      }
    }
  }, [timerLabel, tempPomodoro, countingStatus, timerData]);

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
