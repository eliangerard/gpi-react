import {useState} from 'react';
import HeaderPanel from './HeaderPanel'
import PanelHome from './PanelHome'

// Por hacer voy a comer jiji
import PanelReservations from './PanelReservations'
import PanelQuestions from './PanelQuestions'
import PanelReviews from './PanelReview'
import PanelMyLocations from './PanelMyLocations'

import './Panel.css'

export const Panel = () => {

    const [currentView, setCurrentView] = useState('PanelHome');

    const changeView = (view) => {
        setCurrentView(view);
    }

    const renderCurrentView = () => {
        switch (currentView) {
            case 'PanelHome':
                return <PanelHome />
            case 'PanelReservations':
                return <PanelReservations />
            case 'PanelQuestions':
                return <PanelQuestions />
            case 'PanelReviews':
                return <PanelReviews />
            case 'PanelMyLocations':
                return <PanelMyLocations />
            default:
                return null;
        }
    };

    return (
        <>
            <HeaderPanel 
            setAdministrationView={changeView}
            />
            {renderCurrentView()}
        </>
    )
}

export default Panel