import { useState } from "react";
import GoogleMapReact from "google-map-react";
import styled from 'styled-components'
// import HotelMarker from "./HotelMarker";

const MapContainer = styled.div`
  height: 500px;
  width: 500px;

  @media-query(min-width: 360px) {
    height: calc(100vh - 70px);
    width: 50%;
  }
`

const HotelMap = (props) => {

  const [selectedHotel, setSelectedHotel] = useState({})
  const hotels = props.hotels
  let center = props.center

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
