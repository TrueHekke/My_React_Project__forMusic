import PropTypes from 'prop-types'
import like from './like.svg'
import note from './note.svg'
import * as PS from './PlaylistStyles'
import { useThemeContext } from '../themes'

function PlaylistItem({ name, author, album, time }) {
  const {theme} = useThemeContext();

  return (
    <PS.PlaylistItem >
      <PS.Track>
        <PS.TrackTitle>
          <PS.TrackTitleImg className="skeleton">
            <PS.TrackImg src={note} alt="music" />
          </PS.TrackTitleImg>
          <PS.TrackTitleText className="skeleton">
            <PS.TrackLink href="http://" style={{color:theme.color}}>
              {name} <PS.TrackSpan></PS.TrackSpan>
            </PS.TrackLink>
          </PS.TrackTitleText>
        </PS.TrackTitle>
        <PS.TrackAuthor className="skeleton">
          <PS.AuthorLink href="http://" style={{color:theme.color}}>{author}</PS.AuthorLink>
        </PS.TrackAuthor>
        <PS.TrackAlbum className="skeleton">
          <PS.AlbumLink href="http://" style={{color:theme.color}}>{album}</PS.AlbumLink>
        </PS.TrackAlbum>
        <PS.TrackTime className="skeleton">
          <PS.TimeImg src={like} alt="time" />
          <PS.TimeText style={{color:theme.color}}>{time}</PS.TimeText>
        </PS.TrackTime>
      </PS.Track>
    </PS.PlaylistItem>
  )
}

PlaylistItem.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export default PlaylistItem
