import { createContext, useState } from "react";

const FavoritesContext = createContext({})

const FavoritesContextProvider = props => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [])

  console.log(typeof favorites)

  function handleFavoriteCardClick(id) {
    const favorites = localStorage.getItem("favorites");

    if (!favorites) {
      localStorage.setItem("favorites", JSON.stringify([id]));
      setFavorites(JSON.stringify([id]))
    } else {
      let array = JSON.parse(favorites);
      array = [...array, id];
      localStorage.setItem("favorites", JSON.stringify(array));
      setFavorites(JSON.stringify(array))
    } 
  }

  function isFavorite(id) {
    const localStorageFavorites = localStorage.getItem("favorites")
		const favorites = JSON.parse(localStorageFavorites)
		if (favorites) {
      const fav = favorites.find(favorite => {
        return favorite === id
      })
      return fav
    } else {
      return false 
    }
  }

  function handleUnfavoriteCardClick(id) {
    const favorites = localStorage.getItem("favorites");
    let array = JSON.parse(favorites);
    const index = array.findIndex(element => {
      return element === id
    })
    array.splice(index, 1)

    localStorage.setItem("favorites", JSON.stringify(array));
    setFavorites(JSON.stringify(array))
  }

  const value = {
    handleFavoriteCardClick,
    handleUnfavoriteCardClick,
    isFavorite,
    favorites,
  }
  
  return (
    <FavoritesContext.Provider value={value}>
      {props.children}
    </FavoritesContext.Provider>
  )
}

export {
  FavoritesContext,
  FavoritesContextProvider
}