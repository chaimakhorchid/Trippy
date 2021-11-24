import { useContext } from "react";
import GoogleMapReact from "google-map-react";
import styled from 'styled-components'
import { MapContext } from '../context/Map'
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
  const { location } = useContext(MapContext);

  if (!location) {
    return <p>Chargement...</p>;
  }

  console.log(location)

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
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
