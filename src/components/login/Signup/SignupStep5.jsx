import { useState, useEffect, useRef } from 'react';
import gpiBlack from '../../../assets/logos/gpi-b.png'
import { QRCodeSVG } from 'qrcode.react';
import { getAuthenticator } from '../../../helpers/js/getAuthenticator';
import { confirmAuthenticator } from '../../../helpers/js/confirmAuthenticator';

export const SignupStep5 = ({ nextStep, backStep, setLogin, setShowLanding }) => {
    const inputCode = useRef(null);
    const [authURL, setAuthURL] = useState("");
    const createQR = async () => {
        const auth = await getAuthenticator(localStorage.getItem("access"))
        console.log(auth);
        setAuthURL(auth.result);
    }
    const submitCode = async () => {
        const code = inputCode.current.value.trim();
        const response = await confirmAuthenticator(code, localStorage.getItem("access"));
        console.log(response);
        if(response.status)
            setShowLanding(false);
    }
    useEffect(() => {
        createQR();
    }, []);
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
                    <p>Escanea este QR a través de tu aplicación de autenticación</p>
                    <div id='qrContainer'>
                        <QRCodeSVG value={authURL} />

                    </div>
                    <p>Ingresa el código que te proporcione tu aplicación</p>
                    <input ref={inputCode} className="loginInput authentication" type="number" maxLength="6" placeholder="XXXXXX"></input>

                </div>
            </div>
            <div id="signOptions">
                <div className="flex-container">
                    <button className="secondary" onClick={backStep}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">    <path d="M9.929,12l3.821-3.821c0.414-0.414,0.414-1.086,0-1.5l0,0c-0.414-0.414-1.086-0.414-1.5,0l-4.614,4.614 c-0.391,0.391-0.391,1.024,0,1.414l4.614,4.614c0.414,0.414,1.086,0.414,1.5,0h0c0.414-0.414,0.414-1.086,0-1.5L9.929,12z" /></svg>
                    </button>
                    <button onClick={submitCode}>Confirmar</button>
                </div>
                <p className="loginOption">¿Ya tienes una cuenta? <b onClick={() => setLogin(true)}>Inicia sesión</b></p>
            </div>
        </>
    )
}

export default SignupStep5;
