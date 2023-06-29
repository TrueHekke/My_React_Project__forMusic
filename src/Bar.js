import BarTrack from "./barTrack";
import BarVolume from './barVolume';
import prev from './img/icon/prev.svg'
import play from './img/icon/play.svg'
import next from './img/icon/next.svg'
import repeat from './img/icon/repeat.svg'
import shuffle from './img/icon/shuffle.svg'

function Bar(){
    return(
        <div className="bar">
            <div className="bar__content">
                <div className="bar__player-progress"></div>
                    <div className="bar__player-block">
                        <div className="bar__player player">
                            <div className="player__controls">
                                <div className="player__btn-prev">
                                    <svg className="player__btn-prev-svg" alt="prev">
                                        <use xlinkHref={prev}></use>
                                    </svg>
                                </div>
                                <div className="player__btn-play _btn">
                                    <svg className="player__btn-play-svg" alt="play">
                                        <use xlinkHref={play}></use>
                                    </svg>
                                </div>
                                <div className="player__btn-next">
                                    <svg className="player__btn-next-svg" alt="next">
                                        <use xlinkHref={next}></use>
                                    </svg>
                                </div>
                                <div className="player__btn-repeat _btn-icon">
                                    <svg className="player__btn-repeat-svg" alt="repeat">
                                        <use xlinkHref={repeat}></use>
                                    </svg>
                                </div>
                                <div className="player__btn-shuffle _btn-icon">
                                    <svg className="player__btn-shuffle-svg" alt="shuffle">
                                        <use xlinkHref={shuffle}></use>
                                    </svg>
                                </div>
                                <BarTrack/>
                                <BarVolume/>
                        </div>
                    </div>
                    <footer className="footer"></footer>
                </div>
            </div>
        </div>
    )
}

export default Bar;