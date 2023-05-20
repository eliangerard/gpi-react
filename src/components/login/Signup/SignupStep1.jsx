import { forwardRef, useState } from 'react';
import gpiBlack from '../../../assets/logos/gpi-b.png'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export const SignupStep1 = ({ nextStep, setLogin }) => {
    const [startDate, setStartDate] = useState();
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
                    </div>
                </div>
                <div id="fullName">
                    <input className="loginInput" type="text" placeholder="Nombre(s)"></input>
                    <input className="loginInput" type="text" placeholder="Apellidos"></input>
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
                <input className="loginInput" type="text" />
                <input className="loginInput" type="password" placeholder="Contraseña"></input>
            </div>
            <div id="signOptions">
                <button onClick={nextStep}>Siguiente</button>
                <p className="loginOption">¿Ya tienes una cuenta? <b onClick={() => setLogin(true)}>Inicia sesión</b></p>
            </div>
        </>
    )
}

export default SignupStep1;
