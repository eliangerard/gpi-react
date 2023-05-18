import React, { useState, useEffect, useRef } from 'react';
import './LocationFullCard.css';
import SubmenuBar from './SubmenuBar';
import Carrousel from './Carrusel';
import InfoCard from './InfoCard';
import ReviewDisplay from './ReviewDisplay';
import Calendary from './Calendary'
import Mapa from './Mapa'


export const LocationFullCard = ({ id, closePop }) => {
  const navBar = useRef(null);
  const Resenas = useRef(null);
  const Ubicacion = useRef(null);
  const Fechas = useRef(null);
  const [show, setShow] = useState(false);
  const contenedor = navBar.current;
  const resenas = Resenas.current;
  const ubicacion = Ubicacion.current;
  const fechas = Fechas.current;

  const handleScroll = () => {
    const resenasAlto = resenas.offsetTop;
    const ubicacionAlto = ubicacion.offsetTop;
    const fechasAlto = fechas.offsetTop;
    if(contenedor.scrollTop < resenasAlto){
      console.log("Primer cacho");
    } else if(contenedor.scrollTop < ubicacionAlto){
      console.log("Primer scroll");
    } else if(contenedor.scrollTop < fechasAlto){
      console.log("Segundo scroll");
    } else if(contenedor.scrollTop < contenedor.offsetTop){
      console.log("Tercer scroll");
    }
  }

  useEffect(() => {

    contenedor.addEventListener('scroll', handleScroll);


    const timer = setTimeout(() => {
      setShow(true);
    }, 10);

    return () => {
      contenedor.removeEventListener('scroll', handleScroll);
      clearTimeout(timer)
    };
  }, []);

  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="contenedorChueco" ref={navBar}>
        <div className="tarjeta">
          <SubmenuBar
            scrollLoco={handleScroll}
            closePopUp={closePop}
            id={id}
          />
          <Carrousel
            id={id}
          />
          <InfoCard
            id={id}
          />
          <div className="wideCard2">
            <div className="wideCard" ref={Resenas}>
              <div className="segmentHeader">Reseñas</div>
              <ReviewDisplay
                qty={6}
                id={id}
              />
            </div>
            <div className="wideCard" ref={Ubicacion}>
              <div className="segmentHeader">Ubicación</div>
              <Mapa
                id={id}
              />
            </div>
            <div className="wideCard" ref={Fechas}>
            <div className="segmentHeader">Fechas</div>
              <Calendary
                id={id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationFullCard;