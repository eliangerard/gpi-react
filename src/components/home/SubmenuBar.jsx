import './SubmenuBar.css'
import React, {useState} from 'react';
import ReactDOM from 'react-dom';


export const SubmenuBar = ({id , closePopUp}) => {
    
    const closeComponent = () => {
        closePopUp();
    }

    return (
        <>
            <div className="wideCardBar navBar" id="navBar">
                <div className="halfCard3" id="level">
                    <div className="btnContextSalir" id="btnReview" onClick={closeComponent}>
                        {
                            //"Aquí va un pinchi flechón"//
                        }
                        {"<"}

                    </div>
                    <div className="btnContextN" id="btnReview">
                        Galeria
                    </div>
                    <div className="btnContextN" id="btnReview">
                        Reseñas
                    </div>
                    <div className="btnContextN" id="btnPlace">
                        Ubicación
                    </div>
                    <div className="btnContextN" id="btnCalendar">
                        Fechas
                    </div>
                </div>
                <div className="halfCard2" id="level2">
                    <div className="message" id="message">
                        <div className="ratingMessage">
                            4.7<span className="starMessage">&#9733;</span>
                        </div>
                        <div className="priceMessage">
                            $14,000
                        </div>
                        <div className="hourMessage">
                            / 5 horas
                        </div>
                    </div>
                    <div className="btnLaunch" id="btnGo">
                        Reservar
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmenuBar