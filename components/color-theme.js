import { createContext, useEffect, useState } from "react";
import { themeColorData } from "../lib/constants";

const ThemeContext = createContext({
  themeColor: themeColorData.red,
  changeThemeHandler: (color) => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState(themeColorData.red);
  useEffect(() => initialThemeColorHandler());

  const isLocalStorageEmpty = () => {
    return !localStorage.getItem("themeColor");
  };

  const initialThemeColorHandler = () => {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("themeColor", themeColorData.red);
      setThemeColor(themeColorData.red);
    } else {
      const themeColor = localStorage.getItem("themeColor");
      setThemeColor(() => {
        return themeColor;
      });
    }
  };

  const changeThemeHandler = (color) => {
    const themeColor = localStorage.getItem("themeColor");
    setThemeColor(color);
    setValueToLocalStorage(color);
  };

  const setValueToLocalStorage = (data) => {
    localStorage.setItem("themeColor", `${data}`);
  };

  return (
    <ThemeContext.Provider value={{ themeColor, changeThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
