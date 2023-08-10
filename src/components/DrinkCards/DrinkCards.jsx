import { useState, useEffect } from 'react'
import './DrinkCards.css'
import DrinkCard from '../DrinkCard/DrinkCard'
import { getDrinks } from '../../services/drinks'

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
        <DrinkCard
          id={drink.id}
          drinkName={drink.drinkName}
          drinkImage={drink.drinkImage}
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
