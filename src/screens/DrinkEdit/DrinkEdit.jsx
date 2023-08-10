import { useState, useEffect } from 'react'
import './DrinkEdit.css'
import { useParams, useNavigate } from 'react-router-dom'
import { Layout } from '../../components'
import { getDrink, updateDrink } from '../../services/drinks'

const DrinkEdit = (props) => {

  let navigate = useNavigate()

  const [drink, setDrink] = useState({
    name: '',
    category: '',
    instructions: '',
    alcoholic: '',
    glassType: '',
    imgURL: '',
    ingredientAmountFirst: '',
    ingredientFirst: '',
    ingredientAmountSecond: '',
    ingredientSecond: '',
    ingredientAmountThird: '',
    ingredientThird: '',
    ingredientAmountFourth: '',
    ingredientFourth: '',
    ingredientAmountFifth: '',
    ingredientFifth: '',
    ingredientAmountSixth: '',
    ingredientSixth: '',
    ingredientAmountSeventh: '',
    ingredientSeventh: '',
    ingredientAmountEighth: '',
    ingredientEighth: '',
    ingredientAmountNinth: '',
    ingredientNinth: '',
    ingredientAmountTenth: '',
    ingredientTenth: '',
  })

  let { id } = useParams()

  useEffect(() => {
    const fetchDrink = async () => {
      const drink = await getDrink(id)
      setDrink(drink)
    }
    fetchDrink()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setDrink({
      ...drink,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateDrink(id, drink)
    navigate(`/drinks/${id}`)
  }

  return (
    <Layout user={props.user}>
      <div className='drink-edit'>
        <form className='edit-form' onSubmit={handleSubmit}>
        <input
          className='input-name'
          placeholder='Name'
          value={drink.name}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='input-image-link'
          placeholder='Image Link'
          value={drink.imgURL}
          name='imgURL'
          required
          onChange={handleChange}
        />
        <input
          className='input-category'
          placeholder='Category'
          value={drink.category}
          name='category'
          required
          onChange={handleChange}
        />
        <textarea
          className='textarea-instructions'
          rows={10}
          placeholder='Instructions'
          value={drink.instructions}
          name='instructions'
          required
          onChange={handleChange}
        />
        <input
          className='input-alcoholic'
          placeholder='Alcoholic'
          value={drink.alcoholic}
          name='alcoholic'
          required
          onChange={handleChange}
        />
        <input
          className='input-glass-type'
          placeholder='Glass type'
          value={drink.glassType}
          name='glassType'
          required
          onChange={handleChange}
        />
        <input
           className='input-ingredient-amount-first'
           placeholder='First ingredient amount'
           value={drink.ingredientAmountFirst}
           name='ingredientAmountFirst'
           required
           onChange={handleChange}
        />
        <input
          className='input-ingredient-first'
          placeholder='First ingredient'
          value={drink.ingredientFirst}
          name='ingredientFirst'
          required
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-second'
          placeholder='Second ingredient amount'
          value={drink.ingredientAmountSecond}
          name='ingredientSecondAmount'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-second'
          placeholder='Second ingredient'
          value={drink.ingredientSecond}
          name='ingredientSecond'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-third'
          placeholder='Third ingredient amount'
          value={drink.ingredientAmountThird}
          name='ingredientAmountThird'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-third'
          placeholder='Third ingredient'
          value={drink.ingredientThird}
          name='ingredientThird'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-fourth'
          placeholder='Fourth ingredient amount'
          value={drink.ingredientAmountFourth}
          name='ingredientAmountFourth'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-fourth'
          placeholder='Fourth ingredient'
          value={drink.ingredientFourth}
          name='ingredientFourth'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-fifth'
          placeholder='Fifth ingredient amount'
          value={drink.ingredientAmountFifth}
          name='ingredientAmountFifth'
          onChange={handleChange}
        />
        <input
        className='input-ingredient-fifth'
        placeholder='Fifth ingredient'
        value={drink.ingredientFifth}
        name='ingredientFifth'
        onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-sixth'
          placeholder='Sixth ingredient amount'
          value={drink.ingredientAmountSixth}
          name='ingredientAmountSixth'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-sixth'
          placeholder='Sixth ingredient'
          value={drink.ingredientSixth}
          name='ingredientSixth'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-seventh'
          placeholder='Seventh ingredient amount'
          value={drink.ingredientAmountSeven}
          name='ingredientAmountSeventh'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-seventh'
          placeholder='Seventh ingredient'
          value={drink.ingredientSeven}
          name='ingredientSeventh'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-eighth'
          placeholder='Eighth ingredient amount'
          value={drink.ingredientAmountEighth}
          name='ingredientAmountEighth'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-eighth'
          placeholder='Eighth ingredient'
          value={drink.ingredientEighth}
          name='ingredientEighth'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-ninth'
          placeholder='Ninth ingredient amount'
          value={drink.ingredientAmountNinth}
          name='ingredientAmountNinth'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-ninth'
          placeholder='Ninth ingredient'
          value={drink.ingredientNinth}
          name='ingredientNinth'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-amount-tenth'
          placeholder='Tenth ingredient amount'
          value={drink.ingredientAmountTenth}
          name='ingredientAmountTenth'
          onChange={handleChange}
        />
        <input
          className='input-ingredient-tenth'
          placeholder='Tenth ingredient'
          value={drink.ingredientTenth}
          name='ingredientTenth'
          onChange={handleChange}
        />
        <input
          className='input-image-link'
          placeholder='Image Link'
          value={drink.imgURL}
          name='imgURL'
          required
          onChange={handleChange}
        />
        <button type='submit' className='save-button'>
            Save
        </button>
        </form>
      </div>
    </Layout>
  )
}

export default DrinkEdit
