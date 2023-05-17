import React, { useState, useEffect } from 'react';
import './LocationFullCard.css';
import SubmenuBar from './SubmenuBar';
import Carrousel from './Carrusel';
import InfoCard from './InfoCard';

export const LocationFullCard = ({ id, closePop }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="contenedorChueco">
        <div className="tarjeta">
          <SubmenuBar
            closePopUp={closePop}
            id={id}
          />
          <Carrousel
            id={id}
          />
          <InfoCard
            id={id}
          />
          <div class="wideCard2">
            <div class="wideCard" id="segmentReview">
              <div class="segmentHeader">Reseñas</div>
              <ReviewDisplay
                qty={1}
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