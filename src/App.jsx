import { useState } from 'react'
import GPILanding from './GPILanding'
import Home from './Home';

export const App = () => {
    const [showLanding, setShowLanding] = useState(true);
    return(
        <>
        { showLanding && <GPILanding setShowLanding = {setShowLanding}/>}
        { !showLanding && <Home/>}
        </>
    )
}

export default App