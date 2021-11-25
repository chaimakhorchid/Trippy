// import { useEffect, useState } from "react"
import GoogleMapReact from "google-map-react"
import { useState } from "react"
import styled from "styled-components"
import HotelMarker from "./HotelMarker"

const HotelMap = (props) => {
  const setSelectedHotel = props.setSelectedHotel
  const hotels = props.hotels
  let center = props.center
  
  return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{
          lat: center.lat,
          lng: center.lon,
        }}
        defaultZoom={12}
      >
        {hotels.map(hotel => (
          <HotelMarker 
            hotel={hotel}
            lat={hotel.location.lat}
            lng={hotel.location.lon}
            setSelectedHotel={setSelectedHotel}
            price={hotel.price}
          />
        ))}
      </GoogleMapReact>
  )
}

export default HotelMap
