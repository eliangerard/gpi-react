import React, { useState, useEffect, useRef } from 'react';
import './LocationFullCard.css';
import SubmenuBar from './SubmenuBar';
import Carrousel from './Carrusel';
import InfoCard from './InfoCard';
import ReviewDisplay from './ReviewDisplay';
import QuestionsDisplay from './QuestionsDisplay';
import Calendary from './Calendary';
import Mapa from './Mapa';
import { getLocationByID } from '../../helpers/js/getLocations';
import { PreguntasDisplay } from './PreguntasDisplay';
import { postReservation } from '../../helpers/js/postReservation';
import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import placeholder from '../../assets/img/gpi_placeholder.png'

export const LocationFullCard = ({ id, closePop }) => {
	const [scrollHeight2, setScrollHeight2] = useState(0);
	const [show, setShow] = useState(false);
	const [locationData, setLocationData] = useState({});
	const [locationImages, setLocationImages] = useState([{
		image: '../../assets/img/gpi_placeholder.png',
		caption :"Loading"
	}]);

	const scrollViewer = useRef(null);
	const Gallery = useRef(null);
	const Review = useRef(null);
	const Ubication = useRef(null);
	const Calendar = useRef(null);

	let datedDate = "";

	const setDate = (date) => {
		datedDate = date;
	}

	const notify = () => toast.success('¡Reservación exitosa!', {
		position: "bottom-right",
		autoClose: 50000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	});
	const reservar = async () => {
		if (!datedDate) return;
		console.log(datedDate);
		const response = await postReservation(localStorage.getItem("id"), datedDate.toISOString(), id);
		console.log(response);
		notify();
		closePop();
	}

	const fetchLocation = async () => {
		const { result } = await getLocationByID(localStorage.getItem("id"), id);
		console.log(result);
		setLocationData(result.location);
		setLocationImages(result.images);
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

	return (<>

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
						reservar={reservar}
						{...locationData}
					/>
					<Carrousel id={id} imagenes={locationImages} />
					<InfoCard id={id} {...locationData} />
					<div className="wideCard2">
						<div className="wideCard" ref={Review}>
							<div className="segmentHeader">Reseñas</div>
							<ReviewDisplay qty={6} id={id} />
						</div>
						<div className="wideCard" ref={Review}>
							<div className="segmentHeader">Preguntas</div>
							<div className='wcPreguntas'>
								<PreguntasDisplay id={id} />

							</div>
						</div>
						<div className="wideCard" ref={Ubication}>
							<div className="segmentHeader">Ubicación</div>
							<Mapa id={id} {...locationData} />
						</div>
						<div className="wideCard" ref={Calendar}>
							<div className="segmentHeader">Fechas</div>
							<Calendary setDate={setDate} id={id} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
	);
};

export default LocationFullCard;
