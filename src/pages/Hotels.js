import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import HotelCard from "../components/HotelCard";
import HotelMap from "../components/HotelMap";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

const HotelsList = styled.div`
  width: 50%;
  padding-right: 10px;
  height: calc(100vh - 120px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b7094c;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

const HostelsMap = styled.div`
  width: 50%;
  overflow: hidden;
  padding-left: 10px;
`;

const Hotels = () => {
  const [hotels, setHotels] = useState(null);
  const [center, setCenter] = useState(null);
  let { city } = useParams();

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
      .then((res) => res.json())
      .then((data) => {
        setHotels(data.results);
        setCenter(data.center);
      });
  }, []);

  if (!center) {
    return <p>Chargement...</p>;
  }

  console.log("city:", city);

  return (
    <Container>
      <HotelsList>
        {hotels == null ? (
          <p>En cours de chargement...</p>
        ) : (
          hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              name={hotel.name}
              price={hotel.price}
              stars={hotel.stars}
              image={hotel.pictures}
              id={hotel._id}
            />
          ))
        )}
        <button></button>
      </HotelsList>
      <HostelsMap>
        <HotelMap center={center} />
      </HostelsMap>
    </Container>
  );
};

export default Hotels;
