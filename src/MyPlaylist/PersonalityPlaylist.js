
import PersonalityItem from './PersonalityItem'
import watch from '../img/icon/watch.svg'
import * as PS from '../App/Playlist/PlaylistStyles'
import { useThemeContext } from '../App/themes'

function Playlist() {
  const {theme} = useThemeContext();
  let favoriteTracks = '';
return (
    <PS.Content>
      <PS.H2 style={{color:theme.color}}>Мои Треки</PS.H2>
      <PS.ContentTitle>
        <PS.TitleItem1>Трек</PS.TitleItem1>
        <PS.TitleItem2>ИСПОЛНИТЕЛЬ</PS.TitleItem2>
        <PS.TitleItem3>АЛЬБОМ</PS.TitleItem3>
        <PS.TitleItem4>
          <PS.TitleItemImg src={watch} alt="time" />
        </PS.TitleItem4>
      </PS.ContentTitle>
      <PS.TitlePlaylist>
        <PS.Playlist className="playlist">
        {favoriteTracks && favoriteTracks.map((track, index) => (
      <PersonalityItem
        key={index}
        name={track.name}
        author={track.author}
        album={track.album}
        time={track.duration_in_seconds}
      />
    ))}
        </PS.Playlist>
      </PS.TitlePlaylist>
    </PS.Content>
  )
}

export default Playlist
