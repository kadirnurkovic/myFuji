import React , {createContext, useState} from 'react'

const FavoritesList = createContext();

function FavoritesContextProvider({ children }) {
    const [favItems, setFavItems] = useState([]);

    const addToFavorites = (favoriteItem) => {
         setFavItems((prevItems) => {
          if (!prevItems.find((el) => el.id === favoriteItem.id && el.title === favoriteItem.title)) {
            return [...prevItems, {...favoriteItem}]}
          else{
               alert('This is already added on favorite')
               return [...prevItems]
          }
        })}
    const removeFromFav = (id, title) => {
        setFavItems((prev) => {
          return prev.filter((el) => el.id !== id || el.title !== title);
        });
      };
      const values = {
        favItems,
        setFavItems,
        addToFavorites,
        removeFromFav,
    }
    return(
        <FavoritesList.Provider value={values}>
            {children}
        </FavoritesList.Provider>
    )
}

export { FavoritesContextProvider, FavoritesList }



