import './Panel.css'
import './PreguntasSelfPanel.css'
import Image1 from '../../assets/img/avatar.jpg'

export const PreguntasSelfPanel = () => {
    return (
        <>
            <div className="itemPreguntaCardPanelStyleAncha">
                <div className="itemPreguntaBodyPanelStyleAncha">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreguntasSelfPanel;
