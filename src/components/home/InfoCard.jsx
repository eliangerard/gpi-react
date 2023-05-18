import React from "react";
import './InfoCard.css'

export const InfoCard = () => {
    return (
        <>
            <div className="halfCardInfo">
                <div className="levelInfo">
                    <div className="nameInfo">
                        Granja la pascualita
                    </div>
                    <div className="heartInfo">
                        <img src="https://www.freeiconspng.com/uploads/love-heart-icon-14.png" className="imageInfo" />
                    </div>
                </div>
                <div className="levelInfo">
                    <div className="priceInfo">
                        $14,000
                    </div>
                    <div className="hoursInfo">
                        / 5 horas
                    </div>
                </div>
                <div className="levelInfo infoInfo">
                    <div className="informationInfo">
                        Granja en renta, ubicada en zona rural. Ideal para la producción de cultivos o
                        ganadería. Cuenta con 50 hectáreas, agua y electricidad. Acceso a carretera principal.
                        Precio accesible. Perfecta para agricultores o emprendedores en el sector agropecuario.
                        ¡Contáctanos para más información!
                    </div>
                </div>
                <div className="ownerPictureInfo">
                    <img src="https://i.redd.it/46fvg6u7r8151.jpg"/>
                </div>
                <div className="levelInfoRating">
                    <div className="ratingcounterInfo">
                        40 Opiniones
                    </div>
                    <div className="ratingstarsInfo">
                        <span className="star2Info">&#9733;</span>
                        <span className="star2Info">&#9733;</span>
                        <span className="star2Info">&#9733;</span>
                        <span className="star2Info">&#9733;</span>
                        <span className="starnonr2Info">&#9733;</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoCard