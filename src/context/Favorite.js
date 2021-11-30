import { createContext, useState } from "react";

const FavoriteContext = createContext({})

const FavoriteContextProvider = props => {
  const [favorite, setFavorite] = useState(false)

  const value = {
    favorite,
    setFavorite
  }

  return (
    <FavoriteContext.Provider value={value}>
      {props.children}
    </FavoriteContext.Provider>
  )

}

export {
  FavoriteContext,
  FavoriteContextProvider
}