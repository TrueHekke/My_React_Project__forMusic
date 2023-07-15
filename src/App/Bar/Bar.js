import BarTrack from './barTrack'
import BarVolume from './barVolume'
import prev from './prev.svg'
import play from './play.svg'
import next from './next.svg'
import repeat from './repeat.svg'
import shuffle from './shuffle.svg'
import * as BS from './BarStyles'

function Bar() {
  return (
    <BS.Bar>
      <BS.BarProgress></BS.BarProgress>
      <BS.BarPlayerBlock>
        <BS.BarPlayer>
          <BS.PlayerControls>
            <BS.BtnPrev>
              <BS.PrevImg src={prev} alt="prev" />
            </BS.BtnPrev>
            <BS.BtnPlay>
              <BS.PlayImg src={play} alt="play" />
            </BS.BtnPlay>
            <BS.BtnNext>
              <BS.NextImg src={next} alt="next" />
            </BS.BtnNext>
            <BS.BtnRepeat>
              <BS.RepeatImg src={repeat} alt="repeat" />
            </BS.BtnRepeat>
            <BS.BtnShuffle>
              <BS.ShuffleImg src={shuffle} alt="shuffle" />
            </BS.BtnShuffle>
            <BarTrack />

            <BarVolume />
          </BS.PlayerControls>
        </BS.BarPlayer>
        <footer className="footer"></footer>
      </BS.BarPlayerBlock>
    </BS.Bar>
  )
}

export default Bar
