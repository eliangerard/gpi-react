import ResumenPanel from './ResumenPanel'
import ReservacionesPanel from './ReservacionesPanel'
import PreguntasPanel from './PreguntasPanel'
import OpinionesPanel from './OpinionesPanel'
import { useState, useEffect } from 'react'
import CatalogoReservacionesEditar from './CatalogoOpinar.jsx'
import { getUserLocations } from '../../helpers/js/getUserLocations'
import './PanelReservations.css'


export const PanelReservations = () => {
    const [locations, setLocations] = useState([]);


	const fetchReservaciones = async () => {
		const { result } = await getUserLocations(localStorage.getItem("id"));
		console.log(result);
		setLocations(result);
	}

	useEffect(() => {
		fetchReservaciones();
	}, []);
    return (
        <>
            <div className="panelBodyContainerMainPublications">
                    <div className="itemWelcomePanelStylePublications">
                        Aqui están tus publicaciones
                    </div>
                <div className="panelBodyPanelStylePublications">
                    <div className="contenedorPublications"></div>
                    <CatalogoReservacionesEditar
                        locations = {locations}
                        key = {location.id}  />
                </div>
            </div>
        </>
    )
}

export default PanelReservations;