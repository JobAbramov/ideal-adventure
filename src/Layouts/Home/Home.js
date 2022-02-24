import React from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const go = useNavigate()
    const onClickHandler = () => {
        localStorage.removeItem('login')
        localStorage.removeItem('password')
        go("/")
    }
    return(
    <div>
        <h1>Home page</h1>
        <button onClick={onClickHandler}>Log off</button>
        
    </div>
    )
}

export default Home