import Bar from '../App/Bar/Bar'
import RemoveSkeletonClasses from '../NonSkeleton'
import * as S from './ListStyles'
import { GlobalStyle } from '../App/AppMain'
import Navigation from '../App/Navigation/Navigation'
import Search from '../App/Main/Search'
import { useParams } from "react-router-dom";
import { ListPlaylist } from "./ListPlaylists";
import { useState } from 'react'
import {themes, ThemeContext, useThemeContext } from '../App/themes'

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);
  const {theme} = useThemeContext();
  

  const toggleTheme = () => {
    if (currentTheme === themes.light) {
      setCurrentTheme(themes.dark);
    } else {
      setCurrentTheme(themes.light);
    }
  };
  const params = useParams();

  const nameList = ListPlaylist.find((nameList) => nameList.id === Number(params.id));
  return (
    <ThemeContext.Provider value={{theme: currentTheme,toggleTheme }}>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <Navigation />
            <S.Centerblock>
              <Search />
              <S.H2 style={{color:theme.color}}>{nameList.name}</S.H2>
            </S.Centerblock>
            <S.Sidebar>
              <S.Personal>
                <S.PersonalName>Hekke</S.PersonalName>
                <S.PesonalAvatar></S.PesonalAvatar>
              </S.Personal>
            </S.Sidebar>
          </S.Main>
          <Bar />
          <RemoveSkeletonClasses />
        </S.Container>
      </S.Wrapper>
    </ThemeContext.Provider>
  )
}

export default App
