import logo from './logo.png'
import BurgerMenu from './burgerMenu'
import { useState } from 'react'
import * as NS from './NavigationStyles'

function Navigation() {
  const [leftMenu, setLeftMenu] = useState(false)
  const visibility = () => {
    setLeftMenu(!leftMenu)
  }
  return (
    <NS.Main>
      <NS.Logo>
        <NS.Image src={logo} alt="logo" />
      </NS.Logo>
      <NS.Burger onClick={visibility}>
        <NS.BurgerLine className="burger__line"></NS.BurgerLine>
        <NS.BurgerLine className="burger__line"></NS.BurgerLine>
        <NS.BurgerLine className="burger__line"></NS.BurgerLine>
      </NS.Burger>
      {leftMenu && <BurgerMenu />}
    </NS.Main>
  )
}

export default Navigation
