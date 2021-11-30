import React, { useEffect, useState } from "react";
import { useContext } from "react/cjs/react.development";
import HotelCard from "../components/HotelCard";
import { FavoritesContext } from "../context/Favorites";
import styled from "styled-components";

const Card = styled.div`
  width: 900px;
  margin: 0 auto;

  @media (max-width: 376px) {
    width: 100vw;
    margin: 10px;
  }
`;

const Favorites = () => {
  const [listFavorite, setListFavorite] = useState([]);
  const { favorites } = useContext(FavoritesContext || []);

  useEffect(() => {
    const favoritesArray = favorites.map((favorite) => {
      return fetch(
        `https://trippy-konexio.herokuapp.com/api/hotels/${favorite}`
      );
    });

    Promise.all(favoritesArray)
      .then((values) => Promise.all(values.map((value) => value.json())))
      .then((results) => {
        const upToDateResults = results.map((result) => result.result);
        setListFavorite(upToDateResults);
      });
  }, []);
  console.log("listFavorite", listFavorite);

  if (listFavorite.length === 0) {
    return (
      <h3 style={{ textAlign: "center", margin: "10px 0" }}>
        There is no favorites
      </h3>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Favorites</h1>
      {listFavorite.map((favorite) => (
        <Card>
          <HotelCard
            key={favorite._id}
            name={favorite.name}
            price={favorite.price}
            stars={favorite.stars}
            image={favorite.pictures}
            id={favorite._id}
            selectedHotel=""
          />
        </Card>
      ))}
    </div>
  );
};

export default Favorites;
