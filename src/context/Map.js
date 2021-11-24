import { createContext, useEffect } from "react";

const MapContext = createContext({})

const MapContextProvider = props => {
  const { hotel } = useContext(HotelContext)
  const [ locations, setLocations ] = useState({ lat: hotel.lat, lng: hotel.lng})

  const value = {
    locations,
  }  

  return (
    <MapContext.Provider value={value}>
      {props.children}
    </MapContext.Provider>
  )
}

export {
  MapContext,
  MapContextProvider
}