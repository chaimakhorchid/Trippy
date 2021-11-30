import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import HotelCard from "../components/HotelCard";
import HotelMap from "../components/HotelMap";


const TitlePage = styled.h1`
    text-align: center; 
    margin: 20px 20px;
    font-family: Abel;
    text-transform: uppercase; 

    @media (max-width: 376px) {
        order: 2;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 30px;
    height: calc(100vh - 240px);

    @media (max-width: 376px) {
    flex-direction: column-reverse;
    }
`

const HotelsList = styled.div`
    margin: 0 10px 0 0px;
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

    @media (max-width: 376px) {
    width:100%;
    height: calc(100vh - 400px)
    }
`

const HotelsMap = styled.div`
    width: 50%;

    @media (max-width: 376px) {
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
    margin: 20px 30px;
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
    <TitlePage>Hotels in {city}</TitlePage>
        <Container>
            <HotelsList>
                {hotels == null ? (
                <p>En cours de chargement...</p>
                ) : (
                hotels.map((hotel, index) => (
                    <HotelCard
                        key={index}
                        name={hotel.name}
                        price={hotel.price}
                        stars={hotel.stars}
                        image={hotel.pictures}
                        id={hotel._id}
                        selectedHotel={selectedHotel}
                    />
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
