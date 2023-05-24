import {useState} from 'react';
import HeaderPanel from './HeaderPanel'
import HeaderPanelUser from './HeaderPanelUser'
import PanelHome from './PanelHome'

// Por hacer voy a comer jiji
import PanelReservations from './PanelReservations'
import PanelQuestions from './PanelQuestions'
import PanelReviews from './PanelReview'
import PanelMyLocations from './PanelMyLocations'
import { getHostLocations } from '../../helpers/js/getHostLocations';

import './Panel.css'
import { useEffect } from 'react';

export const Panel = () => {

    function isEmpty(obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            return false;
          }
        }
        return true;
      }

    const [currentView, setCurrentView] = useState('PanelHome');
    const [isDataEmpty, setIsDataEmpty] = useState(false);

    const fetchLocaciones = async () => {
        const { result } = await getHostLocations(localStorage.getItem("id"));
        console.log(result);
        
        setIsDataEmpty(isEmpty(result));
    }
    useEffect(()=>{
        fetchLocaciones();
    },[])

    const changeView = (view) => {
        setCurrentView(view);
    }

    const renderCurrentView = () => {
        switch (currentView) {
            case 'PanelHome':
                return <PanelHome 
                isDataEmpty = {isDataEmpty}/>
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
        {isDataEmpty ? <HeaderPanelUser setAdministrationView={changeView}/> : <HeaderPanel setAdministrationView={changeView}/>}
            {renderCurrentView()}
        </>
    )
}

export default Panel