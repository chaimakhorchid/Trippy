import styled from "styled-components";

const Marker = styled.div`
  height: 20px;
  background: #b7094c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid white;
  font-weight: bold;

  :hover {
    background-color: #892b64;
    border: 2px solid white;
  }

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
        width: `${props.map === 'list'? '40px' : '120px' }`,
        height: `${props.map === 'list'? '25px' : '70px' }`,
        padding: '2px',
      }}
      lat={props.lat}
      lng={props.lng}
    >
      {props.children}
    </Marker>

  );
};

export default HotelMarker;
