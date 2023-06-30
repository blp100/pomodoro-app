import { createContext, useEffect, useState } from "react";
import { themeColorData, themeFontData, timerData } from "../lib/constants";

const ThemeContext = createContext({
  themeColor: themeColorData.red,
  themeFont: themeFontData.Kumbh_Sans,
  pomodoroDuration: timerData.pomodoroDuration,
  shortBreakDuration: timerData.shortBreakDuration,
  longBreakDuration: timerData.longBreakDuration,
  changeThemeHandler: (color, font) => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState(themeColorData.red);
  const [themeFont, setThemeFont] = useState(themeFontData.Kumbh_Sans);
  // do the pomodoro, short break, long break, State
  const [pomodoroDuration, setPomodoroDuration] = useState(
    timerData.pomodoroDuration
  );
  const [shortBreakDuration, setShortBreakDuration] = useState(
    timerData.shortBreakDuration
  );
  const [longBreakDuration, setLongBreakDuration] = useState(
    timerData.longBreakDuration
  );

  useEffect(() => initialThemeHandler());
  
  const isLocalStorageEmpty = () => {
    return (
      !localStorage.getItem("themeColor") ||
      !localStorage.getItem("themeFont") ||
      !localStorage.getItem("pomodoroDuration") ||
      !localStorage.getItem("shortBreakDuration") ||
      !localStorage.getItem("longBreakDuration")
    );
  };

  const initialThemeHandler = () => {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("themeColor", themeColorData.red);
      localStorage.setItem("themeFont", themeFontData.Kumbh_Sans);
      localStorage.setItem("pomodoroDuration", timerData.pomodoroDuration);
      localStorage.setItem("shortBreakDuration", timerData.shortBreakDuration);
      localStorage.setItem("longBreakDuration", timerData.longBreakDuration);
      setThemeColor(themeColorData.red);
      setThemeFont(themeFont.Kumbh_Sans);
      setPomodoroDuration(timerData.pomodoroDuration);
      setShortBreakDuration(timerData.shortBreakDuration);
      setLongBreakDuration(timerData.longBreakDuration);
    } else {
      const themeColor = localStorage.getItem("themeColor");
      const themeFont = localStorage.getItem("themeFont");
      const pomodoroDuration = localStorage.getItem("pomodoroDuration");
      const shortBreakDuration = localStorage.getItem("shortBreakDuration");
      const longBreakDuration = localStorage.getItem("longBreakDuration");
      setThemeColor(() => {
        return themeColor;
      });
      setThemeFont(() => {
        return themeFont;
      });
      setPomodoroDuration(() => {
        return pomodoroDuration;
      });
      setShortBreakDuration(() => {
        return shortBreakDuration;
      });
      setLongBreakDuration(() => {
        return longBreakDuration;
      });
    }
  };

  const changeThemeHandler = (
    color,
    font,
    pomoDuration,
    shortDuration,
    longDuration
  ) => {
    const themeColor = localStorage.getItem("themeColor");
    const themeFont = localStorage.getItem("themeFont");
    const pomodoroDuration = localStorage.getItem("pomodoroDuration");
    const shortBreakDuration = localStorage.getItem("shortBreakDuration");
    const longBreakDuration = localStorage.getItem("longBreakDuration");
    setThemeColor(color);
    setThemeFont(font);
    setPomodoroDuration(pomoDuration);
    setShortBreakDuration(shortDuration);
    setLongBreakDuration(longDuration);
    setValueToLocalStorage(
      color,
      font,
      pomoDuration,
      shortDuration,
      longDuration
    );
  };

  const setValueToLocalStorage = (
    color,
    font,
    pomoDuration,
    shortDuration,
    longDuration
  ) => {
    localStorage.setItem("themeColor", `${color}`);
    localStorage.setItem("themeFont", `${font}`);
    localStorage.setItem("pomodoroDuration", `${pomoDuration}`);
    localStorage.setItem("shortBreakDuration", `${shortDuration}`);
    localStorage.setItem("longBreakDuration", `${longDuration}`);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeColor,
        themeFont,
        pomodoroDuration,
        shortBreakDuration,
        longBreakDuration,
        changeThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
