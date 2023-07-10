import logo from "./img/logo.png";
import BurgerMenu from "./burgerMenu";
import { useState } from "react";

function Navigation() {
    const [leftMenu, setLeftMenu] = useState(false);
    const visibility = () => {setLeftMenu(!leftMenu)}
    return(<nav className="main__nav nav">
                    <div className="nav__logo logo">
                        <img 
                        className="logo__image" 
                        src= { logo }
                        alt="logo"/>
                    </div>
                    <div className="nav__burger burger" onClick={visibility}>
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                    </div>
                    {leftMenu && <BurgerMenu/>}
    </nav>
    )
}

export default Navigation;