import { useState, useEffect } from 'react'
import './DrinkDetail.css'
import { Layout } from '../../components'
import { getDrink, deleteDrink } from '../../services/drinks'
import { useParams, Link } from 'react-router-dom'

const DrinkDetail = (props) => {
  const [drink, setDrink] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchDrink = async () => {
      const drink = await getDrink(id)
      setDrink(drink)
      setLoaded(true)
    }
    fetchDrink()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout user={props.user}>
      <div className='drink-detail'>
        <img
          className='drink-detail-image'
          src={drink.imgURL}
          alt={drink.name}
        />
        <div className='detail'>
          <div className='name'>{drink.name}</div>
          <div className='price'>{`$${drink.price}`}</div>
          <div className='description'>{drink.description}</div>
          <div className='button-container'>
            <Link className='edit-button' to={`/drinks/${drink._id}/edit`}>
              Edit
            </Link>
            <button
              className='delete-button'
              onClick={() => deleteDrink(drink._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DrinkDetail
