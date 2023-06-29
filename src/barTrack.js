import dislike from './img/icon/dislike.svg'
import like from './img/icon/like.svg'
import note from './img/icon/note.svg'

function BarTrack() {
    return(<div className="player__track-play track-play">
                <div className="track-play__contain">
                    <div className="track-play__image">
                        <svg className="track-play__svg" alt="music">
                            <use xlinkHref={note}></use>
                        </svg>
                    </div>
                    <div className="track-play__author">
                        <a className="track-play__author-link" href="http://">Ты та...</a>
                    </div>
                    <div className="track-play__album">
                        <a className="track-play__album-link" href="http://">Баста</a>
                    </div>
            </div>
            <div className="track-play__like-dis">
                <div className="track-play__like _btn-icon">
                    <svg className="track-play__like-svg" alt="like">
                        <use xlinkHref={like}></use>
                    </svg>
                </div>
                <div className="track-play__dislike _btn-icon">
                    <svg className="track-play__dislike-svg" alt="dislike">
                        <use xlinkHref={dislike}></use>
                    </svg>
                </div>
        </div>
    </div>)
}

export default BarTrack;