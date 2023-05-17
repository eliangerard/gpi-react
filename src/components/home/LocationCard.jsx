import './LocationCard.css';
import { LocationFullCard } from './LocationFullCard';
import React, { useState } from 'react';

export const LocationCard = ({ id }) => {
  const [show, setShow] = useState(false);

  const showPopUp = () => {
    setShow(true);
  };

  const closePopUp = () => {
    setShow(false);
  }
  return (
    <>
      {show && (<LocationFullCard id={id} closePop={closePopUp} />)}
      <article className="granja">
      <img className="granjaImg" src="../src/assets/locations/granja1.jpg" />
                <div className="granjaTop">
                    <div className="granjaCategoria">Al aire libre</div>
                    <div className="host">
                        <span className="fa fa-star checked rating"></span>
                        <span className="fa fa-star checked rating"></span>
                        <span className="fa fa-star checked rating"></span>
                        <span className="fa fa-star checked rating"></span>
                        <span className="fa fa-star rating"></span>
                    </div>
                </div>
                <p className="name">Hacienda Santa Lucía</p>
                <div className="costo">
                    <p className="precio">$3,500</p>
                    <p className="tiempo">5 horas</p>
                </div>
                <div className="ubi">
                    <img className="ubiIcon" src="../src/assets/location.png" />
                    <p className="granjaUbi">Alamo Gordo #1014, Los Alamos 32900, Juan Aldama, Chihuahua</p>
                </div>
                <div className="cardActions">
                    <button className="btnSave"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">    <path d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z M14.811,16.11 c-0.177,0.16-0.331,0.299-0.456,0.416c-0.751,0.7-1.639,1.503-2.355,2.145c-0.716-0.642-1.605-1.446-2.355-2.145 c-0.126-0.117-0.28-0.257-0.456-0.416C7.769,14.827,4,11.419,4,8.5C4,6.57,5.57,5,7.5,5c1.827,0,2.886,1.275,2.914,1.308L12,8 l1.586-1.692C13.596,6.295,14.673,5,16.5,5C18.43,5,20,6.57,20,8.5C20,11.419,16.231,14.827,14.811,16.11z" /></ svg></button>
                    
        <button className="btnReservar" onClick={showPopUp}>
          Ver detalles
        </button>
        </div>
      </article>
    </>
  );
};

export default LocationCard;

