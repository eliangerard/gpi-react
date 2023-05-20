
import { useState } from 'react';
import gpiBlack from '../../../assets/logos/gpi-b.png'
export const SignupStep3 = ( { nextStep, backStep, setLogin }) => {
    
    return (
        <>            
            <div id="signData">
                <img id="logoLogin" src={gpiBlack} alt=""></img>
                <div id="signUpHeader">
                    <h1 id="signUpTitle">Registrate</h1>
                </div>
                <div id="inputCode">
                    <h3>Verifica tu correo</h3>
                    <p>Te hemos enviado un código de verificación al correo que ingresaste</p>
                    
                    <input className="verification" type="text" maxLength="6" placeholder="XXXXXX"></input>
                    <button>Verificar</button>
                </div>
            </div>
            <div id="signOptions">
                <div className="flex-container">
                    <button className="secondary" onClick={backStep}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">    <path d="M9.929,12l3.821-3.821c0.414-0.414,0.414-1.086,0-1.5l0,0c-0.414-0.414-1.086-0.414-1.5,0l-4.614,4.614 c-0.391,0.391-0.391,1.024,0,1.414l4.614,4.614c0.414,0.414,1.086,0.414,1.5,0h0c0.414-0.414,0.414-1.086,0-1.5L9.929,12z"/></svg>
                    </button>
                    <button onClick={nextStep}>Registrarse</button>
                </div>
                <p className="loginOption">¿Ya tienes una cuenta? <b onClick={ () => setLogin(true) }>Inicia sesión</b></p>
            </div>
        </>
    )
}

export default SignupStep3;
