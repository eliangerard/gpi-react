import {useState} from 'react';
import HeaderPanel from './HeaderPanel'
import HeaderPanelUser from './HeaderPanelUser'
import PanelHome from './PanelHome'

// Por hacer voy a comer jiji
import PanelReservations from './PanelReservations'
import PanelQuestions from './PanelQuestions'
import PanelReviews from './PanelReview'
import PanelMyLocations from './PanelMyLocations'
import { getUserLocations } from '../../helpers/js/getUserLocations'

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


    const fetchHostLocations = async () => {
        const { result } = await getUserLocations(localStorage.getItem("id"));
        console.log(result);
        setIsDataEmpty(isEmpty(result));        
    }
    

    useEffect(()=>{
        fetchHostLocations();
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