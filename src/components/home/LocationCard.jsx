import './LocationCard.css';
import { LocationFullCard } from './LocationFullCard';
import React, { useState, useRef } from 'react';

export const LocationCard = ({ id }) => {
	const [show, setShow] = useState(false);

	const btnHeart = useRef(null);

    const addFavorite = () => {
        const btnfavorite = btnHeart.current;
        console.log("Add Favorite");
        btnfavorite.classList.toggle( "press");
    }

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
					<div className="granjaCategoria">5 horas</div>
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
					{/* <p className="tiempo">5 horas</p> */}
				</div>
				<div className="ubi">
					<img className="ubiIcon" src="../src/assets/location.png" />
					<p className="granjaUbi">Alamo Gordo #1014, Los Alamos 32900, Juan Aldama, Chihuahua</p>
				</div>
				<div className="cardActions">
					<button className="btnSave">
					<i className="heartContainerInfoCardMini" onClick={addFavorite} ref={btnHeart}></i>
					</button>
					<button className="btnReservar" onClick={showPopUp}>
						Ver detalles
					</button>
				</div>
			</article>
		</>
	);
};

export default LocationCard;

