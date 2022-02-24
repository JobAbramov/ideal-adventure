import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import Home from "../Home/Home";

function Login(){
    const go = useNavigate()
    //const logcheck = () => 
    useEffect(() =>localStorage.getItem('login') ? go('/home'): go('/auth'))
    return(
        <div>
            <h1>Logging in!</h1>
        </div>
        
    );
}

export default Login