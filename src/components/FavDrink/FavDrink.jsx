import './FavDrink.css';
import { Link } from 'react-router-dom'
import { deleteFavDrink } from '../../services/favorites';
import { useNavigate } from 'react-router-dom';


const FavDrink = (props) => {
  
  let navigate = useNavigate()
  async function removeDrinkFromFavorites() {
    try {
      await deleteFavDrink(props._id)
      navigate("/favorites")
    } catch (error) {
      throw error
    }
  }
    return (
        <>
        <div className="drink">
          <Link to={`/drinks/${props.id}`}>
            <img className="drink-image" src={props.drinkImage} alt={props.drinkName} />
          </Link>
          <div className="drink-name">{props.drinkName}</div>
          <button
            onClick={() => removeDrinkFromFavorites()}
          >
            Remove from Favorites
          </button>
        </div>
        </>
    )
}
export default FavDrink