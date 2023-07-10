import PropTypes from 'prop-types';
import like from './img/icon/like.svg'
import note from './img/icon/note.svg'

function PlaylistItem({ name, author, album, time}) {
    return <div className="playlist__item">
    <div className="playlist__track track">
        <div className="track__title">
            <div className="track__title-image skeleton">
                <img className="track__title-svg" src={note} alt = 'music'/>
            </div>
            <div className="track__title-text skeleton">
                <a className="track__title-link" href="http://">{ name } <span className="track__title-span"></span></a>
            </div>
        </div>
        <div className="track__author skeleton">
            <a className="track__author-link" href="http://">{ author }</a>
        </div>
        <div className="track__album skeleton">
            <a className="track__album-link" href="http://">{ album }</a>
        </div>
        <div className="track__time skeleton">
            <img className="track__time-svg" src={like} alt = 'time'/>
            <span className="track__time-text">{ time }</span>
        </div>
    </div>
</div>
}

PlaylistItem.propTypes = {
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  };

export default PlaylistItem;