import { useState } from 'react'
import gpiWhite from './assets/logos/gpi-w.png'
import viteLogo from '/vite.svg'

import LoginCard from './components/login/LoginCard'

import './App.css'


export const GPILanding = () => {
  const [showCard, setShowCard] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  
  const mostrarFormulario = (signIn) => {
    setShowLogin(signIn);
    setShowCard(true)
  }

  return (
    <>
      <div>
        <img src={gpiWhite} className="logo" alt="Vite logo" />
      </div>
      <h1 id='landingBuilding'>GPI Landing Page en construcción</h1>
      <div className="card">
        <button onClick={ () => mostrarFormulario(true) }>
          Sign In
        </button>
        <button onClick={ () => mostrarFormulario(false) }>
          Sign Up
        </button>
      </div>

      { showCard && (<LoginCard toLogin = {showLogin} />)}

    </>
  )
}

export default GPILanding;
