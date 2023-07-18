import Navigation from '../Navigation/Navigation'
import Sidebar from '../Sidebar/Sidebar'
import TrackSearch from './trackSearch'
import Search from './Search'
import Playlist from '../Playlist/Playlist'
import * as MS from './MainStyles'
import { useThemeContext } from '../themes'

function MainBlock() {
  const {theme} = useThemeContext();

  return (
    <MS.Main style={{ 
      backgroundColor:theme.background,
      color:theme.color
    }}>
      <Navigation/>
      <MS.Centerblock style={{color:theme.color}}>
        <Search/>
        <MS.H2 style={{color:theme.color}}>Треки</MS.H2>
        <TrackSearch />
        <Playlist/>
      </MS.Centerblock>
      <Sidebar />
    </MS.Main>
  )
}

export default MainBlock
