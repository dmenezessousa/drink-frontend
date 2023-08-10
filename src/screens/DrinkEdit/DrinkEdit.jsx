import { useState, useEffect } from 'react'
import './DrinkEdit.css'
import { useParams, useNavigate } from 'react-router-dom'
import { Layout } from '../../components'
import { getDrink, updateDrink } from '../../services/drinks'

const DrinkEdit = (props) => {

  let navigate = useNavigate()

  const [drink, setDrink] = useState({
    name: '',
    description: '',
    imgURL: '',
    price: '',
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
        <div className='image-container'>
          <img
            className='edit-drink-image'
            src={drink.imgURL}
            alt={drink.name}
          />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={drink.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
        </div>
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
            cols={78}
            placeholder='Description'
            value={drink.description}
            name='description'
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
