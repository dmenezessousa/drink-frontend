import { useState, useEffect } from 'react';
import { getDrink, deleteDrink } from '../services/drinks.js';
import { Link, useParams, useNavigate } from 'react-router-dom';


export default function DrinkDetail() {
  const [drink, setDrink] = useState({})
  let { id } = useParams()
  let navigate = useNavigate()
  useEffect(() => {
    fetchDrink()
  }, [])
  async function fetchDrink() {
    const oneDrink = await getDrink(id)
    setDrink(oneDrink)
  }
  async function handleDelete() {
    await deleteDrink(id)
    navigate("/drink")
  }
  return (
    <div>
      <h1>{drink.name}</h1>
      <img src={drink.image} alt={drink.name} />
      <p>{drink.category}</p>
      <p>{drink.glass}</p>
      <p>{drink.ingredient1}, {drink.ingredient2}, {drink.ingredient3}, {drink.ingredient4}, {drink.ingredient5}, and {drink.ingredient6}</p>
      <p>{drink.recipe}</p>
      <div>
        <Link to={`/drinks/${id}/edit`}> 
          <button>Edit Drink</button>
        </Link>
        <button onClick={handleDelete}>Delete Drink</button>
      </div>
    </div>
  )
}
