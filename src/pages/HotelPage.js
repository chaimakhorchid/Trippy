import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import GoogleMapReact from "google-map-react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaBath } from "react-icons/fa";
import HotelMap from "../components/HotelMap";
import Icon from "../components/Icon";
import Carrousels from "../components/Carousel";
import { FavoritesContext } from "../context/Favorites";

const Container = styled.div`
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
  }
`;
const HotelTitle = styled.div`
  font-size: 20px;
  margin: 40px;

  h2 {
    text-align: end;
  }
  @media (max-width: 376px) {
    margin: 10px 20px;
    font-size: 30px;
  }
`;
const Favorites = styled.div`
  margin-left: 500px;

  @media (max-width: 376px) {
    margin: 0px;
    text-align: right;
  }
`;

const HotelStars = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const InfoContainer = styled.div`
  width: calc(100% - 50px);
  height: 650px;
  margin: 30px;
  display: flex;
  flex-direction: row;

  @media (max-width: 376px) {
    width: calc(100% - 55px);
    height: 750px;
    margin-bottom: 20px;
    flex-direction: column;
  }
`;

const MapContainer = styled.div`
  width: calc(100% - 50px);
  height: 650px;

  @media (max-width: 376px) {
    width: 100%;
    height: 900px;
    order: 1;
  }
`;

const Card = styled.div`
  margin: 0px 20px 33px 30px;
  background: #b7094c;
  border-radius: 10px;
  height: 100px;
  display: flow-root;
  justify-content: flex-start;
  overflow: hidden;
  width: 460px;
  text-align: left;
  padding: 30px 40px 10px 40px;

  @media (max-width: 376px) {
    background: #3f3260;
    order: -2;
    position: none;
    margin: 0px;
    padding: 20px 0;
    width: 100%;
    height: fit-content;
    font-size: 20px;
    border-radius: 0px;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }
`;

const Commodities = styled.div`
  margin: 30px 20px 33px 30px;
  background: #b7094c;
  border-radius: 10px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  width: 460px;
  padding: 30px 40px 10px 40px;

  @media (max-width: 376px) {
    margin: 10px 0;
    background: #3f3260;
    padding: 0;
    width: 100%;
  }
`;
const Slider = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 50%;
  @media (max-width: 376px) {
    order: -3;
    width: 100%;
  }
`;
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
  @media (max-width: 376px) {
    width: 170px;
    height: 98px;
  }
`;

const Comm = styled.div`
  display: flex;
  margin: 10px;
  width: 200px;
  flex-direction: row;
  align-items: center;

  @media (max-width: 376px) {
    margin: 10px 0;
  }
`;

const IconItem = styled.div`
  margin-left: -20px;
`;
const BigCard = styled.div`
  display: flex;
  justifycontent: space-around;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b7094c;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

const BoxCard = styled.div`
  width: 100%;
  height: 150px;

  @media (max-width: 376px) {
    height: 120px;
  }
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 376px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const ListCommodities = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

const HotelPage = () => {
  const { handleFavoriteCardClick, handleUnfavoriteCardClick, isFavorite } =
    useContext(FavoritesContext);
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
            <Line>
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
              <h2>{infoHotel.price}€</h2>
            </Line>
          </HotelTitle>
          <Slider>
            <Carrousels image={infoHotel.pictures} />
          </Slider>
          <InfoContainer>
            <MapContainer>
              <HotelMap
                map="page-hotel"
                hotels={[infoHotel]}
                center={infoHotel.location}
              />
            </MapContainer>
            <div>
              <Card>
                <h2>Informations :</h2>
                <p>
                  <strong>Tel</strong> : {infoHotel.phone} <br />
                  <strong>Email</strong> : {infoHotel.email} <br />
                  <strong>Website</strong> :{" "}
                  <a href={infoHotel.website} style={{ color: "white" }}>
                    {infoHotel.website}
                  </a>
                </p>
              </Card>
              <Commodities>
                <h2>Commodities :</h2>
                <ListCommodities>
                  {infoHotel.commodities
                    .filter(function (ele, pos) {
                      return infoHotel.commodities.indexOf(ele) == pos;
                    })
                    .map((commoditie) => (
                      <Comm>
                        <div>
                          <Icon comodity={commoditie}></Icon>
                        </div>
                        <IconItem>
                          <p>{commoditie}</p>
                        </IconItem>
                      </Comm>
                    ))}
                </ListCommodities>
              </Commodities>
            </div>
          </InfoContainer>

          <BigCard>
            {listRoom.results.map((room) => (
              <BoxCard>
                <CardBox>
                  <h4>Room</h4>
                  <p>People: {room.people}</p>
                  <p>{room.price}€</p>
                  {room.isBathroom ? <FaBath /> : <></>}
                </CardBox>
              </BoxCard>
            ))}
          </BigCard>
        </Container>
      </section>
    </>
  );
};

export default HotelPage;
