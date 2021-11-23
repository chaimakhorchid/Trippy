// import { useContext } from 'react'

import styled from 'styled-components'
// import { HotelsContext } from '../context/ListHotel'

const Card = styled.div `
background: #B7094C;
border-radius: 15px;

`
// background-image: url("/img/hotels/${hotel.tripAdvisorId}_1.jpg"); 

const HotelCard = props => {
    // const { hotel, setHotel } = useContext(HotelsContext)

    return (
        <Card>
            {/* Props image
            {hotel.name}
            {hotel.price}
            {hotel.stars} */}
        </Card>
    );
};

export default HotelCard;