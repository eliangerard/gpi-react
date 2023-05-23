import PreguntasSelfPanel from './PreguntasSelfPanel'
import './PanelQuestions.css'

export const PanelQuestions = () => {
    return(
        <>
        <div className="panelBodyContainerMain">    
                 <div class="itemWelcomePanelStyle">
                    Estas son las preguntas que has realizado
                </div>           
            <div className="panelBodyPanelStyle">
                <div className="panel3PanelStyle">
                <PreguntasSelfPanel/>
                <PreguntasSelfPanel/>
                <PreguntasSelfPanel/>
                <PreguntasSelfPanel/>
                </div>
            </div>
        </div>
        </>
    )
}

export default PanelQuestions;