import { createContext, useEffect, useContext, useState } from "react";
import { HotelsContext } from "./ListHotel";

const MapContext = createContext({})

const MapContextProvider = props => {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
      });
    } else {
      console.log("no position")
    }
  }, [])

  const value = {
    location,
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