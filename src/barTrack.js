import dislike from './img/icon/dislike.svg'
import like from './img/icon/like.svg'
import note from './img/icon/note.svg'

function BarTrack() {
    return(<div className="player__track-play track-play">
        <div className="track-play__contain">
            <div className="track-play__image skeleton">
                <img className="track-play__svg" src={note} alt='music' />
            </div>
            <div className="track-play__author skeleton">
                <a className="track-play__author-link" href="http://">Ты та...</a>
            </div>
            <div className="track-play__album skeleton">
                <a className="track-play__album-link" href="http://">Баста</a>
            </div>
        </div>
        <div className="track-play__like-dis">
            <div className="track-play__like _btn-icon">
                <img className="track-play__like-svg" src={like} alt='like' />
            </div>
            <div className="track-play__dislike _btn-icon">
                <img className="track-play__dislike-svg" src={dislike} alt='dislike' />
            </div>
        </div>
    </div>
    )
}

export default BarTrack;