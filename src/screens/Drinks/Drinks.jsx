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
              price={drink.price}
              key={index}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Drinks
