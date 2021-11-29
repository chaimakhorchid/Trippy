import React, { useEffect, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import HotelCard from '../components/HotelCard';
import { FavoritesContext } from '../context/Favorites';

const Favorites = () => {
  const [ listFavorite, setListFavorite ] = useState([])
  const { favorites } = useContext(FavoritesContext || [])

  useEffect(() => {
    const favoritesArray = favorites.map(favorite => {
      return fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${favorite}`)
    })

    Promise.all(favoritesArray)
    .then(values => Promise.all(values.map(value => value.json())))
    .then(results => {
      const upToDateResults = results.map(result => result.result)
      setListFavorite(upToDateResults)
      console.log(listFavorite)
    })
  }, [])

  
  

  return (
    <div>
          <h1>Favorites</h1>
          {listFavorite.map((favorite, index) => {
            <HotelCard 
              key={index}
              name={favorite.name}
              price={favorite.price}
              stars={favorite.stars}
              image={favorite.pictures}
              id={favorite._id}
              selectedHotel=""
            />
          })}
    </div>
  );
};

export default Favorites;