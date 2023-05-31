import { useEffect, useState } from 'react'
import GPILanding from './GPILanding'
import Home from './Home';
import { getProfile } from './helpers/js/getProfile';

export const App = () => {
    const [showLanding, setShowLanding] = useState(true);

    const onLoad = async () => {
        if(localStorage.getItem("id")){
            const response = await getProfile(localStorage.getItem("id"));
            console.log(response);

            return setShowLanding(response.message == "Access Denied")
        }
        return setShowLanding(true)
    }

    useEffect(() => {
        onLoad();
    }, []);
    
    return(
        <>
        { showLanding && <GPILanding setShowLanding = {setShowLanding}/>}
        { !showLanding && <Home setShowLanding={setShowLanding}/>}
        </>
    )
}

export default App