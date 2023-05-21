
import { useRef, useState } from 'react';
import gpiBlack from '../../../assets/logos/gpi-b.png'
import { useConfirmCode } from '../../../helpers/js/useConfirmCode';
export const SignupStep2 = ({ nextStep, backStep, setLogin }) => {
    const inputCode = useRef(null);

    const confirmCode = async () => {
        const code = inputCode.current.value.trim();

        if (code.length != 6)
            return console.log("El código no está completote");

        const response = await useConfirmCode(code, sessionStorage.getItem("username"));
        console.log(response);
    }
    return (
        <>
            <div id="signCodeData">
                <img id="logoLogin" src={gpiBlack} alt=""></img>
                <div id="signUpHeader">
                    <h1 id="signUpTitle">Registrate</h1>
                    <div className="flex-container">
                        <div className="circle"></div>
                        <div className="circle selected"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>
                <div id="inputCode">
                    <h3>Verifica tu correo</h3>
                    <p>Te hemos enviado un código de verificación al correo que ingresaste</p>

                    <input ref={inputCode} className="loginInput verification" type="number" maxLength="6" placeholder="XXXXXX"></input>
                    <button onClick={confirmCode}>Verificar</button>
                </div>
            </div>
        </>
    )
}

export default SignupStep2;
