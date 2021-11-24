import { useState, useContext } from "react";
import { HotelsContext } from '../context/ListHotel'

import styled from 'styled-components'
import HotelCard from '../components/HotelCard'
import ButtonPage from '../components/ButtonPage'


const Container = styled.div `
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 20px;
`

const HotelsList = styled.div `
width: 50%;
padding-right: 10px;
`

const HostelsMap = styled.div `
width: 50%;
overflow: hidden;
padding-left: 10px;
`


const Hotels = () => {
    const { hotels, setHotels } = useContext(HotelsContext)
    const { hover, setHover } = useState(false)

    return (
        <Container>
            <HotelsList>
                {hotels == null ? (
                    <p>En cours de chargement...</p>
                ):(
                    hotels.map(hotel => (
                        <HotelCard 
                            key={hotel.id} 
                            name={hotel.name} 
                            price={hotel.price} 
                            stars={hotel.stars}
                            image={hotel.pictures}
                        />
                    ))
                )}
                <button></button>
            </HotelsList>
            <HostelsMap>
                <img style={{ overflow: "hidden" }} src="https://docs.microsoft.com/fr-fr/azure/azure-maps/media/migrate-google-maps-web-app/simple-google-map.png" alt="googleMap"/>
            </HostelsMap>
           
        </Container>
    );
};

export default Hotels;