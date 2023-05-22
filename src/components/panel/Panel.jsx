import FormularioAgregar from "./FormularioAgregar"
import HeaderPanel from './HeaderPanel'
import ResumenPanel from './ResumenPanel'
import ReservacionesPanel from './ReservacionesPanel'
import PreguntasPanel from './PreguntasPanel'
import OpinionesPanel from './OpinionesPanel'
import './Panel.css'

export const Panel = () => {
    return (
        <>
            <div className="panelBodyContainerMain">
                <HeaderPanel />
                <div className="panelBodyPanelStyle">
                    <div className="panel1PanelStyle">
                        <ResumenPanel />
                        <ReservacionesPanel />
                    </div>
                    <div className="panel2PanelStyle">
                        <PreguntasPanel />
                    </div>
                    <div className="panel3PanelStyle">
                        <OpinionesPanel />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Panel