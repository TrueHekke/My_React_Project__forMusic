import BarTrack from "./barTrack";
import BarVolume from './barVolume';
import prev from './img/icon/prev.svg'
import play from './img/icon/play.svg'
import next from './img/icon/next.svg'
import repeat from './img/icon/repeat.svg'
import shuffle from './img/icon/shuffle.svg'

function Bar(){
    return(
            <div className="bar__content">
                <div className="bar__player-progress"></div>
                    <div className="bar__player-block">
                        <div className="bar__player player">
                            <div className="player__controls">
                                <div className="player__btn-prev">
                                    <img className="player__btn-prev-svg" src={prev} alt = 'prev'/>
                                </div>
                                <div className="player__btn-play _btn">
                                    <img className="player__btn-play-svg" src={play} alt = 'play'/>
                                </div>
                                <div className="player__btn-next">
                                    <img className="player__btn-next-svg" src={next} alt = 'next'/>
                                </div>
                                <div className="player__btn-repeat _btn-icon">
                                    <img className="player__btn-repeat-svg" src={repeat} alt = 'repeat'/>
                                </div>
                                <div className="player__btn-shuffle _btn-icon">
                                    <img className="player__btn-shuffle-svg" src={shuffle} alt = 'shuffle'/>
                                </div>
                                <BarTrack/>
                                
                                <BarVolume/>
                        </div>
                    </div>
                    <footer className="footer"></footer>
                </div>
            </div>
    )
}

export default Bar;