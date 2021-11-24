import { useState } from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import ArrayImg from "./ArrayImg";
import { Link } from "react-router-dom";

const CardBox = styled.div`
  margin: 0px 20px 20px 0px;
  background: #b7094c;
  border-radius: 10px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
`;

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

const HotelCard = (props) => {
  const [favIcon, setFavIcon] = useState(false);
  const src = props.image.find((picture) => ArrayImg.includes(picture));

  return (
    <Link
      to={`/hotel/${props.id}`}
      style={{
        color: "white",
        textDecoration: "none",
        fontFamily: "Abel, sans-serif",
      }}
    >
      <CardBox>
        <CardImage
          style={
            !src
              ? {
                  backgroundImage: `url(https://www.egamaster.com/logo-no-image/logo-no-image.png)`,
                }
              : {
                  backgroundImage: `url(https://trippy-konexio.herokuapp.com/${src})`,
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
            onMouseEnter={() => {
              setFavIcon(true);
            }}
            onMouseLeave={() => {
              setFavIcon(false);
            }}
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
