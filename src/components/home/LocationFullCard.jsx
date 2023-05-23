import React, { useState, useEffect, useRef } from 'react';
import './LocationFullCard.css';
import SubmenuBar from './SubmenuBar';
import Carrousel from './Carrusel';
import InfoCard from './InfoCard';
import ReviewDisplay from './ReviewDisplay';
import Calendary from './Calendary';
import Mapa from './Mapa';
import { getLocationByID } from '../../helpers/js/getLocations';

export const LocationFullCard = ({ id, closePop }) => {
	const [scrollHeight2, setScrollHeight2] = useState(0);
	const [show, setShow] = useState(false);
	const [locationData, setLocationData] = useState({});

	const scrollViewer = useRef(null);
	const Gallery = useRef(null);
	const Review = useRef(null);
	const Ubication = useRef(null);
	const Calendar = useRef(null);
	
	const fetchLocation = async () => {
		const { result } = await getLocationByID(localStorage.getItem("id"), id);
		console.log(result[0]);
		setLocationData(result[0])
	}

	useEffect(() => {
		fetchLocation();
	}, []);

	const selectButton = (height) => {
		const grueso = -40;
		const review = Review.current;
		const ubication = Ubication.current;
		const calendar = Calendar.current;
		if (height < review.offsetTop + grueso) {
			//El caso donde se pinta la galeria botón
			return ("gallery");
		} else if (height < ubication.offsetTop + grueso) {
			return ("review");
		} else if (height < calendar.offsetTop + grueso) {
			return ("ubication");
		} else if (height >= calendar.offsetTop + grueso) {
			return ("calendar");
		}

	}

	const moveToScroll = (moveToString) => {
		const review = Review.current;
		const ubication = Ubication.current;
		const calendar = Calendar.current;
		const contenedor = scrollViewer.current;

		if (moveToString === "galeria") {
			contenedor.scrollTo({
				top: 0,
				behavior: "smooth" // Agregar animación suave
			});
		} else if (moveToString === "resenas") {
			contenedor.scrollTo({
				top: review.offsetTop - 20,
				behavior: "smooth" // Agregar animación suave
			});
		} else if (moveToString === "ubicacion") {
			contenedor.scrollTo({
				top: ubication.offsetTop - 20,
				behavior: "smooth" // Agregar animación suave
			});
		} else if (moveToString === "fechas") {
			contenedor.scrollTo({
				top: calendar.offsetTop - 20,
				behavior: "smooth" // Agregar animación suave
			});
		}
	};
	const handleScroll = () => {
		const contenedor = scrollViewer.current;
		setScrollHeight2(contenedor.scrollTop);
	};


	useEffect(() => {

		scrollViewer.current.addEventListener('scroll', handleScroll);

		const timer = setTimeout(() => {
			setShow(true);
		}, 10);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className={`popup ${show ? 'show' : ''}`}>
			<div className="contenedorChueco" ref={scrollViewer}>
				<div className="tarjeta" ref={Gallery}>
					<SubmenuBar
						closePopUp={closePop}
						id={id}
						moveToScroll={moveToScroll}
						handleSroll={handleScroll}
						scrollHeight2={scrollHeight2}
						selectButton={selectButton}
						{...locationData}
					/>
					<Carrousel id={id} imagenes={locationData.ruta}/>
					<InfoCard id={id} {...locationData} />
					<div className="wideCard2">
						<div className="wideCard" ref={Review}>
							<div className="segmentHeader">Reseñas</div>
							<ReviewDisplay qty={6} id={id} />
						</div>
						<div className="wideCard" ref={Ubication}>
							<div className="segmentHeader">Ubicación</div>
							<Mapa id={id} {...locationData} />
						</div>
						<div className="wideCard" ref={Calendar}>
							<div className="segmentHeader">Fechas</div>
							<Calendary id={id} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LocationFullCard;
