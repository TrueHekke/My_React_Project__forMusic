import playlist1 from "./img/playlist01.png"
import playlist2 from "./img/playlist02.png"
import playlist3 from "./img/playlist03.png"
import MyAvatar from "./img/MyAvatar.svg"
import * as SS from "./SidebarStyles";

function Sidebar() {
    const avatar = {
        backgroundImage: {MyAvatar}
    }
    return(<SS.Sidebar>
                <SS.Personal>
                    <SS.PersonalName>Hekke</SS.PersonalName>
                    <SS.PesonalAvatar style = {avatar}>
                    </SS.PesonalAvatar>
                </SS.Personal>
            <SS.Block>
                <SS.BlockList>
                        <SS.BlockItem className="skeleton">
                            <SS.BlockLink href="#">
                                <SS.BlockImg src={playlist1} alt="day's playlist"/>
                            </SS.BlockLink>
                        </SS.BlockItem>
                            <SS.BlockItem className="skeleton">
                                <SS.BlockLink href="#">
                                    <SS.BlockImg src={playlist2} alt="day's playlist"/>
                                </SS.BlockLink>
                            </SS.BlockItem>
                            <SS.BlockItem className="skeleton">
                                <SS.BlockLink href="#">
                                    <SS.BlockImg src={playlist3} alt="day's playlist"/>
                                </SS.BlockLink>
                            </SS.BlockItem>
                </SS.BlockList>
            </SS.Block>
</SS.Sidebar>)
}
export default Sidebar;