import { useGetAllTracksQuery } from '../../store/services/music';
import PlaylistItem from './playlistItem'
import watch from './watch.svg'
import * as PS from './PlaylistStyles'


function Playlist() {
  const { data, error, isLoading } = useGetAllTracksQuery();

  const isEmptyList = !isLoading && !data?.length;

   if (isLoading) {
     return <p>Loading...</p>;
   }

   if (error) {
     return <p>{error.message}</p>;
   }

   if (isEmptyList) {
     return <p>No music today :C</p>;
   }
  
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
        <PS.PlaylistContainer>
          <PS.Playlist className="playlist" >
            {data.map((track, index) => (
              <PlaylistItem
                key={index}
                name={track.name}
                author={track.author}
                album={track.album}
                time={track.duration_in_seconds}
                trackId={index}
              />
            ))}
          </PS.Playlist>
        </PS.PlaylistContainer>
      </PS.TitlePlaylist>
    </PS.Content>
  )
}

export default Playlist
