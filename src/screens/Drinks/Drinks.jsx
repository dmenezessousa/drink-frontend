import { useState, useEffect } from 'react'
import './Drinks.css'
import { Layout, Drink, Search, Sort } from '../../components'
import { AZ, ZA } from '../../utils/sort'
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
      drink.drinkName?.toLowerCase().includes(event.target.value.toLowerCase())
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
        {/* {searchResult.map((drink, index) => { */}
        {searchResult.map((drink, index) => {
          return (
            <Drink
              id={drink._id}
              drinkName={drink.drinkName}
              drinkImage={drink.drinkImage}
              drinkCategory={drink.drinkCategory}
              drinkInstructions={drink.drinkInstructions}
              drinkIsAlcoholic={drink.drinkIsAlcoholic}
              drinkGlassType={drink.drinkGlassType}
              drinkMeasure1={drink.drinkMeasure1}
              drinkIngredient1={drink.drinkIngredient1}
              drinkMeasure2={drink.drinkMeasure2}
              drinkIngredient2={drink.drinkIngredient2}
              drinkMeasure3={drink.drinkMeasure3}
              drinkIngredient3={drink.drinkIngredient3}
              drinkMeasure4={drink.drinkMeasure4}
              drinkIngredient4={drink.drinkIngredient4}
              drinkMeasure5={drink.drinkMeasure5}
              drinkIngredient5={drink.drinkIngredient5}
              drinkMeasure6={drink.drinkMeasure6}
              drinkIngredient6={drink.drinkIngredient6}
              drinkMeasure7={drink.drinkMeasure7}
              drinkIngredient7={drink.drinkIngredient7}
              drinkMeasure8={drink.drinkMeasure8}
              drinkIngredient8={drink.drinkIngredient8}
              drinkMeasure9={drink.drinkMeasure9}
              drinkIngredient9={drink.drinkIngredient9}
              drinkMeasure10={drink.drinkMeasure10}
              drinkIngredient10={drink.drinkIngredient10}
              key={index}
            />
          )
        })}
      </div>
    // </Layout>
  )
}

export default Drinks
