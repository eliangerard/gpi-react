import './Top.css'
import './LocationCard.css';
import { LocationFullCard } from './LocationFullCard';
import React, { useState, useRef } from 'react';

export const Top = () => {
    const [show, setShow] = useState(false);

    const btnHeart = useRef(null);

    const addFavorite = () => {
        const btnfavorite = btnHeart.current;
        console.log("Add Favorite");
        btnfavorite.classList.toggle("press");
    }

    const showPopUp = () => {
        setShow(true);
    };

    const closePopUp = () => {
        setShow(false);
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <>
            <div id="topContainer">
                <div className='topCard'>
                    <img className="topImg" src={`../src/assets/locations/granja${getRandomInt(1,8)}.jpg`} />
                    <div className='topRight'>

                        <div className="topTop">
                            <div className="granjaCategoria">Al aire libre</div>
                            <div className="granjaCategoria tiempo">5 horas</div>
                            <div className="host">
                                <span className="fa fa-star checked rating"></span>
                                <span className="fa fa-star checked rating"></span>
                                <span className="fa fa-star checked rating"></span>
                                <span className="fa fa-star checked rating"></span>
                                <span className="fa fa-star rating"></span>
                            </div>
                        </div>
                        <div className='topMain'>
                            <p className="name">Hacienda Santa Lucía</p>
                            <div className="costo">
                                <p className="precio topPrecio">$3,500</p>
                                <div className="ubi topUbi">
                                    <svg className='ubiIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path d="M24,4C14.626,4,7,11.626,7,21c0,4.036,1.449,7.953,4.093,11.048c0.302,0.343,7.427,8.439,9.807,10.708	C21.769,43.585,22.884,44,24,44s2.231-0.415,3.101-1.244c2.767-2.639,9.524-10.385,9.82-10.725C39.551,28.953,41,25.036,41,21	C41,11.626,33.374,4,24,4z M24,26c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S26.761,26,24,26z" /></svg>
                                    <p className="granjaUbi">Alamo Gordo #1014, Los Alamos 32900, Juan Aldama, Chihuahua</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardActions topActions">
                            <button className="btnSave" onClick={addFavorite}>
                                <i className="heartContainerInfoCardMini" ref={btnHeart}></i>
                            </button>
                            <button className="btnReservar" onClick={showPopUp}>
                                Ver detalles
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}