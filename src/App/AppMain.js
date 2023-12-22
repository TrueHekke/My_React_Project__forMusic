import MainBlock from './Main/mainBlock'
import './fonts/stylesheet.css'
import Bar from './Bar/Bar'
import RemoveSkeletonClasses from './Skeleton'
import { createGlobalStyle } from 'styled-components'
import * as AS from './AppStyles'
import { useState } from 'react'
import {themes, ThemeContext} from './themes'

export const GlobalStyle = createGlobalStyle`
body{
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
}

@font-face {
  font-family: 'StratosSkyeng';
  src: local("StratosSkyeng"), local("StratosSkyeng"), format("woff2"), format("woff"), format("truetype");
  font-weight: 400;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

.skeleton{
  position: relative;
  cursor: default;
}

.skeleton::after{
  background-image: linear-gradient(
    90deg,
    #6d6d6d 0%, #6d6d6d 40%,
    #ddd 0%, #ddd 55%,
    #6d6d6d 65%, #6d6d6d 100%
  );
  background-size: 400%;
  animation: skeleton 1500ms infinite;
  content: '';
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
}

@keyframes skeleton{
  from {background-position:100% 100%;}
  to {background-position: 0 0;}
}

.filter__button.active {
  border-color: #AD61FF;
  color: #AD61FF;
  cursor: pointer;
}

.link {
  color: #FFFFFF;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.blockLink{
  width: 100%;
  height: 100%;
}
`

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (currentTheme === themes.light) {
      setCurrentTheme(themes.dark);
    } else {
      setCurrentTheme(themes.light);
    }
  };
  return (
    <ThemeContext.Provider value={{theme: currentTheme,toggleTheme }}>
      <GlobalStyle />
      <AS.Wrapper>
        <AS.Container>
          <MainBlock />
          <Bar />
          <RemoveSkeletonClasses />
        </AS.Container>
      </AS.Wrapper>
    </ThemeContext.Provider>
  )
}

export default App
