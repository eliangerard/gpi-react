
import { useRef, useState } from 'react';
import gpiBlack from '../../../assets/logos/gpi-b.png'
import { useConfirmCode } from '../../../helpers/js/useConfirmCode';
import { Loading } from '../../util/Loading';
export const SignupStep2 = ({ nextStep, backStep, setLogin }) => {
    const inputCode = useRef(null);
    const [loading, setLoadingStatus] = useState(false);

    const confirmCode = async () => {
        setLoadingStatus(true);
        const code = inputCode.current.value.trim();

        if (code.length != 6)
            return console.log("El código no está completote");

        const response = await useConfirmCode(code, sessionStorage.getItem("xAA"), sessionStorage.getItem("username"));
        console.log(response);

        if (response.message == "Success") {
            localStorage.setItem("access", response.result[1].AccessToken);
            localStorage.setItem("id", response.result[1].IdToken);
            localStorage.setItem("refresh", response.result[1].RefreshToken);
            return nextStep();
        }
        return setLoadingStatus(false);
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
                    <button onClick={confirmCode}>{ loading ? <Loading white={true} showStatus={false} /> : "Verificar"}</button>
                </div>
            </div>
        </>
    )
}

export default SignupStep2;
