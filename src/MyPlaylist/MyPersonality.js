import RemoveSkeletonClasses from '../App/Skeleton'
import * as S from '../TrackList/ListStyles'
import { GlobalStyle } from '../App/AppMain'
import Navigation from '../App/Navigation/Navigation'
import Search from '../App/Main/Search'
import Bar from '../App/Bar/Bar'
import {themes, ThemeContext } from '../App/themes'
import { useState } from 'react'
import PersonalityPlaylist from './PersonalityPlaylist'

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
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <Navigation />
            <S.Centerblock>
              <Search />
              <PersonalityPlaylist/>
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
