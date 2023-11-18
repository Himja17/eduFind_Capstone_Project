import React, { useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./GoogleMaps.scss";
import { useMemo } from "react";



const GoogleMaps = ({ getLocation }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDboueSziJD-BEL-QvTK1S3crS1vDBztk0",
  });
   const center = useMemo(
     () => ({
       lat: parseFloat(getLocation.latitude),
       lng: parseFloat(getLocation.longitude),
     }),
     [getLocation.latitude, getLocation.longitude]
    );
    
      const onLoad = (marker) => {
       
    };
    
  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={13}
        >
          <MarkerF onLoad={onLoad} position={center} />
        </GoogleMap>
      )}
    </div>
  );
};
export default GoogleMaps;
