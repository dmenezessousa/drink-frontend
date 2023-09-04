import { useState, useEffect } from 'react'
import './DrinkDetail.css'
import { Layout } from '../../components'
import { getDrink } from '../../services/drinks'
import { useParams, Link } from 'react-router-dom'
import { createFavDrink } from '../../services/favorites'
import { verifyUser } from '../../services/users'
import {ToastContainer, toast} from 'react-toastify';

const DrinkDetail = (props) => {
  const [drink, setDrink] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  const notify = () => toast.success("Drink added to favorites!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

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
      if(user.favoriteCocktails?.includes(favDrink._id)) {
        alert('Drink already in favorites')
        return
      } else {
        await createFavDrink({
          id: favDrink._id,
          drinkName: favDrink.drinkName,
          drinkImage: favDrink.drinkImage
        })
      }

    } catch (error) {
      throw error
    }
  }
  
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout user={props.user}>
      <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />
      <div className='drink-detail'>
        <img
          className='drink-detail-image'
          src={drink.drinkImage}
          alt={drink.drinkName}
        />
        <div className='detail'>
          <div className='name'>{drink.drinkName}</div>
          <div className='info'>{drink.drinkCategory}</div>
          <div className='info'>{drink.drinkIsAlcoholic}</div>
          <div className='info'>{drink.drinkGlassType}</div>
          <div className='info'>{drink.drinkMeasure1} {drink.drinkIngredient1}</div>
          <div className='info'>{drink.drinkMeasure2} {drink.drinkIngredient2}</div>
          <div className='info'>{drink.drinkMeasure3} {drink.drinkIngredient3}</div>
          <div className='info'>{drink.drinkMeasure4} {drink.drinkIngredient4}</div>
          <div className='info'>{drink.drinkMeasure5} {drink.drinkIngredient5}</div>
          <div className='info'>{drink.drinkMeasure6} {drink.drinkIngredient6}</div>
          <div className='info'>{drink.drinkMeasure7} {drink.drinkIngredient7}</div>
          <div className='instruction'>{drink.drinkInstructions}</div>
          <div className='button-container'>
            {user ?
              <Link className='edit-button' to={`/${drink._id}/edit`}>
              Edit
            </Link> : <></>}
            { user ? <button
            className='favorite-button'
              onClick={() => { addDrinkToFavorites(drink); notify(); }} 
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
