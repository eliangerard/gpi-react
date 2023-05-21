import { useState } from 'react';
import gpiBlack from '../../../assets/logos/gpi-b.png'
export const SignupStep4 = ({ nextStep, backStep, setLogin }) => {

    return (
        <>
            <div id="signData">
                <img id="logoLogin" src={gpiBlack} alt=""></img>
                <div id="signUpHeader">
                    <h1 id="signUpTitle">Registrate</h1>
                    <div className="flex-container">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle selected"></div>
                    </div>
                </div>
                <div id="inputCode">
                    <h3>Seguridad</h3>
                    <p>¡Prueba a añadir más seguridad a tu cuenta!</p>
                    <button id="MFA">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="64px" height="64px"><path d="M 36 10 C 28.28 10 22 16.28 22 24 L 22 28.587891 C 19.069798 29.775473 17 32.643974 17 36 L 17 52 C 17 56.418 20.582 60 25 60 L 47 60 C 51.418 60 55 56.418 55 52 L 55 36 C 55 32.643974 52.930202 29.775473 50 28.587891 L 50 24 C 50 16.28 43.72 10 36 10 z M 36 18 C 39.309 18 42 20.691 42 24 L 42 28 L 30 28 L 30 24 C 30 20.691 32.691 18 36 18 z" /></ svg>
                        <p>Añadir autenticación en 2 pasos</p>
                    </button>
                    <button>Omitir</button>
                </div>
            </div>
            <div id="signOptions">
                <div className="flex-container">
                    <button className="secondary" onClick={backStep}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">    <path d="M9.929,12l3.821-3.821c0.414-0.414,0.414-1.086,0-1.5l0,0c-0.414-0.414-1.086-0.414-1.5,0l-4.614,4.614 c-0.391,0.391-0.391,1.024,0,1.414l4.614,4.614c0.414,0.414,1.086,0.414,1.5,0h0c0.414-0.414,0.414-1.086,0-1.5L9.929,12z" /></svg>
                    </button>
                    <button>Registrarse</button>
                </div>
                <p className="loginOption">¿Ya tienes una cuenta? <b onClick={() => setLogin(true)}>Inicia sesión</b></p>
            </div>
        </>
    )
}

export default SignupStep4;
