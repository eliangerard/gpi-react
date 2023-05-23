import avatar from '../../assets/img/avatar.jpg'
import './CatalogoOpcionesSelfCard.css'

export const CatalogoOpinionesSelfCard = () => {
    return (
        <>
            <div className="itemOpinionCardPanelStyleSelf">
                <div className="itemOpinionBodyPanelStyle">
                    <div className="itemOpinionPhotoPanelStyle">
                        <img src={avatar} id="opinionPhotoPanelStyle" />
                    </div>

                    <div className="itemOpinionBodyTextPanelStyle">
                        <div className="itemOpinionTextHeaderPanelStyle">
                        <div className="itemOpinionTextDatePanelStyle">Elian Gerard</div>
                        <div className="itemOpinionStarsPanelStyle">⭐⭐⭐⭐⭐</div>
                    </div>
                        <div className="itemOpinionTextHeader2PanelStyle">
                            <div className="itemOpinionTextPerfilPanelStyle">15 de Mayo en Casa Lucía</div>
                        </div>
                    </div>
                </div>

                <div className="itemBodyReseñaPanelStyle">
                    <div className="itemOpinionTextReseñaPanelStyle">La doble moral es, a mi parecer, el problema ético más grave de la
                        sociedad cubana.
                        ¿Sabemos en verdad qué es la doble moral? Al menos sé que no se trata de una moral de uso
                        y otra de repuesto, como una muda de ropa. Más bien hablamos de la que adopta dos –o más-
                        caras, dos visiones, dos criterios, dos conductas ante la gente y las cosas.
                    </div>
                </div>

                <div className="itemLikeBodyPanelStyle">
                    <div className="btnLikePanelStyle"> 55 Likes </div>
                    <div className="btnDislikePanelStyle"> 30 Dislikes </div>
                </div>

            </div>
        </>
    )
}

export default CatalogoOpinionesSelfCard;