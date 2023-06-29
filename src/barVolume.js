import volume from './img/icon/volume.svg'

function BarVolume() {
    return(<div className="bar__volume-block volume">
                <div className="volume__content">
                    <div className="volume__image">
                        <img className="volume__svg" src={volume} alt = 'volume'/>
                    </div>
                    <div className="volume__progress _btn">
                        <input className="volume__progress-line _btn" type="range" name="range"/>
                    </div>    
                </div>
            </div>
    )
}

export default BarVolume;