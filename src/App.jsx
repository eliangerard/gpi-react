import { useEffect, useState } from 'react'
import GPILanding from './GPILanding'
import Home from './Home';

export const App = () => {
    const [showLanding, setShowLanding] = useState(true);

    const onLoad = () => {
        if(localStorage.getItem("id"))
            setShowLanding(false)
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