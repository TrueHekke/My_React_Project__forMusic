import MyAvatar from './MyAvatar.svg'
import * as SS from './SidebarStyles'
import { NavLink } from "react-router-dom";
import { ListPlaylist } from '../../TrackList/ListPlaylists';

const Sidebar = () => {
  const avatar = {
    backgroundImage: { MyAvatar },
  }
  return (
    <SS.Sidebar>
      <SS.Personal>
        <SS.PersonalName>Hekke</SS.PersonalName>
        <SS.PesonalAvatar style={avatar}></SS.PesonalAvatar>
      </SS.Personal>
      <SS.Block>
        <SS.BlockList>
        {ListPlaylist.map((playlist) => (
          <SS.BlockItem key={playlist.id} className="skeleton">
            <NavLink className = "blockLink" to ={`/category/${playlist.id}`}>
              <SS.BlockImg src={playlist.img} alt="day's playlist" />
            </NavLink>
          </SS.BlockItem>
          ))}
        </SS.BlockList>
      </SS.Block>
    </SS.Sidebar>
  )
}

export default Sidebar
