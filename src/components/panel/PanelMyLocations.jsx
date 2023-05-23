import Catalogo from "../home/Catalogo";
import './PanelMyLocations.css'
import FormularioAgregar from './FormularioAgregar'

export const PanelMyLocations = () => {

    const locations = () => {
        //Las locaciones que sean publicadas por este usuario
    }
    
    return(
        <>
        <div className="panelBodyContainerMain">  
            <div className="agregarMasGranjasMyLocations">
                <FormularioAgregar/>
            </div>
        </div>
        </>
    )
}

export default PanelMyLocations;