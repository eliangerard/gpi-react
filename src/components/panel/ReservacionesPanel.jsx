import ReservacionesTarjetaPanel from "./ReservacionesTarjetaPanel";'./ReservacionesTarjetaPanel'

export const ReservacionesPanel = () => {
    return (
        <>
        <div className="itemReservacionPanelStyle">
        Reservaciones
        <ReservacionesTarjetaPanel/>
        <ReservacionesTarjetaPanel/>
        <ReservacionesTarjetaPanel/>
        <ReservacionesTarjetaPanel/>
        </div>
        </>
    )
}

export default ReservacionesPanel;