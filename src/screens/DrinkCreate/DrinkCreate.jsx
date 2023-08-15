import { useState } from 'react'
import './DrinkCreate.css'
import { Layout } from '../../components'
import { useNavigate } from 'react-router-dom'
import { createDrink } from '../../services/drinks'

const DrinkCreate = (props) => {

  let navigate = useNavigate()

  const [drink, setDrink] = useState({
    drinkName: '',
    drinkCategory: '',
    drinkInstructions: '',
    drinkIsAlcoholic: '',
    drinkGlassType: '',
    drinkImage: '',
    drinkMeasure1: '',
    drinkIngredient1: '',
    drinkMeasure2: '',
    drinkIngredient2: '',
    drinkMeasure3: '',
    drinkIngredient3: '',
    drinkMeasure4: '',
    drinkIngredient4: '',
    drinkMeasure5: '',
    drinkIngredient5: '',
    drinkMeasure6: '',
    drinkIngredient6: '',
    drinkMeasure7: '',
    drinkIngredient7: '',
    drinkMeasure8: '',
    drinkIngredient8: '',
    drinkMeasure9: '',
    drinkIngredient9: '',
    drinkMeasure10: '',
    drinkIngredient10: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setDrink({
      ...drink,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createDrink(drink)
    navigate('/')
  }

  return (
    <Layout user={props.user}>
      <form className='create-form-drink' onSubmit={handleSubmit}>
        <label for="drinkName">Name</label>
        <input
          className='input-name-1'
          placeholder='Name'
          value={drink.drinkName}
          name='drinkName'
          required
          autoFocus
          onChange={handleChange}
        />
        <label className="image-label" for="drinkImage">Image Link</label>
        <input
          className='input-image-link'
          placeholder='Image Link'
          value={drink.drinkImage}
          name='drinkImage'
          required
          onChange={handleChange}
        />
        <label for="drinkCategory">Category</label>
        <input
          className='input-category'
          placeholder='Category'
          value={drink.drinkCategory}
          name='drinkCategory'
          required
          onChange={handleChange}
        />
        <label for="drinkIsAlcoholic">Alcholic</label>
        <input
          className='input-alcoholic'
          placeholder='Alcoholic'
          value={drink.drinkIsAlcoholic}
          name='drinkIsAlcoholic'
          required
          onChange={handleChange}
        />
        <label for="drinkGlassType">Glass type</label>
        <input
          className='input-glass-type'
          placeholder='Glass type'
          value={drink.drinkGlassType}
          name='drinkGlassType'
          required
          onChange={handleChange}
        />
        <label for="drinkMeasure1">First ingredient amount</label>
        <input
          className='input-ingredient-amount-first amount first'
          placeholder='First ingredient amount'
          value={drink.drinkMeasure1}
          name='drinkMeasure1'
          required
          onChange={handleChange}
        />
        <label for="drinkIngredient1">First ingredient</label>
        <input
          className='input-ingredient-first ingredient first'
          placeholder='First ingredient'
          value={drink.drinkIngredient1}
          name='drinkIngredient1'
          required
          onChange={handleChange}
        />
        <label for="drinkMeasure2">Second ingredient amount</label>
        <input
          className='input-ingredient-amount-second amount second'
          placeholder='Second ingredient amount'
          value={drink.drinkMeasure2}
          name='drinkMeasure2'
          onChange={handleChange}
        />
        <label for="drinkIngredient2">Second ingredient</label>
        <input
          className='input-ingredient-second ingredient second'
          placeholder='Second ingredient'
          value={drink.drinkIngredient2}
          name='drinkIngredient2'
          onChange={handleChange}
        />
        <label for="drinkMeasure3">Third ingredient amount</label>
        <input
          className='input-ingredient-amount-third amount third'
          placeholder='Third ingredient amount'
          value={drink.drinkMeasure3}
          name='drinkMeasure3'
          onChange={handleChange}
        />
        <label for="drinkIngredient3">Third ingredient</label>
        <input
          className='input-ingredient-third ingredient third'
          placeholder='Third ingredient'
          value={drink.drinkIngredient3}
          name='drinkIngredient3'
          onChange={handleChange}
        />
        <label for="drinkMeasure4">Fourth ingredient amount</label>
        <input
          className='input-ingredient-amount-fourth amount fourth'
          placeholder='Fourth ingredient amount'
          value={drink.drinkMeasure4}
          name='drinkMeasure4'
          onChange={handleChange}
        />
        <label for="drinkIngredient4">Fourth ingredient</label>
        <input
          className='input-ingredient-fourth ingredient fourth'
          placeholder='Fourth ingredient'
          value={drink.drinkIngredient4}
          name='drinkIngredient4'
          onChange={handleChange}
        />
        <label for="drinkMeasure5">Fifth ingredient amount</label>
        <input
          className='input-ingredient-amount-fifth amount fifth'
          placeholder='Fifth ingredient amount'
          value={drink.drinkMeasure5}
          name='drinkMeasure5'
          onChange={handleChange}
        />
        <label for="drinkIngredient5">Fifth ingredient</label>
        <input
          className='input-ingredient-fifth ingredient fifth'
          placeholder='Fifth ingredient'
          value={drink.drinkIngredient5}
          name='drinkIngredient5'
          onChange={handleChange}
        />
        <label for="drinkMeasure6">Sixth ingredient amount</label>
        <input
          className='input-ingredient-amount-sixth amount sixth'
          placeholder='Sixth ingredient amount'
          value={drink.drinkMeasure6}
          name='drinkMeasure6'
          onChange={handleChange}
        />
        <label for="drinkIngredient6">Sixth ingredient</label>
        <input
          className='input-ingredient-sixth ingredient sixth'
          placeholder='Sixth ingredient'
          value={drink.drinkIngredient6}
          name='drinkIngredient6'
          onChange={handleChange}
        />
        <label for="drinkMeasure7">Seventh ingredient amount</label>
        <input
          className='input-ingredient-amount-seventh amount seventh'
          placeholder='Seventh ingredient amount'
          value={drink.drinkMeasure7}
          name='drinkMeasure7'
          onChange={handleChange}
        />
        <label for="drinkIngredient7">Seventh ingredient</label>
        <input
          className='input-ingredient-seventh ingredient seventh'
          placeholder='Seventh ingredient'
          value={drink.drinkIngredient7}
          name='drinkIngredient7'
          onChange={handleChange}
        />
        <label for="drinkInstructions">Instructions</label>
        <textarea
          className='textarea-instructions'
          rows={5}
          placeholder='Instructions'
          value={drink.drinkInstructions}
          name='drinkInstructions'
          required
          onChange={handleChange}
        />
        <button type='submit' className='submit-button add-drink-button'>
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default DrinkCreate
