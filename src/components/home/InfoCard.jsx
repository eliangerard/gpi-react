import React, { useRef, useState } from "react";
import './InfoCard.css'
import { postFavorites } from "../../helpers/js/postFavorites";

export const InfoCard = ({ idLocacion, nombre, enFavoritos, costo, tiempo, ubicacion, aforo, descripcion, promedioPuntuacion, cantidadOpiniones, fotoPerfil }) => {
    const [stars, setStars] = useState([1, 1, 1, 1, 1]);
    function formatCurrency(value) {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency', currency: 'MXN',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    }

    const btnHeart = useRef(null);

    const addFavorite = async () => {
		const btnfavorite = btnHeart.current;
		console.log("Add Favorite");
		btnfavorite.classList.toggle("press");

		const result = await postFavorites(idLocacion, localStorage.getItem("id"));
		console.log(result);
	}

    return (
        <>
            <div className="halfCardInfo">
                <div className="levelInfo">
                    <div className="nameInfo">
                        {nombre}
                    </div>
                    <div className="heartInfo">
                        <div className="heartInfoContainer">
                            <i className={"heartContainerInfoCard " + (enFavoritos == 1 ? "press" : "")} onClick={addFavorite} ref={btnHeart}>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="levelInfo">
                    <div className="priceInfo">
                        {formatCurrency(costo)}
                    </div>
                    <div className="hoursInfo">
                        / {parseInt(tiempo) / 60} horas
                    </div>
                </div>
                <div className="levelInfoTimeCapacity">
                    <div className="aforoInfo">
                        🚹 {aforo} personas
                    </div>
                    <div className="horarioInfo">
                        ⌛ 19:00 - 5:00
                    </div>
                </div>
                <div className="levelInfo infoInfo">
                    <div className="informationInfo">
                        {descripcion}
                    </div>
                </div>
                <div className="levelInfoRating">
                    <div className="ownerPictureInfo">
                        <img src={fotoPerfil} />
                    </div>
                    <div className="ratingcounterInfo">
                        {cantidadOpiniones} Opiniones
                    </div>
                    <div className="ratingstarsInfo">
                        {
                            stars.map((element, i) => {
                                if ((i+1) > Math.round(promedioPuntuacion))
                                    return <span className="starnonr2Info">&#9733;</span>
                                else
                                    return <span className="star2Info">&#9733;</span>

                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoCard