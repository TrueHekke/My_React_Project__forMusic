import { NavLink } from "react-router-dom"

const NotFound = () => {
return(
    <div>
        <h1>404</h1>
        <h2>Страница не найдена :C</h2>
        <p>Возможно, она была удалена или перенесена на другой адрес</p>
        <NavLink to = "/">
            <input type="button" placeholder="Вернуться на главную" name="buttonReset" />
        </NavLink>
    </div>
)
}

export default NotFound