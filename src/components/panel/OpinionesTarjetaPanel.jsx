
export const OpinionesTarjetaPanel = () => {
    return (
        <>
            <div className="itemOpinionCard">
                <div className="itemOpinionBody">
                    <div className="itemOpinionPhoto">
                        <img src="src/avatar.jpg" id="opinionPhoto" />
                    </div>

                    <div className="itemOpinionBodyText">
                        <div className="itemOpinionTextHeader">
                            <div className="itemOpinionTextDate">15 de Mayo en</div>
                            <div className="itemOpinionTextPlace">Casa Lucía</div>
                        </div>
                        <div className="itemOpinionTextHeader2">
                            <div className="itemOpinionTextPerfil">Elian Gerard</div>
                            <div className="itemOpinionStars">⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                </div>

                <div className="itemBodyReseña">
                    <div className="itemOpinionTextReseña">La doble moral es, a mi parecer, el problema ético más grave de la
                        sociedad cubana.
                        ¿Sabemos en verdad qué es la doble moral? Al menos sé que no se trata de una moral de uso
                        y otra de repuesto, como una muda de ropa. Más bien hablamos de la que adopta dos –o más-
                        caras, dos visiones, dos criterios, dos conductas ante la gente y las cosas.
                    </div>
                </div>

                <div className="itemLikeBody">
                    <button className="btnLike"> 55 Likes </button>
                    <button className="btnDislike"> 30 Dislikes </button>
                </div>

            </div>
        </>
    )
}