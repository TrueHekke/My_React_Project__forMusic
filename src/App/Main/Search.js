import search from './search.svg'
import * as MS from './MainStyles'
import { useThemeContext } from '../themes'

function Search() {
  const {theme} = useThemeContext();

  return (
    <MS.Search>
      <MS.SearchImg src={search} alt="search"  style={{fill:theme.color}}/>
      <MS.SearchText type="search" placeholder="Поиск" name="search" style={{color:theme.color}}/>
    </MS.Search>
  )
}

export default Search
