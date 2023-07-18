import { themes, useThemeContext }  from "./themes";
import { useState } from "react";
import ThemeBtnDark from "../img/icon/ThemeBtn.svg";
import ThemeBtnLight from "../img/icon/ThemeBtnLight.svg"
import * as NS from './Navigation/NavigationStyles';


export const ThemeSwitcher = () =>{
const { theme, toggleTheme } = useThemeContext();
  const [isDarkTheme, setIsDarkTheme] = useState(theme === themes.dark);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    toggleTheme();
  };

  const themeBtnImage = isDarkTheme ? ThemeBtnLight : ThemeBtnDark;

  return (
    <NS.MenuImg
      onClick={handleThemeToggle}
      src={themeBtnImage}
      alt="theme button"
    />
  );
}