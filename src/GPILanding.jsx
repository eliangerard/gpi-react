import { useEffect, useState } from 'react'
import gpiWhite from './assets/logos/gpi-w.png'
import viteLogo from '/vite.svg'
import LoginCard from './components/login/LoginCard'

import './GPILanding.css';
import './App.css'



export const GPILanding = () => {
  const [showCard, setShowCard] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const mostrarFormulario = (signIn) => {
    setShowLogin(signIn);
    setShowCard(true)
  }
  useEffect(() => {
    const lpBtn2 = document.querySelector(".lpBtn2");
    if (lpBtn2)
      lpBtn2.addEventListener("click", change);
  }, []);
  const change = () => {
    var app = document.querySelector('#lpH4');
    var app2 = document.querySelector('#lpH40');
    var lpHContainer = document.querySelector('#lpHContainer');
    var app3 = document.querySelector('#lpH41');
    var app4 = document.querySelector('#lpH42');
    var app5 = document.querySelector('#lpH43');
    var btn = document.querySelector('.lpBtn2');
    var lpc = document.querySelector('.lpContainer');
    lpHContainer.style.setProperty('height', '15rem', 'important')
    app.style.setProperty('opacity', 1, 'important');
    app.style.setProperty('transition', '1s ease-in-out', 'important');
    app2.style.setProperty('opacity', 1, 'important');
    app2.style.setProperty('transition', '3s ease-in-out', 'important');
    app3.style.setProperty('opacity', 1, 'important');
    app3.style.setProperty('transition', '5s ease-in-out', 'important');
    app4.style.setProperty('opacity', 1, 'important');
    app4.style.setProperty('transition', '5s ease-in-out', 'important');
    app5.style.setProperty('opacity', 1, 'important');
    app5.style.setProperty('transition', '6s ease-in-out', 'important');
    btn.style.setProperty('background-color', 'rgba(32, 31, 31, 0.795)', 'important');
    lpc.style.setProperty('background-image', 'url(./src/assets/img/lpGr.png)', 'important');
  }

  return (
    <>
      <div id="lp">

        <div className="lpContainer">
          <div className="lpDivB">
            <img id="lpGpi" src="./src/assets/gpi-bw.png" />
            <button className="lpBtn" onClick={() => mostrarFormulario(true)}>
              <p>Iniciar sesion</p>
            </button>
          </div>
          <div className='lpMain'>

            <div id='lpTitle'>
              GPi te ofrece una gran variedad de granjas, hacer tus eventos nunca habia
              sido tan sencillo.
            </div>
            <div className="lpH" id="lpH3">
              Esta es la oportunidad que estabas buscando. Hazla realidad.
            </div>
            <div className="x">
              <button className="lpBtn2" id="lpH2">¡Quiero conocer mas!</button>
            </div>
            <div id="lpHContainer" className="advantages">
              <div className="lpH" id="lpH4">Puedes encontrar todo tipo de granjas en nuestro catalogo</div>
              <div className="lpH" id="lpH40">Te damos informacion relevante sobre tus locaciones preferidas</div>
              <div className="lpH" id="lpH41">Ofrecemos la facilidad de promocionar tu granja en nuestra aplicacion</div>
              <div className="lpH" id="lpH42">Opina y califica la experiencia de tu evento</div>
              <div className="lpH" id="lpH43">Con nuestro chat ponerte en contacto
                con alguien nunca habia sido tan facil
              </div>
            </div>
          </div>
        </div>
      </div >
      {showCard && (<LoginCard toLogin={showLogin} />)}
    </>
  )
}

export default GPILanding;
