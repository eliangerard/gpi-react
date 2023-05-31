import CatalogoOpinionesSelfCard from './CatalogoOpinionesSelfCard.jsx'

import { useState, useEffect } from 'react';

export const PanelReview = () => {
    const [locations, setLocations] = useState([]);

    const fetchOpiniones = async () => {
        const { result } = await getOpinionesMine(localStorage.getItem("id"));
        console.log(result);
        setLocations(result);
    }
    
    useEffect(() => {
        fetchOpiniones();
    },[])
    return(
        <>
        <div className="panelBodyContainerMainPublications">
                    <div className="itemWelcomePanelStylePublications">
                        Aqui están las opiniones sobre tus locaciones
                    </div>
                <div className="panelBodyPanelStyle">
                    <div className="contenedorSelfOpinionesCatalogo">
                        {locations.map(location => (
                                <CatalogoOpinionesSelfCard
                                    location={locations}
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