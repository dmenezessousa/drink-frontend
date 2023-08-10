import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createDrink } from '../services/drinks';

export default function DrinkCreate() {
  const [drink, setDrink] = useState({
    name: "",
    category: "",
    glass: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    ingredient6: "",
    recipe: "",
    image: "",
  })
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await createDrink(drink)
    navigate("/drink")
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setDrink((prevDrink) => ({
      ...prevDrink,
      [name]: value
    }))
  }
  return (
    <div>
      <h1>Add a Drink to the Database</h1>
      <form className='create-form' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add the drink's name"
          name="name"
          value={drink.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the drink's category"
          name="category"
          value={drink.category}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the drink's glass"
          name="glass"
          value={drink.glass}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the drink's first ingredient"
          name="ingredient1"
          value={drink.ingredient1}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the drink's second ingredient"
          name="ingredient2"
          value={drink.ingredient2}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the drink's third ingredient"
          name="ingredient3"
          value={drink.ingredient3}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the drink's fourth ingredient"
          name="ingredient4"
          value={drink.ingredient4}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the drink's fifth ingredient"
          name="ingredient5"
          value={drink.ingredient5}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the drink's sixth ingredient"
          name="ingredient6"
          value={drink.ingredient6}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the drink's recipe"
          name="recipe"
          value={drink.recipe}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the URL to an image of the drink"
          name="image"
          value={drink.image}
          onChange={handleChange}
        />
        <button type="submit">Create The Drink</button>
      </form>
    </div>
  )
}