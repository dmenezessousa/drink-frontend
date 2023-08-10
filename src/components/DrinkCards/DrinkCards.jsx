import { useState, useEffect } from 'react'
import './DrinkCards.css'
import DrinkCard from '../DrinkCard/DrinkCard'
import { getDrink } from '../../services/drinks'

const DrinkCards = () => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    const fetchDrinks = async () => {
      const allDrinks = await getDrinks()
      setDrinks(allDrinks)
    }
    fetchDrinks()
  }, [])

  const CARDS = drinks
    .reverse()
    .map((drink, index) =>
      index < 8 ? (
        <ProductCard
          _id={drink._id}
          name={drink.name}
          imgURL={drink.imgURL}
          key={index}
        />
      ) : null
    )

  return (
    <div className='drink-cards'>
      <div className='latest'>LATEST</div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default DrinkCards
