import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -31.402346181441352,
  lng: -64.19832284950544,
};


const Maps = () => {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDurh3NAbZlDfAvkFMc8hZMwPTnX5Bg6uA',
    libraries: ['geometry', 'drawing'],
  });

  return (
    <>
    {
      isLoaded ?
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
        ></GoogleMap>
        :
        <p>Mapa no encontrado</p>
    }
     
    </>
  );
};

export default Maps;
