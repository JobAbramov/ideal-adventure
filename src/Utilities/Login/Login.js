import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function Login(){
    const go = useNavigate()
    useEffect(() =>localStorage.getItem('login') ? go('/home'): go('/auth'))
    return(
        <div>
            <h1>Logging in!</h1>
        </div>
        
    );
}

export default Login