import { GoogleMap, Circle, useLoadScript } from "@react-google-maps/api";
import "./Mapa.css";

const Mapa = ({id, lat = 28.661941, lng = -106.007422}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyACbRlZvZFxy7YlH_G9JVzqxKKaJtURMBI",
  });

  const center = { lat: parseFloat(lat), lng: parseFloat(lng) };
  const options = {
    strokeColor: "#000000AA",
    strokeOpacity: 0.4,
    fillColor: "#000000AA",
    fillOpacity: 0.4,
    visible: true,
    radius: 1000,
    zindex: 1,
  };

  const onLoad = (circle) => {
  };

  const onUnmount = (circle) => {
  };

  return (
    <div className="Mapa">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
      <>  
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={13}
          options={{maxZoom:15}}
        >
        <Circle
        onLoad={onLoad}
        onUnmount={onUnmount}
        center={center}
        options={options}
        />
        </GoogleMap>
      </>
      )}
    </div>
  );
};

export default Mapa;