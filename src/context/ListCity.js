import { useEffect, useState, createContext } from "react";

const CitiesContext = createContext({});

const CitiesContextProvider = (props) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('https://trippy-konexio.herokuapp.com/api/home')
    .then(res => res.json())
    .then(data => 
      // console.log(data.cities)
      setCities(data.cities)
    )
  }, [])
    
  const value = {
    cities,
  };

  return (
    <CitiesContext.Provider value={value}>
      {props.children}
    </CitiesContext.Provider>
  );
};

export { CitiesContext, CitiesContextProvider };
