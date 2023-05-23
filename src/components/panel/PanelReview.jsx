import CatalogoOpinionesSelfCard from './CatalogoOpinionesSelfCard.jsx'
import {getOwnOpiniones} from '../../helpers/js/getOwnOpiniones.js'
import { useState, useEffect } from 'react';

export const PanelReview = () => {
    const [locations, setLocations] = useState([]);

    const fetchOwnOpiniones = async () => {
        const { result } = await getOwnOpiniones(localStorage.getItem("id"));
        console.log(result);
        setLocations(result);
    }
    
    useEffect(() => {
        fetchOwnOpiniones();
    },[])
    return(
        <>
        <div className="panelBodyContainerMain">
                    <div className="itemWelcomePanelStyle">
                        Aqui están tus opiniones sobre lugares
                    </div>
                <div className="panelBodyPanelStyle">
                    <div className="contenedorSelfOpinionesCatalogo">
                        {locations.map(location => (
                                <CatalogoOpinionesSelfCard
                                location={location}
                                key={location.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PanelReview;