import { createContext, useEffect, useState } from "react";
import { themeColorData, themeFontData } from "../lib/constants";

const ThemeContext = createContext({
  themeColor: themeColorData.red,
  themeFont: themeFontData.Kumbh_Sans,
  changeThemeHandler: (color, font) => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState(themeColorData.red);
  const [themeFont, setThemeFont] = useState(themeFontData.Kumbh_Sans);

  useEffect(() => initialThemeHandler());

  const isLocalStorageEmpty = () => {
    return !localStorage.getItem("themeColor") ||
    !localStorage.getItem("themeFont")
  };

  const initialThemeHandler = () => {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("themeColor", themeColorData.red);
      localStorage.setItem("themeFont", themeFontData.Kumbh_Sans);
      setThemeColor(themeColorData.red);
      setThemeFont(themeFont.Kumbh_Sans);
    } else {
      const themeColor = localStorage.getItem("themeColor");
      const themeFont = localStorage.getItem("themeFont");
      setThemeColor(() => {
        return themeColor;
      });
      setThemeFont(() => {
        return themeFont;
      });
    }
  };

  const changeThemeHandler = (color, font) => {
    const themeColor = localStorage.getItem("themeColor");
    const themeFont = localStorage.getItem("themeFont");
    setThemeColor(color);
    setThemeFont(font);
    setValueToLocalStorage(color, font);
  };

  const setValueToLocalStorage = (color, font) => {
    localStorage.setItem("themeColor", `${color}`);
    localStorage.setItem("themeFont", `${font}`);
  };

  return (
    <ThemeContext.Provider value={{ themeColor, themeFont, changeThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
