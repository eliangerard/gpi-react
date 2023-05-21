import { forwardRef, useRef, useState } from 'react';
import gpiBlack from '../../../assets/logos/gpi-b.png'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRegister } from '../../../helpers/js/useRegister';
import { Loading } from '../../util/Loading';

export const SignupStep1 = ({ nextStep, setLogin }) => {
    const [startDate, setStartDate] = useState();
    const [loading, setLoadingStatus] = useState(false);

    const inputName = useRef(null);
    const inputFamily = useRef(null);
    const inputUser = useRef(null);
    const inputEmail = useRef(null);
    const inputPass = useRef(null);

    const signUp = async () => {
        setLoadingStatus(true);

        inputName.current.disabled = true
        inputFamily.current.disabled = true
        inputUser.current.disabled = true
        inputEmail.current.disabled = true
        inputPass.current.disabled = true
            


        const name = inputName.current.value.trim()
        const family = inputFamily.current.value.trim()
        const user = inputUser.current.value.trim()
        const email = inputEmail.current.value.trim()
        const pass = inputPass.current.value.trim()
        const birthdate = `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getDate().toString().padStart(2, '0')}`;

        if (name.length == 0 || family.length == 0 || user.length == 0 || email.length == 0 || pass.length == 0 || !birthdate){
            setLoadingStatus(true);

        inputName.current.disabled = true
        inputFamily.current.disabled = true
        inputUser.current.disabled = true
        inputEmail.current.disabled = true
        inputPass.current.disabled = true
            
            return console.log("Los datos no están completos");
        }
        const response = await useRegister(name, family, birthdate, user, email, pass)
        sessionStorage.setItem("username", user);
        sessionStorage.setItem("xAA", pass);
        console.log(response);
        nextStep();
    }
    const ExampleCustomInput = forwardRef(({ value, onClick, placeholder }, ref) => (
        <button className="loginInput loginDate" onClick={onClick} ref={ref}>
            {value || placeholder}
        </button>
    ));

    return (
        <>
            <div id="signData">
                <img id="logoLogin" src={gpiBlack} alt=""></img>
                <div id="signUpHeader">
                    <h1 id="signUpTitle">Registrate</h1>
                    <div className="flex-container">
                        <div className="circle selected"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>
                <div id="fullName">
                    <input ref={inputName} className="loginInput" type="text" placeholder="Nombre(s)"></input>
                    <input ref={inputFamily} className="loginInput" type="text" placeholder="Apellidos"></input>
                </div>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    customInput={<ExampleCustomInput />}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholderText='Fecha de nacimiento'
                />
                <hr className='loginHr' />
                <input ref={inputUser} className="loginInput firstInput" type="text" placeholder="Nombre de usuario" />
                <input ref={inputEmail} className="loginInput" type="email" placeholder="Correo" />
                <input ref={inputPass} className="loginInput" type="password" placeholder="Contraseña"></input>
            </div>
            <div id="signOptions">
                <button onClick={signUp}>{loading ? <Loading white={true} showStatus={false}/> : "Registrarse"}</button>
                <p className="loginOption">¿Ya tienes una cuenta? <b onClick={() => setLogin(true)}>Inicia sesión</b></p>
            </div>
        </>
    )
}

export default SignupStep1;
