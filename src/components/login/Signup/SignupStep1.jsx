import { useState } from 'react';
import gpiBlack from '../../../assets/logos/gpi-b.png'
export const SignupStep1 = ( { nextStep, setLogin }) => {
    
    return (
        <>            
            <div id="signData">
                <img id="logo" src={gpiBlack} alt=""></img>
                <div id="signUpHeader">
                    <h1 id="signUpTitle">Registrate</h1>
                    <div className="flex-container">
                        <div className="circle selected"></div>
                        <div className="circle"></div>
                    </div>
                </div>
                <div id="fullName">
                    <input type="email" placeholder="Nombre(s)"></input>
                    <input type="email" placeholder="Apellidos"></input>
                </div>
                <input type="email" placeholder="Nombre de usuario"></input>
                <input type="email" placeholder="Correo"></input>
                <input type="password" placeholder="Contraseña"></input>
            </div>
            <div id="signOptions">
                <button onClick= { nextStep }>Siguiente</button>
                <p className="loginOption">¿Ya tienes una cuenta? <b onClick={ () => setLogin(true) }>Inicia sesión</b></p>
            </div>
        </>
    )
}

export default SignupStep1;
