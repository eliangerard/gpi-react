import { GoogleMap, Circle, useLoadScript } from "@react-google-maps/api";
import "./Mapa.css";

const Mapa = ({id}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyACbRlZvZFxy7YlH_G9JVzqxKKaJtURMBI",
  });

  const center = { lat: 28.661941, lng: -106.007422 };
  const options = {
    strokeColor: "#000000AA",
    strokeOpacity: 1,
    fillColor: "#000000AA",
    fillOpacity: 0.4,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 400,
    zindex: 1,
  };

  const onLoad = (circle) => {
    console.log("Circle onLoad circle: ", circle);
  };

  const onUnmount = (circle) => {
    console.log("Circle onUnmount circle: ", circle);
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
          zoom={14}
        >
                  <Circle
        onLoad={onLoad}
        onUnmount={onUnmount}
        center={center}
        options={options}
        />Ä
        </GoogleMap>
      </>
      )}
    </div>
  );
};

export default Mapa;