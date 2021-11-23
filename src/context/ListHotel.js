import { useEffect, useState, createContext, useContext } from "react"
import { CityContext, CityContextProvider } from "./ListCity"

const HotelsContext = createContext({})

const HotelsContextProvider = props => {
  const [ hotels, setHotels ] = useState(null)
  const city = 'paris'

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
    .then(res => res.json())
    .then(data => 
      setHotels(data)
    )
  }, [])
    
    const value = {
      hotels
    }

  return(
    <CityContextProvider>
      <HotelsContext.Provider value={value}>
        {props.children}
      </HotelsContext.Provider>
    </CityContextProvider>
  )
}

export {
  HotelsContext,
  HotelsContextProvider,
}