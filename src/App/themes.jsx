import  React,{ useContext } from "react";
import ThemeBtn from "../img/icon/ThemeBtn.svg";
import ThemeBtnLight from "../img/icon/ThemeBtnLight.svg"

export const themes = {
    dark:{
        background:"#181818",
        color:"#FFFFFF",
        buttonImage: ThemeBtn,
    },
    light:{
        background:"#FFFFFF",
        color:"#181818",
        buttonImage: ThemeBtnLight,
    }
};

export const ThemeContext = React.createContext({
    theme:themes.light,
    toggleTheme: () => {}
});

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);
    
    if (!theme) return theme.light;

    return theme;
}