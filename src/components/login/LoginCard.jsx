import { useState, useEffect } from 'react';
import { Login } from './Login'
import { Signup } from './Signup'
import exampleLocation from '../../assets/locations/portada.jpg'
export const LoginCard = ( { setShowLanding, toLogin } ) => {
    useEffect(() => {
        import('./LoginCard.css');
      }, []);
    const [login, setLogin] = useState(toLogin);
    const setShowLogin = (show) => {
        setLogin(show);
    }

    return (
        <>
            <div id='opaquer'>
                <section id='loginCard'>
                    <div id="signLeft">
                        { !login && (<Signup setLogin = {setShowLogin} setShowLanding= {setShowLanding}/>)}
                        { login && (<Login setShowLanding = {setShowLanding} setLogin = {setShowLogin}/>)}
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
