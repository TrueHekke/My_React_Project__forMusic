import PropTypes from 'prop-types'
import like from './like.svg'
import note from './note.svg'
import * as PS from './PlaylistStyles'
import { useThemeContext } from '../themes'
import { useAddToFavoritesMutation } from '../../store/services/music';

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
  return formattedTime;
}

function PlaylistItem({ name, author, album, time, trackId }) {
  const {theme} = useThemeContext();
  const formattedTime = formatTime(time);

  const [addToFavorites ] = useAddToFavoritesMutation();

  const handleAddToFavorites = () => {
    addToFavorites(trackId);
  };

  return (
    <PS.PlaylistItem >
      <PS.Track>
        <PS.TrackTitle>
          <PS.TrackTitleImg className="skeleton">
            <PS.TrackImg src={note} alt="music" />
          </PS.TrackTitleImg>
          <PS.TrackTitleText className="skeleton">
            <PS.TrackLink style={{color:theme.color}}>
              {name} <PS.TrackSpan></PS.TrackSpan>
            </PS.TrackLink>
          </PS.TrackTitleText>
        </PS.TrackTitle>
        <PS.TrackAuthor className="skeleton">
          <PS.AuthorLink  style={{color:theme.color}}>{author}</PS.AuthorLink>
        </PS.TrackAuthor>
        <PS.TrackAlbum className="skeleton">
          <PS.AlbumLink  style={{color:theme.color}}>{album}</PS.AlbumLink>
        </PS.TrackAlbum>
        <PS.TrackTime className="skeleton">
          <PS.TimeImg src={like} alt="time" onClick={handleAddToFavorites} />
          <PS.TimeText style={{color:theme.color}}>{formattedTime}</PS.TimeText>
        </PS.TrackTime>
      </PS.Track>
    </PS.PlaylistItem>
  )
}

PlaylistItem.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  trackId: PropTypes.number.isRequired,
}

export default PlaylistItem
