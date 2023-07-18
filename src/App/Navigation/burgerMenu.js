import * as NS from './NavigationStyles';
import { NavLink } from "react-router-dom";
import { ThemeSwitcher } from '../themeSwitcher';
import { useThemeContext } from '../themes';

function BurgerMenu() {
  const {theme} = useThemeContext();
  return (
    <NS.Menu>
      <NS.MenuList>
        <NS.MenuItem>
          <NavLink className="link" to= "/" style={{color:theme.color}}>Главное</NavLink>
        </NS.MenuItem>
        <NS.MenuItem>
        <NavLink className="link" to= "/favorites" style={{color:theme.color}}>Мой плейлист</NavLink>
        </NS.MenuItem>
        <NS.MenuItem>
        <NavLink className="link" to="/login" style={{color:theme.color}}>Войти</NavLink>
        </NS.MenuItem>
        <NS.MenuItem>
          <ThemeSwitcher/>
        </NS.MenuItem>
      </NS.MenuList>
    </NS.Menu>
  )
}

export default BurgerMenu
