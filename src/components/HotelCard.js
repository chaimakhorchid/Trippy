import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import ArrayImg from './ArrayImg'
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import HotelMap from "./HotelMap";


const CardBox = styled.div `
margin: 0px 20px 33px 0px;
border-radius: 10px;
height: 118px; 
display: flex;
justify-content: flex-start;
overflow: hidden;

:hover {
    background-color: #892B64;
}
`

const CardImage = styled.div`
  background-position: left;
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
  justify-content: space-between;

  h4 {
    font-family: "Abel", sans-serif;
  }
`;

const HotelStars = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const HotelCard = ( props ) => {
  const selectedHotel = props.selectedHotel
  const [favIcon, setFavIcon] = useState(false);
  const src = props.image.find((picture) => ArrayImg.includes(picture))
  const ref = useRef()



  useEffect(() => {
    if(props.id === selectedHotel._id) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [selectedHotel, props.id])

  return (
    <Link
      to={`/hotelpage/${props.id}`}
      style={{
        color: "white",
        textDecoration: "none",
        fontFamily: "Abel, sans-serif",
      }}
    >
      <CardBox ref={ref} style={{background: `${props.id === selectedHotel._id ? '#892b64' : '#B7094C' }`}}>
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
          <CardText>
            <h4>{props.name}</h4>
            <h2>{props.price}€</h2>
            <HotelStars>
              {[...Array(props.stars)].map((i) => (
                <AiFillStar size={14} color={"yellow"} />
              ))}
            </HotelStars>
          </CardText>
          <div
            onClick={props.handleCardClick()}
          >
            {!favIcon ? (
              <AiOutlineHeart size={24} />
            ) : (
              <AiFillHeart size={24} />
            )}
          </div>
        </CardContent>
      </CardBox>
    </Link>
  );
};

export default HotelCard;
