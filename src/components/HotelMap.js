import GoogleMapReact from "google-map-react"
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
            map={props.map}
          >
            {props.map === "list" ? 
            <p>{hotel.price}€</p>
            :
            <div>
              <p>{hotel.name}</p>
              <p>{hotel.address}</p>
              <p>{hotel.price} €</p>
            </div>
            }
          </HotelMarker>
        ))}
      </GoogleMapReact>
  )
}

HotelMap.defaultProps = {
  setSelectedHotel : () => {},
  hotels : [],
  center : {
    lat: 48.856614,
    lon: 2.3522219
  } 
}

export default HotelMap
