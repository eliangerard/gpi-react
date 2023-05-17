import './SubmenuBar.css'

export const SubmenuBar = () => {
    <div className="wideCardBar navBar" id="navBar">
    <div className="halfCard2" id="level">
        <div className="btnContextN" id="btnReview">
            Reseñas
        </div>
        <div className="btnContextN" id="btnPlace">
            Lugar
        </div>
        <div className="btnContextN" id="btnCalendar">
            Fechas
        </div>
    </div>
    <div className="halfCard2" id="level2">
        <div className="message invisible" id="message">
            <div className="ratingMessage">
                4.7<span className="starMessage">&#9733;</span>
            </div>
            <div className="priceMessage">
                $14,000
            </div>
            <div className="hourMessage">
                / 5 horas
            </div>
        </div>
        <div className="btnLaunch" id="btnGo">
            Reservar
        </div>
    </div>
</div>
}

export default SubmenuBar