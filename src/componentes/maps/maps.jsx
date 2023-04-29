import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./stylesMaps.css";
import BeatLoader from "react-spinners/BeatLoader";

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
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDurh3NAbZlDfAvkFMc8hZMwPTnX5Bg6uA",
    libraries: ["geometry", "drawing"],
  });

  return (
    <>
      {!isLoaded ? (
        <div>
          <BeatLoader
            color="hsla(168, 0%, 97%, 1)"
            loading
            margin={7}
            size={20}
            />
            <p className="pSpinner">Cargando mapa</p>
        </div>
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
        ></GoogleMap>
      )}
    </>
  );
};

export default Maps;
