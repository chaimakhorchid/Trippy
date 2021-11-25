import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from 'styled-components'
import HotelCard from '../components/HotelCard'
import HotelMap from '../components/HotelMap'


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
    const [ hotels, setHotels ] = useState(null);
    const [ center, setCenter ] = useState(null)
    const [ page, setPage ] = useState(1)
    let { city } = useParams()

    console.log("hotels", city)

  useEffect(() => {    
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}/?page=${page}`)
    .then(res => res.json())
    .then(data => {
      setHotels(data.results)
      setCenter(data.center)
    })
  }, [city, page])

  if (!center) {
    return <p>Chargement...</p>;
  }

    console.log("city:", city)

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
                <button onClick={() => setPage(1)} >1</button>
                <button onClick={() => setPage(2)} >2</button>
                <button onClick={() => setPage(3)} >3</button>
                <button onClick={() => setPage(4)} >4</button>

            </HotelsList>
            <HostelsMap>
                <HotelMap center={center}/>
            </HostelsMap>
           
        </Container>
    );
};

export default Hotels;