
import { useEffect, useState } from 'react';
import { getProfile } from '../../helpers/js/getProfile'

export const ResumenPanel = () => {
    
    const [profile, setProfile] = useState({});
    const fetchProfile = async () => {
        const {result} = await getProfile(localStorage.getItem("id"));
        console.log(result);
        setProfile(result);
      }
      useEffect(() => {
        fetchProfile();
    }, [])
    return (
        <>
            <div className="itemWelcomePanelStyle">Bienvenido {profile.nombre+' '+profile.apellidos}</div>
            <div className="itemResumenPanelStyle">
                Resumen
                <div className="itemResumenBodyPanelStyle">
                    <div className="itemResumenCardPanelStyle">
                        <div className="itemResumenCardNumberPanelStyle">2</div>
                        Preguntas
                    </div>
                    <div className="itemResumenCardPanelStyle">
                        <div className="itemResumenCardNumberPanelStyle">1</div>
                        Opiniones
                    </div>
                    <div className="itemResumenCardPanelStyle">
                        <div className="itemResumenCardNumberPanelStyle">0</div>
                        Pendientes
                    </div>
                    <div className="itemResumenCardPanelStyle">
                        <div className="itemResumenCardNumberPanelStyle">2</div>
                        Reservas
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResumenPanel