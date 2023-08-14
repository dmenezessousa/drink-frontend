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
    navigate('/drinks')
  }

  return (
    <Layout user={props.user}>
      <form className='create-form' onSubmit={handleSubmit}>
        <input
          className='input-name'
          placeholder='Name'
          value={drink.drinkName}
          name='drinkName'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='input-image-link'
          placeholder='Image Link'
          value={drink.drinkImage}
          name='drinkImage'
          required
          onChange={handleChange}
        />
        <input
          className='input-category'
          placeholder='Category'
          value={drink.drinkCategory}
          name='drinkCategory'
          required
          onChange={handleChange}
        />
        <input
          className='input-alcoholic'
          placeholder='Alcoholic'
          value={drink.drinkIsAlcoholic}
          name='drinkIsAlcoholic'
          required
          onChange={handleChange}
        />
        <input
          className='input-glass-type'
          placeholder='Glass type'
          value={drink.drinkGlassType}
          name='drinkGlassType'
          required
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-first'
          placeholder='First ingredient amount'
          value={drink.drinkMeasure1}
          name='drinkMeasure1'
          required
          onChange={handleChange}
        />
        <input
          className='input-ingredient-first'
          placeholder='First ingredient'
          value={drink.drinkIngredient1}
          name='drinkIngredient1'
          required
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-second'
          placeholder='Second ingredient amount'
          value={drink.drinkMeasure2}
          name='drinkMeasure2'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-second'
          placeholder='Second ingredient'
          value={drink.drinkIngredient2}
          name='drinkIngredient2'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-third'
          placeholder='Third ingredient amount'
          value={drink.drinkMeasure3}
          name='drinkMeasure3'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-third'
          placeholder='Third ingredient'
          value={drink.drinkIngredient3}
          name='drinkIngredient3'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-fourth'
          placeholder='Fourth ingredient amount'
          value={drink.drinkMeasure4}
          name='drinkMeasure4'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-fourth'
          placeholder='Fourth ingredient'
          value={drink.drinkIngredient4}
          name='drinkIngredient4'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-fifth'
          placeholder='Fifth ingredient amount'
          value={drink.drinkMeasure5}
          name='drinkMeasure5'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-fifth'
          placeholder='Fifth ingredient'
          value={drink.drinkIngredient5}
          name='drinkIngredient5'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-sixth'
          placeholder='Sixth ingredient amount'
          value={drink.drinkMeasure6}
          name='drinkMeasure6'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-sixth'
          placeholder='Sixth ingredient'
          value={drink.drinkIngredient6}
          name='drinkIngredient6'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-seventh'
          placeholder='Seventh ingredient amount'
          value={drink.drinkMeasure7}
          name='drinkMeasure7'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-seventh'
          placeholder='Seventh ingredient'
          value={drink.drinkIngredient7}
          name='drinkIngredient7'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-eighth'
          placeholder='Eighth ingredient amount'
          value={drink.drinkMeasure8}
          name='drinkMeasure8'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-eighth'
          placeholder='Eighth ingredient'
          value={drink.drinkIngredient8}
          name='drinkIngredient8'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-ninth'
          placeholder='Ninth ingredient amount'
          value={drink.drinkMeasure9}
          name='drinkMeasure9'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-ninth'
          placeholder='Ninth ingredient'
          value={drink.drinkIngredient9}
          name='drinkIngredient9'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-tenth'
          placeholder='Tenth ingredient amount'
          value={drink.drinkMeasure10}
          name='drinkMeasure10'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-tenth'
          placeholder='Tenth ingredient'
          value={drink.drinkIngredient10}
          name='drinkIngredient10'
          onChange={handleChange}
        />
        <textarea
          className='textarea-instructions'
          rows={10}
          placeholder='Instructions'
          value={drink.drinkInstructions}
          name='drinkInstructions'
          required
          onChange={handleChange}
        />
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default DrinkCreate
