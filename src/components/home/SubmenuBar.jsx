import './SubmenuBar.css'
import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import imagen from '../../assets/gifs/images.png'


export const SubmenuBar = ({ id, closePopUp, moveToScroll, handleScroll, scrollHeight2, selectButton, promedioPuntuacion, costo, tiempo }) => {
    useEffect(() => {
        selectButtonIntermediate(scrollHeight2);
    }, [scrollHeight2]);
    const [claseActiva, setClaseActiva] = useState(false);


    const btnResenas = useRef(null);
    const btnGaleria = useRef(null);
    const btnUbicacion = useRef(null);
    const btnFechas = useRef(null);


    const resenas = "resenas";
    const galeria = "galeria";
    const ubicacion = "ubicacion";
    const fechas = "fechas";

    const closeComponent = () => {
        closePopUp();
    };

    const selectButtonIntermediate = (height) => {

        const btnresenas = btnResenas.current;
        const btngaleria = btnGaleria.current;
        const btnubicacion = btnUbicacion.current;
        const btnfechas = btnFechas.current;

        const relativePosition = selectButton(height);
        if (relativePosition === "gallery") {
            btngaleria.classList.add('btnContext');
            btnubicacion.classList.remove('btnContext');
            btnfechas.classList.remove('btnContext');
            btnresenas.classList.remove('btnContext');
        } else if (relativePosition === "review") {
            btngaleria.classList.remove('btnContext');
            btnubicacion.classList.remove('btnContext');
            btnfechas.classList.remove('btnContext');
            btnresenas.classList.add('btnContext');
        } else if (relativePosition === "ubication") {
            btngaleria.classList.remove('btnContext');
            btnubicacion.classList.add('btnContext');
            btnfechas.classList.remove('btnContext');
            btnresenas.classList.remove('btnContext');
        } else if (relativePosition === "calendar") {
            btngaleria.classList.remove('btnContext');
            btnubicacion.classList.remove('btnContext');
            btnfechas.classList.add('btnContext');
            btnresenas.classList.remove('btnContext');
        }
    }


    const actualizarBotones = (StringReceived) => {

        const btnresenas = btnResenas.current;
        const btngaleria = btnGaleria.current;
        const btnubicacion = btnUbicacion.current;
        const btnfechas = btnFechas.current;


        if (StringReceived === "resenas") {
            btngaleria.classList.remove('btnContext');
            btnubicacion.classList.remove('btnContext');
            btnfechas.classList.remove('btnContext');
            btnresenas.classList.add('btnContext');
        } else if (StringReceived === "galeria") {
            btngaleria.classList.add('btnContext');
            btnubicacion.classList.remove('btnContext');
            btnfechas.classList.remove('btnContext');
            btnresenas.classList.remove('btnContext');
        } else if (StringReceived === "ubicacion") {
            btngaleria.classList.remove('btnContext');
            btnubicacion.classList.add('btnContext');
            btnfechas.classList.remove('btnContext');
            btnresenas.classList.remove('btnContext');
        } else if (StringReceived === "fechas") {
            btngaleria.classList.remove('btnContext');
            btnubicacion.classList.remove('btnContext');
            btnfechas.classList.add('btnContext');
            btnresenas.classList.remove('btnContext');
        }
    }

    function formatCurrency(value) {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency', currency: 'MXN',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    }
    return (
        <>
            <div className="wideCardBar navBar" id="navBar">
                <div className="halfCard3" id="level">
                    <img src={imagen} className="btnContextSalir" onClick={closeComponent} />
                    <div className="btnContextN" ref={btnGaleria} onClick={() => {
                        moveToScroll(galeria),
                            actualizarBotones(galeria)
                    }
                    }>
                        Galeria
                    </div>
                    <div className="btnContextN" ref={btnResenas} onClick={() => {
                        moveToScroll(resenas),
                            actualizarBotones(resenas)
                    }
                    }>
                        Reseñas
                    </div>
                    <div className="btnContextN" ref={btnUbicacion} onClick={() => {
                        moveToScroll(ubicacion),
                            actualizarBotones(ubicacion)
                    }
                    }>
                        Ubicación
                    </div>
                    <div className="btnContextN" ref={btnFechas} onClick={() => {
                        moveToScroll(fechas),
                            actualizarBotones(fechas)
                    }}>
                        Fechas
                    </div>
                </div>
                <div className="halfCard2" id="level2">
                    <div className="message" id="message">
                        <div className="ratingMessage">
                            {promedioPuntuacion}<span className="starMessage">&#9733;</span>
                        </div>
                        <div className="priceMessage">
                            {formatCurrency(parseInt(costo))}
                        </div>
                        <div className="hourMessage">
                            / {parseInt(tiempo)/60} horas
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