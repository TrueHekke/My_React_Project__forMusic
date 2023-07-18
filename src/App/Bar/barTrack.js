import dislike from '../../img/icon/dislike.svg'
import like from '../../img/icon/like.svg'
import note from '../../img/icon/note.svg'
import * as BS from './BarStyles'
import { useThemeContext } from '../themes'

function BarTrack() {
  const {theme} = useThemeContext();

  return (
    <BS.TrackPlay>
      <BS.TrackContain>
        <BS.TrackPlayImg className="skeleton">
          <BS.TrackImg src={note} alt="music" />
        </BS.TrackPlayImg>
        <BS.TrackPlayAuthor className="skeleton">
          <BS.AuthorLink style={{color:theme.color}} href="http://">Never...</BS.AuthorLink>
        </BS.TrackPlayAuthor>
        <BS.TrackPlayAlbum className="skeleton">
          <BS.AlbumLink style={{color:theme.color}} href="http://">Rick Astley</BS.AlbumLink>
        </BS.TrackPlayAlbum>
      </BS.TrackContain>
      <BS.TrackLikeAndDis>
        <BS.TrackLike>
          <BS.LikeImg src={like} alt="like" />
        </BS.TrackLike>
        <BS.TrackDis>
          <BS.DisImg src={dislike} alt="dislike" />
        </BS.TrackDis>
      </BS.TrackLikeAndDis>
    </BS.TrackPlay>
  )
}

export default BarTrack
