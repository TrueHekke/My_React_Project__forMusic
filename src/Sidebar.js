import playlist1 from "./img/playlist01.png"
import playlist2 from "./img/playlist02.png"
import playlist3 from "./img/playlist03.png"
import MyAvatar from "./img/MyAvatar.svg"

function Sidebar() {
    const avatar = {
        backgroundImage: {MyAvatar}
    }
    return(<div className="main__sidebar sidebar">
                <div className="sidebar__personal">
                    <p className="sidebar__personal-name">Hekke</p>
                    <div className="sidebar__avatar" style = {avatar}>
                    </div>
                </div>
            <div className="sidebar__block">
                <div className="sidebar__list">
                        <div className="sidebar__item skeleton">
                            <a className="sidebar__link" href="#">
                                <img className="sidebar__img" src={playlist1} alt="day's playlist"/>
                            </a>
                        </div>
                            <div className="sidebar__item skeleton">
                                <a className="sidebar__link" href="#">
                                    <img className="sidebar__img" src={playlist2} alt="day's playlist"/>
                                </a>
                            </div>
                            <div className="sidebar__item skeleton">
                                <a className="sidebar__link" href="#">
                                    <img className="sidebar__img" src={playlist3} alt="day's playlist"/>
                                </a>
                            </div>
                </div>
            </div>
</div>)
}
export default Sidebar;