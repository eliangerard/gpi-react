import { useEffect } from 'react'
import './Catalogo.css'
import LocationCard from './LocationCard'
import { useState } from 'react'

export const Catalogo = () => {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        const fetchLocaciones = async () => {
            const {result} = await fetch("https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/locaciones")
                .then(response => response.json())
                setLocations(result);
        }
        fetchLocaciones();
    }, [])
    return (
        <>
            {
                locations.map(location => {
                    return <LocationCard
                        id={location.idLocacion}
                        key={location.idLocacion}
                        {...location}
                    />
                })
            }
        </>
    )
}

export default Catalogo