import logoLogin from '../img/logoLogin.png'
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useGetSignUpMutation } from '../store/services/music'

const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const [signupMutation, { isLoading, error, data}] = useGetSignUpMutation();

    const handleSignup = () => {
        if (password !== repeatPassword) {
            alert('Пароли не совпадают!');
        return;
        }

        signupMutation({ email, password, username: email })
    };
    if (isLoading) {
     return <p>Loading...</p>;
   }

   if (error) {
     return <p>{error.message}</p>;
   }

   if( data ){
    console.log(data)
   }
   

   return (
    <div>
        <div>
            <div>
                <img src={logoLogin} alt="logo"/>
            </div>
            <form>
                <div>
                    <input
                        type="email"
                        value={email}
                        placeholder="Почта"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="username"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Пароль"
                        name="password"
                        autoComplete="new-password"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        placeholder="Повторите пароль"
                        name="passwordAgain"
                        autoComplete="new-password"
                    />
                </div>
                <NavLink to="/login">
                    <input
                        type="button"
                        placeholder="Зарегистрироваться"
                        name="buttonLog"
                        onClick={handleSignup}
                    />
                </NavLink>
            </form>
        </div>
    </div>
);
};

export default App;