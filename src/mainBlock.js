import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import TrackSearch from "./trackSearch";
import Search from "./Search";
import Playlist from "./Playlist";

function MainBlock() {
    return(<main className="main">
    <Navigation/>
    <div className="main__centerblock centerblock">
        <Search/>
        <h2 className="centerblock__h2">Треки</h2>
        <TrackSearch/>
        <Playlist/>
    </div>
    <Sidebar/> 
</main>)
}

export default MainBlock;