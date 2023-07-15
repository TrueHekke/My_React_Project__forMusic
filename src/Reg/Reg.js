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
            <div>
                <input type="password" placeholder="Повторите пароль" name="passwordAgain"/>
            </div>
            <NavLink to = "/login">
                <input type="button" placeholder="Зарегистрироваться" name="buttonLog" />
            </NavLink>
        </div>
    </div>
)
}

export default App