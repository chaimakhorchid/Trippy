// import { useContext } from 'react'

import styled from 'styled-components'
// import { HotelsContext } from '../context/ListHotel'

const CardBox = styled.div `
background: #B7094C;
border-radius: 20px;
height: 100px;
background-image: url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/d2/af/hotel-r-de-paris.jpg?w=900&h=-1&s=1");
background-position: left;
background-size: 40%;
background-repeat: no-repeat;
`

const CardContainer = styled.div `
display: flex;
justify-content: flex-end;
padding-right: 10%;
`

const CardText = styled.div `
padding-right: 10%;
`


const HotelCard = () => {
    // const { hotel, setHotel } = useContext(HotelsContext)

    return (
        <CardBox>
            <CardContainer>
                    <CardText>
                        <h2>Nom Hotel</h2>
                        <p>Prix</p>
                        <h2>Stars</h2>
                    </CardText>
                    <div> 
                        <span className="material-icons-outlined">favorite</span>
                    </div>
            </CardContainer>
        </CardBox>
    );
};

export default HotelCard;