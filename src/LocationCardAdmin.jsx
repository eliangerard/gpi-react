
import React, { useState, useRef } from 'react';

function formatCurrency(value) {
	return new Intl.NumberFormat('es-MX', {
		style: 'currency', currency: 'MXN',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(value);
}

export const LocationCardAdmin = ({ id, nombre, costo, ruta, ubicacion, tiempo, enFavoritos }) => {
	const [show, setShow] = useState(false);
	const btnHeart = useRef(null);

	const addFavorite = async () => {
		const btnfavorite = btnHeart.current;
		console.log("Add Favorite");
		btnfavorite.classList.toggle("press");

		const result = await postFavorites(id, localStorage.getItem("id"));
		console.log(result);
	}

	const eliminarGranja = async (id) => {
        const response = await removePublication(id, localStorage.getItem("id"));
        console.log(response);        
    }
	return (
		<>
			<article className="granja">
				<img className="granjaImg" src={ruta} />
				<div className="granjaTop">
					<div className="granjaCategoria">Al aire libre</div>
					<div className="granjaCategoria tiempo">{parseInt(tiempo)/60} horas</div>
					<div className="host">
						<span className="fa fa-star checked rating"></span>
						<span className="fa fa-star checked rating"></span>
						<span className="fa fa-star checked rating"></span>
						<span className="fa fa-star checked rating"></span>
						<span className="fa fa-star rating"></span>
					</div>
				</div>
				<p className="name">{nombre}</p>
				<div className="costo">
					<p className="precio">{formatCurrency(costo)}</p>
					{/* <p className="tiempo">5 horas</p> */}
				</div>
				<div className="ubi">
					<svg className='ubiIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path d="M24,4C14.626,4,7,11.626,7,21c0,4.036,1.449,7.953,4.093,11.048c0.302,0.343,7.427,8.439,9.807,10.708	C21.769,43.585,22.884,44,24,44s2.231-0.415,3.101-1.244c2.767-2.639,9.524-10.385,9.82-10.725C39.551,28.953,41,25.036,41,21	C41,11.626,33.374,4,24,4z M24,26c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S26.761,26,24,26z" /></svg>
					<p className="granjaUbi">{ubicacion}</p>
				</div>
				<div className="cardActions">
					<button id={'location'+id} className="btnEliminarGrandis" onClick={eliminarGranja(id)}>
						Eliminar
					</button>
				</div>
			</article>
		</>
	);
};

export default LocationCardAdmin;

