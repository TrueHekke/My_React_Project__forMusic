import PropTypes from 'prop-types'
import dislike from '../img/icon/dislike.svg'
import note from '../img/icon/note.svg'
import * as PS from '../App/Playlist/PlaylistStyles'
import { useThemeContext } from '../App/themes'


function PersonalityItem({ name, author, album, time }) {
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
          <PS.TimeImg src={dislike} alt="time" />
          <PS.TimeText style={{color:theme.color}}>{time}</PS.TimeText>
        </PS.TrackTime>
      </PS.Track>
    </PS.PlaylistItem>
  )
}

PersonalityItem.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
}

export default PersonalityItem
