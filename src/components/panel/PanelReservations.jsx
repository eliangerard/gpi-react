import ResumenPanel from './ResumenPanel'
import ReservacionesPanel from './ReservacionesPanel'
import PreguntasPanel from './PreguntasPanel'
import OpinionesPanel from './OpinionesPanel'
import {getReservaciones} from '../../helpers/js/getReservaciones'
import { useState, useEffect } from 'react'
import CatalogoOpiniones from './CatalogoOpinar.jsx'
import './PanelReservations.css'


export const PanelReservations = () => {
    const [locations, setLocations] = useState([]);

	const fetchReservaciones = async () => {
		const { result } = await getReservaciones(localStorage.getItem("id"));
		console.log(result);
		setLocations(result);
	}

	useEffect(() => {
		fetchReservaciones();
	}, []);
    return (
        <>
            <div className="panelBodyContainerMain">
                    <div className="itemWelcomePanelStyle">
                        Aqui están tus reservaciones pendientes y por calificar
                    </div>
                <div className="panelBodyPanelStyle">
                    <div className="contenedor"></div>
                    <CatalogoOpiniones
                        locations = {locations}
                        key = {location.id}  />
                </div>
            </div>
        </>
    )
}

export default PanelReservations;