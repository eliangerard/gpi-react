import { useState } from "react";
import Catalogo from '../home/Catalogo'
import ReservacionesTarjetaPanel from "./ReservacionesTarjetaPanel";'./ReservacionesTarjetaPanel'
import { getReservaciones } from "../../helpers/js/getReservaciones";
import { useEffect } from "react";

export const ReservacionesPanel = () => {

    const [locations, setLocations] = useState([]);

    const fetchMyReservations = async () => {
        const {result} = await getReservaciones(localStorage.getItem("id"));
        setLocations(result);
    }

    useEffect(() => {
        fetchMyReservations();
    }, []);

    return (
        <>
        <div className="itemReservacionPanelStyle">
        Reservaciones Activas
            <Catalogo 
                locations = {locations}
            />
        </div>
        </>
    )
}

export default ReservacionesPanel;