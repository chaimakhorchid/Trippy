import { useEffect, useState, createContext, useContext } from "react";
import { CityContext } from "./ListCity";

const HotelsContext = createContext({});

const HotelsContextProvider = (props) => {
  const [ hotels, setHotels ] = useState(null);
  const { city } = useContext(CityContext);

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
    .then(res => res.json())
    .then(data => 
      setHotels(data.results)
    )
  }, [city])
    
    console.log("liste",hotels)

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
