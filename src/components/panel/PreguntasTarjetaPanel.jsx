import Image1 from '../../assets/img/avatar.jpg'
import Image3 from '../../assets/img/send.png'


export const PreguntasTarjetaPanel = () => {
    return (
        <>
            <div className="itemPreguntaCardPanelStyle">
                <div className="itemPreguntaBodyPanelStyle">
                    <div className="itemPreguntaPhotoPanelStyle">
                        <img src={Image1} id="preguntaPhotoPanelStyle" />
                    </div>

                    <div className="itemPreguntaBodyTextPanelStyle">
                        <div className="itemPreguntaTextHeaderPanelStyle">
                            <div className="itemPreguntaTextPerfilPanelStyle">Elian Gerard,</div>
                            <div className="itemPreguntaTextDatePanelStyle">15 de Mayo en Casa Lucía</div>
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
                        <img src={Image3} id="btnRespuestaPanelStyle" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default PreguntasTarjetaPanel;