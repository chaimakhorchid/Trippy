import { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import ArrayImg from "./ArrayImg";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import HotelMap from "./HotelMap";
import { FavoritesContext } from "../context/Favorites";

const CardBox = styled.div`
  margin: 0px 20px 33px 0px;
  border-radius: 10px;
  height: 118px;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;

  :hover {
    background-color: #892b64;
  }
`;

const CardImage = styled.div`
  background-position: bottom;
  background-size: cover;
  width: 40%;
`;

const CardContent = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const CardText = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  h4 {
    font-family: "Abel", sans-serif;
  }
`;

const HotelStars = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Like = styled.div`
  margin: 10px;
  color: white;
`;

const HotelCard = (props) => {
  const { handleFavoriteCardClick, handleUnfavoriteCardClick, isFavorite } = useContext(FavoritesContext)
  const selectedHotel = props.selectedHotel;
  const src = props.image.find((picture) => ArrayImg.includes(picture));
  console.log("test src",src)
  const ref = useRef();

  useEffect(() => {
    if (props.id === selectedHotel._id) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedHotel, props.id]);

  console.log(props)

  return (
    <CardBox
      ref={ref}
      style={{
        background: `${props.id === selectedHotel._id ? "#892b64" : "#B7094C"}`,
      }}
    >
      <CardImage
        style={
          !src
            ? {
                backgroundImage: `url("https://media.istockphoto.com/vectors/hotel-room-summer-poster-suitcases-by-the-sea-the-beginning-of-the-vector-id1140467460?k=20&m=1140467460&s=612x612&w=0&h=TUDy8shxRenclm1fqDcvA7E9cFqzTHG9yVKpjtRRlHE=")`,
              }
            : {
                backgroundImage: `url("https://trippy-konexio.herokuapp.com/${src}")`,
              }
        }
      />
      <CardContent>
        <Link
          to={`/hotelpage/${props.id}`}
          style={{
            color: "white",
            textDecoration: "none",
            fontFamily: "Abel, sans-serif",
          }}
        >
          <CardText>
            <h4>{props.name}</h4>
            <h2>{props.price}€</h2>
            <HotelStars>
              {[...Array(props.stars)].map((i) => (
                <AiFillStar size={14} color={"yellow"} />
              ))}
            </HotelStars>
          </CardText>
            {/* <AiOutlineHeart size={24} /> */}
        </Link>
      </CardContent>
      {!isFavorite(props.id) ? 
        <Like 
          onClick={() => handleFavoriteCardClick(props.id)}
        >
          <AiOutlineHeart size={24} />
        </Like>
        :
        <Like
          onClick={() => handleUnfavoriteCardClick(props.id)}
        >
          <AiFillHeart size={24} />
        </Like>
      }
    </CardBox>
  );
};

export default HotelCard;

// {!favIcon ? (
//   <div onClick={props.handleFavoriteCardClick()}>
//     <AiOutlineHeart size={24} />
//   </div>
// ) : (
//   <div onClick={props.handleFavoriteCardClick()}>
//     <AiFillHeart size={24} />
//   </div>
// )}
