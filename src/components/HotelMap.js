import { useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import styled from 'styled-components'
import { HotelsContext } from "../context/ListHotel";
// import HotelMarker from "./HotelMarker";

const MapContainer = styled.div`
  height: 500px;
  width: 500px;

  @media-query(min-width: 360px) {
    height: calc(100vh - 70px);
    width: 50%;
  }
`

const Map = () => {
  const { centers } = useContext(HotelsContext)

  if (!centers) {
    return <p>Chargement...</p>;
  }

  // console.log(centers)

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={centers}
        defaultZoom={14}
      >

        {/* <Marker 
          lat={location.lat}
          lng={location.lng}
          marker='my-position'
        /> */}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
