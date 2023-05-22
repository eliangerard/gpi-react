import React, {useRef} from 'react';
import {StandaloneSearchBox, LoadScript} from '@react-google-maps/api';

export const AdressAutocompleto = () => {
  const inputRef = useRef();

  const handleLocationSelect = () => {
    const [place] = inputRef.current.getPlaces();
    if(place) {
      console.log(place.formatted_address);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
    }
  };

  return (
    <>
    <LoadScript
      googleMapsApiKey='AIzaSyACbRlZvZFxy7YlH_G9JVzqxKKaJtURMBI'
      libraries={["places"]}
    >

    <StandaloneSearchBox
      onLoad={ref => (inputRef.current = ref)}
      onPlacesChanged = {handleLocationSelect}
    >
      <input
        type="text"
        className="in-txtFormularioAgregar" 
        placeholder="Dirección del lugar" 
      />
    </StandaloneSearchBox>
    </LoadScript>
    </>
    )
};

export default AdressAutocompleto;