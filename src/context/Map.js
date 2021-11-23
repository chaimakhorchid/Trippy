import { createContext, useEffect } from "react";

const MapContext = createContext({})

const MapContextProvider = props => {
  const [ locations, setLocations ] = useState(null)

  const value = {
    locations,
    setLocations,
  }  

  useEffect(() => {


  })

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