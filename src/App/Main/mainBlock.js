import Navigation from '../Navigation/Navigation'
import Sidebar from '../Sidebar/Sidebar'
import TrackSearch from './trackSearch'
import Search from './Search'
import Playlist from '../Playlist/Playlist'
import * as MS from './MainStyles'

function MainBlock() {
  return (
    <MS.Main>
      <Navigation />
      <MS.Centerblock>
        <Search />
        <MS.H2>Треки</MS.H2>
        <TrackSearch />
        <Playlist />
      </MS.Centerblock>
      <Sidebar />
    </MS.Main>
  )
}

export default MainBlock
