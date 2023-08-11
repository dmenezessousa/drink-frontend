import { useState, useEffect } from "react";
import "./Favorites.css";
import { useNavigate } from "react-router-dom";
import { Layout, Drink } from "../../components";
import { getFavDrinks } from "../../services/favorites";


const Favorites = (props) => {

  let navigate = useNavigate()

  const [favDrinks, setFavDrinks] = useState([])

  useEffect(() => {
    const fetchFavDrinks = async () => {
      const allFavDrinks = await getFavDrinks()
      setFavDrinks(allFavDrinks)
    }
    fetchFavDrinks()
  }, [])

  return (

    <>
      <Layout user={props.user}>
        <div className='drinks'>
          {favDrinks.length && favDrinks.map((drink, index) => {
            return (
              <Drink
                id={drink._id}
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