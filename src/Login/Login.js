import logoLogin from '../img/logoLogin.png'
import { NavLink } from "react-router-dom";


const App = () => {

return(
    <div>
        <div>
            <div>
                <img src={logoLogin} alt="logo"/>
            </div>
            <div>
                <input type="text" placeholder="Логин" name="login"/>
            </div>
            <div>
                <input type="password" placeholder="Пароль" name="password"/>
            </div>
            <NavLink to = "/">
                <input type="button" placeholder="Войти" name="buttonLog" />
            </NavLink>
            <NavLink to = "/registration">
                <input type="button" placeholder="Зарегистрироваться" name="buttonReg" />
            </NavLink>
        </div>
    </div>
)
}

export default App