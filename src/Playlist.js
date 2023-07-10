import PlaylistItem from "./playlistItem";
import watch from "./img/icon/watch.svg";

const playlist = [
    { name: 'Guilt', author: 'Nero', album: 'Welcome Reality', time: '4:44' },
    { name: 'Elektro', author: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22' },
    { name: 'I’m Fire', author: 'Ali Bakgor', album: 'I’m Fire', time: '2:22' },
    { name: 'Non Stop', author: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12' },
    { name: 'Run Run', author: 'Jaded, Will Clarke, AR/CO', album: 'Run Run', time: '2:54' },
    { name: 'Eyes on Fire', author: 'Blue Foundation, Zeds Dead', album: 'Eyes on Fire', time: '5:20' },
    { name: 'Mucho Bien', author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile', album: 'Mucho Bien', time: '3:41' },
    { name: 'Knives n Cherries', author: 'minthaze', album: 'Captivating', time: '1:48' },
    { name: 'How Deep Is Your Love', author: 'Calvin Harris, Disciples', album: 'How Deep Is Your Love', time: '3:32' },
    { name: 'Morena', author: 'Tom Boxer', album: 'Soundz Made in Romania', time: '3:36' },
    { name: '', author: '', album: '', time: '' },
];

function Playlist() {
    return(<div className="centerblock__content">
        <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
                <img className="playlist-title__svg" src={watch} alt = 'time'/>
            </div>
        </div>
        <div className="content__playlist playlist">
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
        </div>
        </div>
    )
}

export default Playlist;