import PreguntasSelfPanel from './PreguntasSelfPanel'
import {getOwnPreguntas} from '../../helpers/js/getOwnPreguntas'
import './PanelQuestions.css'
import { useState, useEffect } from 'react'

export const PanelQuestions = () => {
    const [locations, setLocations] = useState ([]);

    const fetchOwnPreguntas = async () => {
        const {result} = await getOwnPreguntas(localStorage.getItem("id"));
        console.log(result);
        setLocations(result);
    }

    useEffect(()=>{
        fetchOwnPreguntas();
    },[])
    return(
        <>
        <div className="panelBodyContainerMainQuestion">    
                 <div class="itemWelcomePanelStyle">
                    Estas son las preguntas que has realizado
                </div>           
            <div className="panelBodyPanelStyleQuestions">
                <div className="panel3PanelStyle">
                    {locations.map(location => (
                            <PreguntasSelfPanel
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

export default PanelQuestions;