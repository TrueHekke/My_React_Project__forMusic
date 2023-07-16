import volume from '../../img/icon/volume.svg'
import * as BS from './BarStyles'

function BarVolume() {
  return (
    <BS.VolumeBlock>
      <BS.VolumeContent>
        <BS.VolumeImgBlock>
          <BS.VolumeImg src={volume} alt="volume" />
        </BS.VolumeImgBlock>
        <BS.VolumeProgress>
          <BS.ProgressLine type="range" name="range" />
        </BS.VolumeProgress>
      </BS.VolumeContent>
    </BS.VolumeBlock>
  )
}

export default BarVolume
