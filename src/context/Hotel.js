import { useEffect, useState, createContext, useContext } from "react"

const HotelContext = createContext({});

const HotelContextProvider = (props) => {
  const [hotel, setHotel] = useState(null);
  const id = props.id;

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
    .then(res => res.json())
    .then(data => 
      setHotel(data.results)
    )
  }, [id])

  const value = {
    hotel,
  };

  return (
    <HotelContext.Provider value={value}>
      {props.children}
    </HotelContext.Provider>
  );
};

export { HotelContext, HotelContextProvider };
