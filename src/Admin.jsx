import { useEffect } from 'react';
import LocationCardAdmin from './LocationCardAdmin'
import {getLocations} from './helpers/js/getLocations'
import { useState } from 'react';
import './components/home/HomeDisplay.css'

export const Admin = () => {
    
    const [locations, setLocations] = useState([]);

    const fetchLocations = async () => {
		const { result } = await getLocations(localStorage.getItem("id"), -1);
		console.log(result);
		setLocations(result);
	}
    useEffect(()=>{
        fetchLocations();
    }, []);
    return (
        <>
        <div id="catalogo">
        {
            locations.map(location=>{
                return <LocationCardAdmin 
                    id={location.idLocacion}
                    key={location.idLocacion}
                    {...location}
                />
            })
        }
        </div>
        </>
    )
}

export default Admin;