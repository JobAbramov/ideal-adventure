import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Controls/Input";

export default () =>{
    const go = useNavigate()
    const [login,setLogin] = useState(null)
    const [password, setPass] = useState(null)
    const [disabled_btn,setDisBtn] = useState(true)
    const [errorMessage, setErrorMsg] = useState('')

    const errorMsg = (error) =>(<span style={{color: 'red',fontSize:'20pt'}}>{error}</span>)
    const authCheck = (login, password) =>
    {
        if(login === 'test@mail.ru')
        {
           
            if(password === 'test')
            {
                localStorage.setItem('login',login);
                localStorage.setItem('password',password);
                go("/home")
            }
            else
                setErrorMsg(errorMessage=> errorMessage = 'Неверный пароль!')
        }
        else
            setErrorMsg(errorMessage=> errorMessage = 'Неверный логин!')     
    }

    const onChangeHandler = event => {
        switch(event.target.type)
        {
            case 'email':
                console.log(event.target.type)
                event.target.value.length ? setDisBtn(disabled_btn => disabled_btn = false)
                : setDisBtn(disabled_btn => disabled_btn = true)
                setLogin(login => login = event.target.value)
                setErrorMsg(errorMessage=> errorMessage = '')
                break;
            case 'password':
                console.log(event.target.type)
                setPass(password => password = event.target.value)
                console.log(event.target.value, password)
                setErrorMsg(errorMessage => errorMessage = '')
                break;
        }
        
    }     
    return(
        <div>
        <h1>Авторизация</h1>
            <div>
                <Input type={'email'} id="1" placeholder="Введите email" label="Почта" onChange={event => onChangeHandler(event)}/> 
                <Input type={'password'} id="2" placeholder="Введите email" label="Пароль" onChange={event => onChangeHandler(event)}/> 
                
                <p>{errorMsg(errorMessage)}</p>
                    <button disabled={disabled_btn} onClick={event => authCheck(login,password)}>Принять</button>
                    
            </div>
        </div>
    )
}