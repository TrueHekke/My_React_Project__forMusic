import { useState } from "react";
import { useGetLoginMutation, useGetTokenMutation } from '../store/services/music';
import { NavLink, Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginMutation] = useGetLoginMutation();
  const [getTokenMutation] = useGetTokenMutation();

  const handleLogin = async () => {
    try {
      await loginMutation({ email, password });
      const tokenResponse = await getTokenMutation({ email, password });
      
      const accessToken = tokenResponse.data.access;
      
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
      }

      setIsLoggedIn(true);
      setLoginError(null);
    } catch (error) {
      // Обработка ошибки аутентификации
      setLoginError(error.message);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />; // Редирект на главную страницу при успешном входе
  }

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        autoComplete="current-password"
      />
      <button onClick={ handleLogin }>Войти</button>
      <NavLink to="/registration">
        <button>Регистрация</button>
      </NavLink>
      {loginError && <p>{loginError}</p>}
    </form>
  );
};

export default Login;