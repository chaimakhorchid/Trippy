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
  height: calc(100vh - 220px);
  @media (max-width: 426px) {
    flex-direction: column-reverse;
  }
`

const HotelsList = styled.div`
  margin: 0 5px;
  width: 50%;
  padding-right: 10px;
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

  @media (max-width: 426px) {
    width:100%;
    height: calc(100vh - 400px)
  }
`

const HotelsMap = styled.div`
  width: 50%;
  padding-right: 10px;

  @media (max-width: 426px) {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }
`

const Pages = styled.button`
  width: 25px;
  height: 25px;
  background: #2a6f97;
  border: none;
  border-radius: 5px;
  margin: 10px 15px;
  color: white;
  font-family: "Abel", sans-serif;

  :hover {
    background: #014f86;
    border: none;
  }
`;

const CenterPages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Hotels = () => {
  const [selectedHotel, setSelectedHotel] = useState({});
  const [hotels, setHotels] = useState(null);
  const [center, setCenter] = useState(null);
  const [page, setPage] = useState(1);
  let { city } = useParams();

  // console.log("hotels", city)

  useEffect(() => {
    fetch(
      `https://trippy-konexio.herokuapp.com/api/hotels/city/${city}/?page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHotels(data.results);
        setCenter(data.center);
      });
  }, [city, page]);


  if (!center) {
    return <p>Chargement...</p>;
  }

  return (
    <>
    <h1 style= {{ textAlign: "center", marginTop: "20px", fontFamily: "Abel", textTransform: "uppercase" }}>Hotels in {city}</h1>
        <Container>
        <HotelsList>
            {hotels == null ? (
            <p>En cours de chargement...</p>
            ) : (
            hotels.map((hotel, index) => (
                // <Link
                //   to={`/hotelpage/${hotel._id}`}
                //   style={{ textDecoration: "none" }}
                // >
                <HotelCard
                    key={index}
                    name={hotel.name}
                    price={hotel.price}
                    stars={hotel.stars}
                    image={hotel.pictures}
                    id={hotel._id}
                    selectedHotel={selectedHotel}
                />
                // </Link>
            ))
            )}
        </HotelsList>
        <HotelsMap>
            <HotelMap
            map="list"
            center={center}
            hotels={hotels}
            selectedHotel={selectedHotel}
            setSelectedHotel={setSelectedHotel}
            />
        </HotelsMap>
        </Container>
        <CenterPages>
            <Pages onClick={() => setPage(1)}>1</Pages>
            <Pages onClick={() => setPage(2)}>2</Pages>
            <Pages onClick={() => setPage(3)}>3</Pages>
            <Pages onClick={() => setPage(4)}>4</Pages>
        </CenterPages>
    </>
  );
};

export default Hotels;
