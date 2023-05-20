import { useState } from 'react'
import GPILanding from './GPILanding'
import Home from './components/home/Home';

export const App = () => {
    const [showLanding, setShowLanding] = useState(true);
    return(
        <>
        { showLanding && <GPILanding/>}
        { !showLanding && <Home/>}
        </>
    )
}

export default App