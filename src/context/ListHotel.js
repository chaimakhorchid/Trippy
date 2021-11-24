import { useEffect, useState, createContext, useContext } from "react";
import { CitiesContext } from "./ListCity";

const HotelsContext = createContext({});

const HotelsContextProvider = (props) => {
  const [ hotels, setHotels ] = useState(null);
  const [ centers, setCenters ] = useState(null)
  const { city } = useContext(CitiesContext);

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
    .then(res => res.json())
    .then(data => 
      setHotels(data.results),
      setCenters(data.center)
    )
  }, [city])

  const value = {
    hotels,
    centers
  };

  return (
    <HotelsContext.Provider value={value}>
      {props.children}
    </HotelsContext.Provider>
  );
};

export { HotelsContext, HotelsContextProvider };
