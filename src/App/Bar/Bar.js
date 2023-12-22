/* eslint-disable no-undef */
import BarTrack from './barTrack'
import BarVolume from './barVolume'
import prev from '../../img/icon/prev.svg'
import play from '../../img/icon/play.svg'
import next from '../../img/icon/next.svg'
import repeat from '../../img/icon/repeat.svg'
import shuffle from '../../img/icon/shuffle.svg'
import pause from '../../img/icon/pause.svg'
import * as BS from './BarStyles'
import { useRef, useState, useEffect} from 'react'
import { useThemeContext } from '../themes'


function Bar() {
  const {theme} = useThemeContext();

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);


  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = () => {
    const seekTime = parseFloat(this.target.value);
    setCurrentTime(seekTime);
    audioRef.current.currentTime = seekTime;
  };

  useEffect(() => {
    const durationLoaded = () => {
      setDuration(audioRef.current.duration);
    };

    audioRef.current.addEventListener('loadedmetadata', durationLoaded);
  }, []);



  const calculateProgressBarWidth = () => {
    const progressBarWidth = (currentTime / duration) * 100;
    return progressBarWidth.toFixed(2);
  };

  const progressBarStyle = {
    width: `${calculateProgressBarWidth()}%`,
    backgroundColor: '#580EA2',
    height: '5px',
  };
  
  return (
    <BS.Bar style={{backgroundColor:theme.background}}>
      <BS.BarProgress>
        <BS.BarProgressActive style={progressBarStyle}/>
        <BS.BarRange 
          type="range"
          min={0}
          max={duration}
          step={0.01}
          value={currentTime}
          onChange={handleSeek}
          name = "trackRange"
        />
      </BS.BarProgress>
      <BS.BarPlayerBlock>
      <audio ref={audioRef} src="./basa.mp3" onTimeUpdate={handleTimeUpdate}/>
        <BS.BarPlayer>
          <BS.PlayerControls> 
            <BS.BtnPrev>
              <BS.PrevImg src={prev} alt="prev" />
            </BS.BtnPrev>
            {isPlaying ? (
            <BS.BtnPlay>
              <BS.PlayImg onClick={handlePause} src={pause} alt="pause" />
            </BS.BtnPlay>
            ) : (
            <BS.BtnPlay>
              <BS.PlayImg onClick={handlePlay} src={play} alt="play" />
            </BS.BtnPlay>
            )}
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
