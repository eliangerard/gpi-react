import { useState } from 'react';

import gpiWhite from '../../assets/logos/gpi-w.png';
import exampleLocation from '../../assets/locations/portada.jpg'
import './LoginCard.css';
import Login from './Login';
import Signup from './Signup';

export const LoginCard = ( { toLogin } ) => {
    const [login, setLogin] = useState(toLogin);
    const setShowLogin = (show) => {
        setLogin(show);
    }

    return (
        <>
            <div id='opaquer'>
                <section id='loginCard'>
                    <div id="signLeft">
                        { !login && (<Signup setLogin = {setShowLogin}/>)}
                        { login && (<Login setLogin = {setShowLogin}/>)}
                    </div>
                    <div id="signImg">
                        <img src={exampleLocation}></img>
                    </div>
                </section>
            </div>
        </>
    )
}

export default LoginCard;
