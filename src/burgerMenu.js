import * as NS from "./NavigationStyles";

function BurgerMenu() {
    return(<NS.Menu>
                <NS.MenuList>
                    <NS.MenuItem><NS.Link
                        href="http://" 
                        >
                            Главное
                    </NS.Link></NS.MenuItem>
                    <NS.MenuItem><NS.Link 
                        href="http://" 
                        >
                            Мой плейлист
                    </NS.Link></NS.MenuItem>
                    <NS.MenuItem><NS.Link 
                        href="http://" 
                        >
                            Войти
                    </NS.Link></NS.MenuItem>
                </NS.MenuList>
            </NS.Menu>)
}

export default BurgerMenu;