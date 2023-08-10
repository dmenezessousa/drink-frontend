import { useState, useEffect } from 'react';
import { getDrinks } from '../services/drinks.js'
import Drink from '../components/Drink.jsx'

export default function Drinks() {
  const [drinks, setDrinks] = useState([])
  useEffect(() => {
    fetchDrinks()
  }, [])
  async function fetchDrinks() {
    const allDrinks = await getDrinks()
    setDrinks(allDrinks)
  }
  return (
    <div>
      <h1>All the Drinks!</h1>
      <div className='drinks-container'>
        {drinks.map((drink) => (
          <Drink drink={drink} key={drink._id}/>
        ))}
      </div>
    </div>
  )
}