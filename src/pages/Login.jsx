import React, {useContext} from 'react';
import MyInput from "../Components/UI/input/MyInput";
import MyButton from "../Components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = () => {
        setIsAuth(true);
        console.log(setIsAuth)
    }
    return (
        <div>
            <h1>Страница для логина</h1>
            <from>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton onClick={login}>Войти</MyButton>
            </from>
        </div>
    );
};

export default Login;