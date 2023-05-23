import ResumenPanel from './ResumenPanel'
import ReservacionesPanel from './ReservacionesPanel'
import PreguntasPanel from './PreguntasPanel'
import OpinionesPanel from './OpinionesPanel'
import {getReservaciones} from '../../helpers/js/getReservaciones'
import { useState, useEffect } from 'react'
import CatalogoOpinar from '../home/CatalogoOpinar.jsx'
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
                <div className="panelBodyPanelStyle">
                    <div className="itemWelcomePanelStyle">
                        Hola Misael, aqui están tus reservaciones y/o reservaciones por confirmar
                    </div>
                    <div className="contenedor"></div>
                    <CatalogoOpinar
                        locations = {locations}  />
                </div>
            </div>
        </>
    )
}

export default PanelReservations;