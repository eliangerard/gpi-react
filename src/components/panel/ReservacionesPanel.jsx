import { useState } from "react";
import Catalogo from '../home/Catalogo'
import ReservacionesTarjetaPanel from "./ReservacionesTarjetaPanel";'./ReservacionesTarjetaPanel'
import { getReservaciones } from "../../helpers/js/getReservaciones";
import { useEffect } from "react";
import LocationCard from "../home/LocationCard";
import './ReservacionesPanel.css';

export const ReservacionesPanel = () => {

    const [locations, setLocations] = useState([]);

    const fetchMyReservations = async () => {
        const {result} = await getReservaciones(localStorage.getItem("id"));
        setLocations(result);
        console.log(result);
    }

    useEffect(() => {
        fetchMyReservations();
    }, []);

    return (
        <>
        <div className="itemReservacionPanelStyle">
            Reservaciones Activas
            <div className="contenedorReservacionesPanelAuxiliarReservacionesActivas">
                        {locations.map(location => (
                            <LocationCard
                                id={location.id}
                                key={location.id}
                                {...location}
                            />
                        ))
                        }
                    </div>
        </div>
        </>
    )
}

export default ReservacionesPanel;