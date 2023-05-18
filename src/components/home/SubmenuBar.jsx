import './SubmenuBar.css'
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import imagen from '../../assets/gifs/backtarjetotagif'


export const SubmenuBar = ({id , closePopUp, moveToScroll}) => {
    const resenas = "resenas";
    const galeria = "galeria";
    const ubicacion = "ubicacion";
    const fechas = "fechas"
    const closeComponent = () => {
        closePopUp();
    };

    return (
        <>
            <div className="wideCardBar navBar" id="navBar">
                <div className="halfCard3" id="level">
                    <div className="btnContextSalir" id="btnReview" onClick={closeComponent}>
                        {
                            <img src={imagen} className="src" />
                        }

                    </div>
                    <div className="btnContextN" id="btnReview" onClick={()=> {moveToScroll(galeria)}}>
                        Galeria
                    </div>
                    <div className="btnContextN" id="btnReview" onClick={()=> {moveToScroll(resenas)}}>
                        Reseñas
                    </div>
                    <div className="btnContextN" id="btnPlace" onClick={()=>{moveToScroll(ubicacion)}}>
                        Ubicación
                    </div>
                    <div className="btnContextN" id="btnCalendar" onClick={()=>{moveToScroll(fechas)}}>
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