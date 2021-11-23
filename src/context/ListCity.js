import { useEffect, useState, createContext } from "react"

const CityContext = createContext({})

const CityContextProvider = props => {
  const [ city, setCity ] = useState(null)

  useEffect(() => {
    fetch('https://trippy-konexio.herokuapp.com/api/home')
    .then(res => res.json())
    .then(data => 
      // console.log(data.cities)
      setCity(data.cities)
    )
  }, [])
    
  console.log(city)

  if(!city){
    return <p>Loading...</p>
  }

    const value = {
      city
    }

  return(
    <CityContext.Provider value={value}>
      {props.children}
    </CityContext.Provider>
  )
}

export {
  CityContext,
  CityContextProvider,
}