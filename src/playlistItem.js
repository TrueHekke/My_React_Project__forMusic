import PropTypes from 'prop-types';
import like from './img/icon/like.svg'
import note from './img/icon/note.svg'
import * as PS from "./PlaylistStyles";

function PlaylistItem({ name, author, album, time}) {
    return <PS.PlaylistItem>
    <PS.Track>
        <PS.TrackTitle>
            <PS.TrackTitleImg className="skeleton">
                <PS.TrackImg src={note} alt = 'music'/>
            </PS.TrackTitleImg>
            <PS.TrackTitleText className="skeleton">
                <PS.TrackLink href="http://">{ name } <PS.TrackSpan></PS.TrackSpan></PS.TrackLink>
            </PS.TrackTitleText >
        </PS.TrackTitle>
        <PS.TrackAuthor className="skeleton">
            <PS.AuthorLink href="http://">{ author }</PS.AuthorLink>
        </PS.TrackAuthor>
        <PS.TrackAlbum className="skeleton">
            <PS.AlbumLink href="http://">{ album }</PS.AlbumLink>
        </PS.TrackAlbum>
        <PS.TrackTime className="skeleton">
            <PS.TimeImg src={like} alt = 'time'/>
            <PS.TimeText>{ time }</PS.TimeText>
        </PS.TrackTime>
    </PS.Track>
</PS.PlaylistItem>
}

PlaylistItem.propTypes = {
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  };

export default PlaylistItem;