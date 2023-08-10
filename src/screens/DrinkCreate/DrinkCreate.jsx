import { useState } from 'react'
import './DrinkCreate.css'
import { Layout } from '../../components'
import { useNavigate } from 'react-router-dom'
import { createDrink } from '../../services/drinks'

const DrinkCreate = (props) => {

  let navigate = useNavigate()

  const [drink, setDrink] = useState({
    name: '',
    description: '',
    imgURL: '',
    price: '',
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
          value={drink.name}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='input-price'
          placeholder='Price'
          value={drink.price}
          name='price'
          required
          onChange={handleChange}
        />
        <textarea
          className='textarea-description'
          rows={10}
          placeholder='Description'
          value={drink.description}
          name='description'
          required
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
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default DrinkCreate
