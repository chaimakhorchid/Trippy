import { useEffect, useState, createContext, useContext } from "react"
import { HotelContextProvider } from './ListHotel'

const HotelContext = createContext({})

const HotelContextProvider = props => {
  const [ hotel, setHotel ] = useState(null)
  const id = props.id

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
    .then(res => res.json())
    .then(data => 
      setHotel(data.results)
    )
  }, [id])
    
    const value = {
      hotel
    }

  return(
    <HotelsContextProvider>
      <HotelContext.Provider value={value}>
        {props.children}
      </HotelContext.Provider>
    </HotelsContextProvider>
  )
}

export {
  HotelContext,
  HotelContextProvider,
}