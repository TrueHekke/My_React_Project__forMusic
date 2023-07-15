import * as NS from './NavigationStyles'
import { NavLink } from "react-router-dom";

function BurgerMenu() {
  return (
    <NS.Menu>
      <NS.MenuList>
        <NS.MenuItem>
          <NavLink className="link" to= "/">Главное</NavLink>
        </NS.MenuItem>
        <NS.MenuItem>
        <NavLink className="link" to= "/favorites">Мой плейлист</NavLink>
        </NS.MenuItem>
        <NS.MenuItem>
        <NavLink className="link" to="/login">Войти</NavLink>
        </NS.MenuItem>
      </NS.MenuList>
    </NS.Menu>
  )
}

export default BurgerMenu
