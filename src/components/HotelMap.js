// import { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import styled from 'styled-components'
// import HotelMarker from "./HotelMarker";

const MapContainer = styled.div`
  height: calc(100vh - 125px);
  width: 730px;

  @media-query(min-width: 360px) {
    height: calc(100vh - 500px);
    width: 100%;
  }
`

const HotelMap = props => {
  let center = props.center

  console.log("center:", center)

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{
          lat : center.lat,
          lng : center.lon
        }}
        defaultZoom={14}
      >

        {/* <Marker 
          lat={location.lat}
          lng={location.lng}
        /> */}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default HotelMap;
