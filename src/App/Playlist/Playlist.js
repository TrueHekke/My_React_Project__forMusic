import PlaylistItem from './playlistItem'
import watch from './watch.svg'
import * as PS from './PlaylistStyles'

const playlist = [
  { name: 'Guilt', author: 'Nero', album: 'Welcome Reality', time: '4:44' },
  {
    name: 'Elektro',
    author: 'Dynoro, Outwork, Mr. Gee',
    album: 'Elektro',
    time: '2:22',
  },
  { name: 'I’m Fire', author: 'Ali Bakgor', album: 'I’m Fire', time: '2:22' },
  {
    name: 'Non Stop',
    author: 'Стоункат, Psychopath',
    album: 'Non Stop',
    time: '4:12',
  },
  {
    name: 'Run Run',
    author: 'Jaded, Will Clarke, AR/CO',
    album: 'Run Run',
    time: '2:54',
  },
  {
    name: 'Eyes on Fire',
    author: 'Blue Foundation, Zeds Dead',
    album: 'Eyes on Fire',
    time: '5:20',
  },
  {
    name: 'Mucho Bien',
    author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
    album: 'Mucho Bien',
    time: '3:41',
  },
  {
    name: 'Knives n Cherries',
    author: 'minthaze',
    album: 'Captivating',
    time: '1:48',
  },
  {
    name: 'How Deep Is Your Love',
    author: 'Calvin Harris, Disciples',
    album: 'How Deep Is Your Love',
    time: '3:32',
  },
  {
    name: 'Morena',
    author: 'Tom Boxer',
    album: 'Soundz Made in Romania',
    time: '3:36',
  }
]

function Playlist() {
  return (
    <PS.Content>
      <PS.ContentTitle>
        <PS.TitleItem1>Трек</PS.TitleItem1>
        <PS.TitleItem2>ИСПОЛНИТЕЛЬ</PS.TitleItem2>
        <PS.TitleItem3>АЛЬБОМ</PS.TitleItem3>
        <PS.TitleItem4>
          <PS.TitleItemImg src={watch} alt="time" />
        </PS.TitleItem4>
      </PS.ContentTitle>
      <PS.TitlePlaylist>
        <div className="playlist">
          {playlist.map((track, index) => (
            <PlaylistItem
              key={index}
              name={track.name}
              author={track.author}
              album={track.album}
              time={track.time}
            />
          ))}
        </div>
      </PS.TitlePlaylist>
    </PS.Content>
  )
}

export default Playlist
