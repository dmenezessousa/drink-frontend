import { useState, useEffect } from "react";
import "./Favorites.css";

import Layout from "../../components/Layout/Layout.jsx";
import FavDrink from "../../components/FavDrink/FavDrink";
import { getFavDrinks } from "../../services/favorites";


const Favorites = (props) => {


  const [favDrinks, setFavDrinks] = useState([])

  useEffect(() => {
    const fetchFavDrinks = async () => {
      const allFavDrinks = await getFavDrinks()
      setFavDrinks(allFavDrinks)
    }
    fetchFavDrinks()
  }, [favDrinks])

  return (

    <>
      <Layout user={props.user}>
        <div className='drinks'>
          {favDrinks.length && favDrinks.map((drink, index) => {
            return (
              <FavDrink
                _id={drink._id}
                id={drink.id}
                drinkName={drink.drinkName}
                drinkImage={drink.drinkImage}
                key={index}
              />
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export default Favorites