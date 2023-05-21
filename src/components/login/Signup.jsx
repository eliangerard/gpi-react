import { useState } from 'react';

import './LoginCard.css';
import SignupStep1 from './Signup/SignupStep1'
import SignupStep2 from './Signup/SignupStep2'
import SignupStep3 from './Signup/SignupStep3'
import SignupStep4 from './Signup/SignupStep4'
import { Loading } from '../util/Loading';

export const Signup = ( { setLogin } ) => {
    const [step, setStep] = useState(0);
    const nextStep = () => {
        setStep(step + 1);
    }
    const backStep = () => {
        setStep(step - 1);
    }
    return (
        <>
            { step == 10 && <Loading/>}
            { step == 0 && <SignupStep1 setLogin = {setLogin} nextStep={ nextStep }/> }
            { step == 1 && <SignupStep2 setLogin = {setLogin} nextStep={ nextStep } backStep={backStep}/> }
            { step == 2 && <SignupStep3 setLogin = {setLogin} nextStep={ nextStep } backStep={backStep}/> }
            { step == 3 && <SignupStep4 setLogin = {setLogin} nextStep={ nextStep } backStep={backStep}/> }
        </>
    )
}

export default Signup;
