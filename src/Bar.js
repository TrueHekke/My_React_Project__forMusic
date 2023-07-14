import BarTrack from "./barTrack";
import BarVolume from './barVolume';
import prev from './img/icon/prev.svg'
import play from './img/icon/play.svg'
import next from './img/icon/next.svg'
import repeat from './img/icon/repeat.svg'
import shuffle from './img/icon/shuffle.svg'
import * as BS from "./BarStyles";

function Bar(){
    return(
            <BS.Bar>
                <BS.BarProgress></BS.BarProgress>
                    <BS.BarPlayerBlock>
                        <BS.BarPlayer>
                            <BS.PlayerControls>
                                <BS.BtnPrev>
                                    <BS.PrevImg src={prev} alt = 'prev'/>
                                </BS.BtnPrev>
                                <BS.BtnPlay>
                                    <BS.PlayImg src={play} alt = 'play'/>
                                </BS.BtnPlay>
                                <BS.BtnNext>
                                    <BS.NextImg src={next} alt = 'next'/>
                                </BS.BtnNext>
                                <BS.BtnRepeat>
                                    <BS.RepeatImg src={repeat} alt = 'repeat'/>
                                </BS.BtnRepeat>
                                <BS.BtnShuffle>
                                    <BS.ShuffleImg src={shuffle} alt = 'shuffle'/>
                                </BS.BtnShuffle>
                                <BarTrack/>
                                
                                <BarVolume/>
                        </BS.PlayerControls>
                    </BS.BarPlayer>
                    <footer className="footer"></footer>
                </BS.BarPlayerBlock>
            </BS.Bar>
    )
}

export default Bar;