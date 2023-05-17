import React, { useState, useEffect } from 'react';
import './LocationFullCard.css';
import SubmenuBar from './SubmenuBar';
import Carrousel from './Carrusel';

export const LocationFullCard = ({ id }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="tarjeta">
      {id}
      <SubmenuBar
      id={id}
      />
      <Carrousel
      id={id}
      />
      </div>     
    </div>

  );
};

export default LocationFullCard;