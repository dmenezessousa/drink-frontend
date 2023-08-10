import { useState, useEffect } from 'react'
import './Drinks.css'

import { Layout, Drink, Search, Sort } from '../../components'
import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'
import { getDrinks } from '../../services/drinks'

const Drinks = (props) => {
  const [drinks, setDrinks] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('name-ascending')

  useEffect(() => {
    const fetchDrinks = async () => {
      const allDrinks = await getDrinks()
      setDrinks(allDrinks)
      setSearchResult(allDrinks)
    }
    fetchDrinks()
  }, [])

  const handleSort = (type) => {
    if (type !== '' && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case 'name-ascending':
        setSearchResult(AZ(searchResult))
        break
      case 'name-descending':
        setSearchResult(ZA(searchResult))
        break
      case 'price-ascending':
        setSearchResult(lowestFirst(searchResult))
        break
      case 'price-descending':
        setSearchResult(highestFirst(searchResult))
        break
      default:
        break
    }
  }

  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }

  const handleSearch = (event) => {
    const results = drinks.filter((drink) =>
      drink.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(results)
    setApplySort(true)
  }

  const handleSubmit = (event) => event.preventDefault()

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className='drinks'>
        {searchResult.map((drink, index) => {
          return (
            <Drink
              _id={drink._id}
              name={drink.name}
              imgURL={drink.imgURL}
              category={drink.category}
              instructions={drink.instructions}
              alcoholic={drink.alcoholic}
              glassType={drink.glassType}
              ingredientAmountFirst={drink.ingredientAmountFirst}
              ingredientFirst={drink.ingredientFirst}
              ingredientAmountSecond={drink.ingredientAmountSecond}
              ingredientSecond={drink.ingredientSecond}
              ingredientAmountThird={drink.ingredientAmountThird}
              ingredientThird={drink.ingredientThird}
              ingredientAmountFourth={drink.ingredientAmountFourth}
              ingredientFourth={drink.ingredientFourth}
              ingredientAmountFifth={drink.ingredientAmountFifth}
              ingredientFifth={drink.ingredientFifth}
              ingredientAmountSixth={drink.ingredientAmountSixth}
              ingredientSixth={drink.ingredientSixth}
              ingredientAmountSeventh={drink.ingredientAmountSeventh}
              ingredientSeventh={drink.ingredientSeventh}
              ingredientAmountEighth={drink.ingredientAmountEighth}
              ingredientEighth={drink.ingredientEighth}
              ingredientAmountNinth={drink.ingredientAmountNinth}
              ingredientNinth={drink.ingredientNinth}
              ingredientAmountTenth={drink.ingredientAmountTenth}
              ingredientTenth={drink.ingredientTenth}
              key={index}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Drinks
