import { useState } from "react";
import styled from "styled-components";

const Marker = styled.div`
  width: 35px;
  height: 20px;
  background: #b7094c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

`;

const HotelMarker = (props) => {
  return (
    <Marker
      onMouseEnter={() => {
        props.setSelectedHotel(props.hotel);
      }}
      onMouseLeave={() => {
        props.setSelectedHotel({});
      }}
      style={{
        width: "30px",
        height: "30px",
      }}
      lat={props.lat}
      lng={props.lng}
    >
      {props.price}
    </Marker>

  );
};

export default HotelMarker;
