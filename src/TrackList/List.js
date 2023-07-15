import Bar from '../App/Bar/Bar'
import RemoveSkeletonClasses from '../NonSkeleton'
import * as S from './ListStyles'
import { GlobalStyle } from '../App/AppMain'
import Navigation from '../App/Navigation/Navigation'
import Search from '../App/Main/Search'
import Playlist from '../App/Playlist/Playlist'
import { useParams } from "react-router-dom";
import { ListPlaylist } from "./ListPlaylists";

const App = () => {
  const params = useParams();

  const nameList = ListPlaylist.find((nameList) => nameList.id === Number(params.id));
  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <Navigation />
            <S.Centerblock>
              <Search />
              <S.H2>{nameList.name}</S.H2>
              <Playlist />
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
    </>
  )
}

export default App
