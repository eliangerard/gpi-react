
export const PreguntasTarjetaPanel = () => {
    return (
        <>
            <div className="itemPreguntaCardPanelStyle">
                <div className="itemPreguntaBodyPanelStyle">
                    <div className="itemPreguntaPhotoPanelStyle">
                        <img src="src/avatar.jpg" id="preguntaPhotoPanelStyle" />
                    </div>

                    <div className="itemPreguntaBodyTextPanelStyle">
                        <div className="itemPreguntaTextHeaderPanelStyle">
                            <div className="itemPreguntaTextPerfilPanelStyle">Elian Gerard,</div>
                            <div className="itemPreguntaTextDatePanelStyle">15 de Mayo en</div>
                            <div className="itemPreguntaTextPlacePanelStyle">Casa Lucía</div>
                        </div>
                        <div className="itemPreguntaTextQuestionPanelStyle">¿Me compras las flores mas bonitas del
                            condado?</div>
                    </div>
                </div>

                <div className="itemPreguntaBodyInputPanelStyle">
                    <div className="itemPreguntaInputPanelStyle">
                        <input className="inputRespuestaPanelStyle" type="textarea" placeholder="Responder..." id="respuestaPanelStyle"
                            name="inputRespuestaPanelStyle" />
                    </div>
                    <button className="btnRespuestaEnviarPanelStyle">
                        <img src="assets/img/send.png" id="btnRespuestaPanelStyle" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default PreguntasTarjetaPanel;