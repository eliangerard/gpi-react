import { useState, useEffect } from 'react'

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
      <div className="card">
        <button onClick={mostrarHome}>
          Mostrar Home
        </button>
      </div>

      { showCard && (<LoginCard toLogin = {showLogin} />)}

    </>
  )
}

export default GPILanding;
