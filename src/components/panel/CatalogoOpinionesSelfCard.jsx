import avatar from '../../assets/img/avatar.jpg'
import './CatalogoOpcionesSelfCard.css'
import '../panel/Panel.css'

export const CatalogoOpinionesSelfCard = ({location}) => {

    const fecha = location.fecha;
    const fechaParseada = new Date(fecha);

    const dia = fechaParseada.getUTCDate();
    
    const opcionesMes = {month: 'long'};
    const mesTexto = fechaParseada.toLocaleDateString('es-ES', opcionesMes).replace(/^\w/, (letra) => letra.toUpperCase());;

    return (
        <>
            <div className="itemOpinionCardPanelStyleSelf">
                <div className="itemOpinionBodyPanelStyle">
                    <div className="itemOpinionPhotoPanelStyle">
                        <img src={location.fotoPerfil} id="opinionPhotoPanelStyle" />
                    </div>

                    <div className="itemOpinionBodyTextPanelStyle">
                        <div className="itemOpinionTextHeaderPanelStyle">
                        <div className="itemOpinionTextDatePanelStyle">{location.nombre}</div>
                        <div className="itemOpinionStarsPanelStyle">{location.puntuacion}⭐</div>
                    </div>
                        <div className="itemOpinionTextHeader2PanelStyle">
                            <div className="itemOpinionTextPerfilPanelStyle">{dia} de {mesTexto} en {location.nombreGranja}</div>
                        </div>
                    </div>
                </div>

                <div className="itemBodyReseñaPanelStyle">
                    <div className="itemOpinionTextReseñaPanelStyle">{location.comentarios}
                    </div>
                </div>

                <div className="itemLikeBodyPanelStyle">
                    <div className="btnLikePanelStyle"> {location.reacciones} </div>
                    <div className="btnDislikePanelStyle"> {location.reaccionesTotales-location.reacciones} </div>
                </div>

            </div>
        </>
    )
}

export default CatalogoOpinionesSelfCard;