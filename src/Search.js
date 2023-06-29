import search from './img/icon/search.svg';

function Search() {
    return(<div className="centerblock__search search">
            <img className="search__svg" src={search} alt = 'search'/>
            <input className="search__text" type="search" placeholder="Поиск" name="search"/>
    </div>
    )
}

export default Search;