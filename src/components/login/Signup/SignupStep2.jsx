import { useState } from 'react';
import gpiBlack from '../../../assets/logos/gpi-b.png'
export const SignupStep2 = ( { nextStep, backStep, setLogin }) => {
    
    return (
        <>            
            <div id="signData">
                <img id="logoLogin" src={gpiBlack} alt=""></img>
                <div id="signUpHeader">
                    <h1 id="signUpTitle">Registrate</h1>
                    <div className="flex-container">
                        <div className="circle"></div>
                        <div className="circle selected"></div>
                    </div>
                </div>
                <div id="inputID">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="150px" height="150px"><path d="M 44 9 L 6 9 C 3.792969 9 2 10.792969 2 13 L 2 37 C 2 39.207031 3.792969 41 6 41 L 44 41 C 46.207031 41 48 39.207031 48 37 L 48 13 C 48 10.792969 46.207031 9 44 9 Z M 8 34 C 8.242188 29.972656 13.421875 30.558594 14.199219 28.472656 C 14.261719 27.757813 14.199219 27.257813 14.199219 26.605469 C 13.875 26.433594 12.96875 25.515625 12.828125 24.492188 C 12.828125 24.492188 12.097656 24.144531 12.058594 23.042969 C 12.035156 22.460938 12.445313 22.046875 12.445313 22.046875 C 11.683594 19.113281 12.011719 16.070313 15.9375 16 C 16.917969 16 17.65625 16.472656 17.949219 16.992188 C 20.679688 16.992188 19.972656 20.800781 19.558594 22.046875 C 19.710938 22.199219 19.898438 22.621094 19.898438 23.191406 C 19.898438 24.007813 19.125 24.492188 19.125 24.492188 C 18.980469 25.53125 18.246094 26.390625 17.800781 26.605469 C 17.800781 27.257813 17.734375 27.757813 17.800781 28.472656 C 18.578125 30.558594 23.757813 29.972656 24 34 Z M 41 31 L 29 31 C 28.445313 31 28 30.554688 28 30 C 28 29.445313 28.445313 29 29 29 L 41 29 C 41.554688 29 42 29.445313 42 30 C 42 30.554688 41.554688 31 41 31 Z M 41 26 L 29 26 C 28.445313 26 28 25.550781 28 25 C 28 24.449219 28.445313 24 29 24 L 41 24 C 41.554688 24 42 24.449219 42 25 C 42 25.550781 41.554688 26 41 26 Z M 41 21 L 29 21 C 28.445313 21 28 20.550781 28 20 C 28 19.449219 28.445313 19 29 19 L 41 19 C 41.554688 19 42 19.449219 42 20 C 42 20.550781 41.554688 21 41 21 Z"/></svg>
                    <b>Pulsa para añadir una identificación</b>
                    <p>Puedes omitir este paso por ahora si solo quieres seguir viendo y añadirla cuando estés listo para rentar.</p>
                </div>
            </div>
            <div id="signOptions">
                <div className="flex-container">
                    <button className="secondary" onClick={backStep}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">    <path d="M9.929,12l3.821-3.821c0.414-0.414,0.414-1.086,0-1.5l0,0c-0.414-0.414-1.086-0.414-1.5,0l-4.614,4.614 c-0.391,0.391-0.391,1.024,0,1.414l4.614,4.614c0.414,0.414,1.086,0.414,1.5,0h0c0.414-0.414,0.414-1.086,0-1.5L9.929,12z"/></svg>
                    </button>
                    <button onClick={nextStep}>Registrarse</button>
                </div>
                <p className="loginOption">¿Ya tienes una cuenta? <b onClick={ () => setLogin(true) }>Inicia sesión</b></p>
            </div>
        </>
    )
}

export default SignupStep2;
