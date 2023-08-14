import { useState, useEffect } from 'react'
import './DrinkDetail.css'
import { Layout } from '../../components'
import { getDrink, deleteDrink } from '../../services/drinks'
import { useParams, Link } from 'react-router-dom'
import { createFavDrink } from '../../services/favorites'
import { verifyUser } from '../../services/users'

const DrinkDetail = (props) => {
  const [drink, setDrink] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchDrink = async () => {
      console.log(id)
      const drink = await getDrink(id)
      setDrink(drink)
      setLoaded(true)
    }
    fetchDrink()
  }, [id])

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  async function addDrinkToFavorites(favDrink) {
    try {
      await createFavDrink({
        id: favDrink._id,
        drinkName: favDrink.drinkName,
        drinkImage: favDrink.drinkImage
      })
    } catch (error) {
      throw error
    }
  }
  
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout user={props.user}>
      <div className='drink-detail'>
        <img
          className='drink-detail-image'
          src={drink.drinkImage}
          alt={drink.drinkName}
        />
        <div className='detail'>
          <div className='name'>{drink.drinkName}</div>
          <p>{drink.drinkCategory}</p>
          <p>{drink.drinkIsAlcoholic}</p>
          <p>{drink.drinkGlassType}</p>
          <p>{drink.drinkMeasure1} {drink.drinkIngredient1}</p>
          <p>{drink.drinkMeasure2} {drink.drinkIngredient2}</p>
          <p>{drink.drinkMeasure3} {drink.drinkIngredient3}</p>
          <p>{drink.drinkMeasure4} {drink.drinkIngredient4}</p>
          <p>{drink.drinkMeasure5} {drink.drinkIngredient5}</p>
          <p>{drink.drinkMeasure6} {drink.drinkIngredient6}</p>
          <p>{drink.drinkMeasure7} {drink.drinkIngredient7}</p>
          <p>{drink.drinkMeasure8} {drink.drinkIngredient8}</p>
          <p>{drink.drinkMeasure9} {drink.drinkIngredient9}</p>
          <p>{drink.drinkMeasure10} {drink.drinkIngredient10}</p>
          <p>{drink.drinkInstructions}</p>
          <div className='button-container'>
            {user ?
              <Link className='edit-button' to={`/${drink._id}/edit`}>
              Edit
            </Link> : <></>}
            { user ?          <button
            className='favorite-button'
            onClick={() => addDrinkToFavorites(drink)}
          >
            Add to Favorites
          </button> : <></>}


          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DrinkDetail
