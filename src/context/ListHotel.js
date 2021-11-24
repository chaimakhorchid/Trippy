import { useEffect, useState, createContext, useContext } from "react";
import { CitiesContext } from "./ListCity";

const HotelsContext = createContext({});

const HotelsContextProvider = (props) => {
  const [ hotels, setHotels ] = useState(null);
  const { city } = useContext(CitiesContext);

  useEffect(() => {
    // const cityLowerCase = city.toLowerCase()
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city.toLowerCase()}`)
    .then(res => res.json())
    .then(data => 
      setHotels(data.results)
    )
  }, [city])
    
    console.log(typeof city, city)

  const value = {
    hotels,
  };

  return (
    <HotelsContext.Provider value={value}>
      {props.children}
    </HotelsContext.Provider>
  );
};

export { HotelsContext, HotelsContextProvider };
