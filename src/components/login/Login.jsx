import { useState } from 'react';

import gpiBlack from '../../assets/logos/gpi-b.png';
import './LoginCard.css';
import { useLogin } from '../../helpers/js/useLogin';
import { Loading } from '../util/Loading';

export const Login = ( { setShowLanding, setLogin} ) => {
    const [loading, setLoadingStatus] = useState(false);
    let loged = false;


    const login = async () => {
        if(loged)  return;
        loged = true;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const btnLogin = document.getElementById("btnLogin");        

        setLoadingStatus(true);
        
        console.log(username, password);
        if(username.trim().length == 0 || password.trim().length == 0)
            return;
        console.log("Pre: "+ username,password);
        
        const userData = {
            username,
            password
        }

        const { message, result } = await useLogin( userData );

        if(message != "Loged in"){
            setLoadingStatus(false);
            return loged = false;
        }
        btnLogin.innerHTML = "¡Listo!";
        localStorage.setItem("access", result.AccessToken);
        localStorage.setItem("id", result.IdToken);
        localStorage.setItem("refresh", result.RefreshToken);
        setShowLanding(false);
    }
    //hola
    return (
        <>
            <div id="signData">
                <img id="logoLogin" src={gpiBlack} alt=""></img>
                <h1>Iniciar Sesión</h1>
                <input className="loginInput" id='username' type="email" placeholder="Correo o nombre de usuario"></input>
                <input className="loginInput" id='password' type="password" placeholder="Contraseña"></input>
                <p className="loginOption">¿Olvidaste tu contraseña? <b>Recupérala</b></p>
            </div>
            <div id="signOptions">
                <button id='btnLogin' onClick={ login}>{loading ? <Loading white={true} showStatus={false}/> : "Iniciar sesión" }</button>
                <p className="loginOption">¿No tienes una cuenta? <b onClick={() => setLogin(false)}>Regístrate</b></p>
            </div>
        </>
    )
}

export default Login;
