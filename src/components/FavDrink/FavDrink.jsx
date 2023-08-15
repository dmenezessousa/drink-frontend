import './FavDrink.css';
import { Link } from 'react-router-dom'
import { deleteFavDrink } from '../../services/favorites';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const FavDrink = (props) => {
  
  let navigate = useNavigate()
  const notify = () => toast.error("Drink removed from favorites!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

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
        <div className="drink">
          <Link to={`/drinks/${props.id}`}>
            <img className="drink-image" src={props.drinkImage} alt={props.drinkName} />
          </Link>
          <div className="drink-name">{props.drinkName}</div>
          <button 
            className='remove-fav-button'
            onClick={() => { removeDrinkFromFavorites(); notify() }}
          >
            Remove from Favorites
          </button>
        </div>
        </>
    )
}
export default FavDrink