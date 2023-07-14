import search from './img/icon/search.svg';
import * as MS from "./MainStyles";

function Search() {
    return(<MS.Search>
            <MS.SearchImg src={search} alt = 'search'/>
            <MS.SearchText type="search" placeholder="Поиск" name="search"/>
    </MS.Search>
    )
}

export default Search;