import imagenGranja from '../../assets/img/g3.jpg'
import imagenUsuario from '../../assets/img/yo.jpg'


export const ReservacionesTarjetaPanel = () => {
    return (
        <>
            <div className="itemReservacionCardPanelStyle">
                <div className="itemReservacionCardPhotoPanelStyle">
                    <img src={imagenGranja} className="imgReservacionCardPanelStyle" />
                </div>

                <div className="itemReservacionCardNamePanelStyle">Casa Lucía</div>
                <div className="itemReservacionCardPhotoPanelStyle">
                    <img src={imagenUsuario} className="imgReservacionCard2PanelStyle" />
                </div>
                <div className="itemReservacionCardNameProfilePanelStyle">Adan Salazar</div>
                <div className="itemReservacionCardDatePanelStyle">24/09/23</div>
                <button className="btnReservacionCardPanelStyle" onClick={null}>Aceptar</button>
            </div>

        </>
    )
}

export default ReservacionesTarjetaPanel