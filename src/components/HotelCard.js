import styled from 'styled-components'
import { AiFillStar, AiFillHeart } from "react-icons/ai";

// import { HotelsContext } from '../context/ListHotel'
// import { useContext } from 'react'

const CardBox = styled.div `
margin-bottom: 10px;
background: #B7094C;
border-radius: 10px;
height: 100px;
display: flex;
justify-content: flex-start;
overflow: hidden;
`

const CardImage = styled.div `
background-image: url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/d2/af/hotel-r-de-paris.jpg?w=900&h=-1&s=1");
background-position: left;
background-size: cover;
width: 40%;
`

const CardContent = styled.div `
margin: 10px;
display: flex;
justify-content: space-between;
width: 60%;
`

const CardText = styled.div `
margin-top: 0;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const HotelStars = styled.div `
display: flex;
justify-content: flex-start;
`

const HotelCard = props => {
   
    return (
        <CardBox>
                <CardImage/>
                <CardContent> 
                    <CardText>
                        <h4>{props.name}</h4>
                        <p>{props.price}€</p>
                        <HotelStars>
                            {[...Array(props.stars)].map((i) => 
                                    <AiFillStar 
                                        size={14}
                                    />
                            )}
                        </HotelStars>
                    </CardText>
                    <AiFillHeart
                        size={24}
                    />
                </CardContent>
                
        </CardBox>
    );
};

export default HotelCard;