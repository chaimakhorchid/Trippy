import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import GoogleMapReact from "google-map-react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiFillStar,  AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaBath } from 'react-icons/fa'
import HotelMap from '../components/HotelMap';
import Icon from '../components/Icon';
import Carrousels from '../components/Carousel'
import { FavoritesContext } from "../context/Favorites";

const Container = styled.div`
@media (max-width: 376px) {
    display: flex;
    flex-direction: column;
}  
`
const HotelTitle = styled.div `
font-size: 20px;
margin : 40px;

h2 {
    text-align: end;
}
@media (max-width: 376px) {
margin: 0px 20px;
font-size: 30px;
}
`
const Favorites = styled.div`
margin-left: 610px;
position:absolute;
top: 29%;

@media (max-width: 376px) {
    position: static;
}
`

const HotelStars = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const MapContainer = styled.div `
width: 730px;
height: 650px;
margin: 30px;

@media (max-width: 376px) {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    
  }
`
  
const Card = styled.div `
margin: 30px 20px 33px 30px;
background: #B7094C;
border-radius: 10px;
height: 100px;
display: flow-root
justify-content: flex-start;
overflow: hidden;
width: 500px;
text-align: left;
padding: 30px 10px 0px 40px;
position:absolute;
top: 140%;
right: 6%;

:hover {
    background-color: #892B64;
}

@media (max-width: 376px) {
    background: #3F3260;
    order: -2;
    position: static;
    margin: 0px;
    padding: 5px;
    width: 100%;
    height: 300px;
    font-size : 20px;
    border-radius: 0px;
    border-top: 2px solid white;
    border-bottom: 2px solid white;

  }
`

const Commodities = styled.div`
  margin: 30px 20px 33px 30px;
  background: #b7094c;
  border-radius: 10px;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 460px;
  position: absolute;
  top: 180%;
  right: 6%;
  padding: 30px 40px 10px 40px;

:hover {
    background-color: #892B64;
}
@media (max-width: 376px) {
    position: static;
}

`
const Slider = styled.div `
@media (max-width: 376px) {
    order: -3;

`
const CardBox = styled.div`
  background: #b7094c;
  border-radius: 10px;
  height: 118px;
  width: 250px;
  margin: 10px;
  text-align: center;

  :hover {
    background-color: #892b64;
  }
`;

const Comm = styled.div`
  display: flex;
  margin: 10px;
  width: 200px;
  flex-direction: row;
  align-items: center;
`;

const IconAlign = styled.div``

const IconItem = styled.div`
  margin-left: -20px;
`

const BigCard = styled.div`
  overflow-x: scroll;
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

const HotelPage = () => {
    const { handleFavoriteCardClick, handleUnfavoriteCardClick, isFavorite} = useContext(FavoritesContext)
    const [infoHotel, setInfoHotel] = useState(null);
    const [listRoom, setListRoom] = useState(null);
    const id = useParams();
  //   const src = .find((picture) => ArrayImg.includes(picture));
	
  // console.log(id)

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id.id}`)
      .then((response) => response.json())
      .then((data) => {
        setInfoHotel(data.result);
        // console.log(data)
      });
  }, [id]);

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id.id}/rooms`)
      .then((response) => response.json())
      .then((data) => {
        setListRoom(data);
        // console.log(data)
      });
  }, [id]);

  
  //  console.log(center)
  if (infoHotel == null || listRoom == null) {
    return <p>Chargement en cours</p>;
  }

  return (
    <>
    <section>
        <Container>
        
        <HotelTitle>
            <h4>{infoHotel.name}</h4>
            <p>{infoHotel.address}</p>
            <h2>{infoHotel.price}€</h2>
            <HotelStars>
              {[...Array(infoHotel.stars)].map((i) => (
                <AiFillStar size={20} color={"yellow"} />
              ))}
            </HotelStars>
            {!isFavorite(infoHotel._id) ? (
              <Favorites 
								onClick={() => handleFavoriteCardClick(infoHotel._id)}
							>
                <AiOutlineHeart size={24} />
              </Favorites>
            ) : (
              <Favorites 
								onClick={() => handleUnfavoriteCardClick(infoHotel._id)}
							>
                <AiFillHeart size={24} />
              </Favorites>
            )}
        </HotelTitle>
        <Slider>
            <Carrousels/>
        </Slider>
        <MapContainer>
            <HotelMap
                map="page-hotel"
                hotels={[infoHotel]}
                center={infoHotel.location}
            />
            <Card>
                <h2>Informations :</h2>
                <p>
                    Tel : {infoHotel.phone} <br/>
                    Email : {infoHotel.email} <br/>
                    Website : {infoHotel.website}
                </p> 
            </Card>
            <Commodities> 
                <h2>Commodities :</h2>
                {infoHotel.commodities.filter(function(ele , pos){
                    return infoHotel.commodities.indexOf(ele) == pos;
                }).map((commoditie) => (
                <Comm>
                    <IconAlign>
                        <Icon comodity={commoditie}></Icon>
                    </IconAlign>
                    <IconItem>
                        <p>{commoditie}</p>
                    </IconItem>
                </Comm>
                ))} 
            </Commodities>
        </MapContainer> 
    
        <BigCard style={{ display: "flex", justifyContent:"space-around"}}>
        {listRoom.results.map(room =>
            <div style={{ width: "100%", height:"150px"}}>
                <CardBox>
                    <h4>Room</h4>
                    <p>People: {room.people}</p>
                    <p>{room.price}€</p>
                    {room.isBathroom ? <FaBath/> : <></>}
                </CardBox>    
            </div>      
        )}
        </BigCard>
      </Container>
   </section>
   </>
  )
}

export default HotelPage;
