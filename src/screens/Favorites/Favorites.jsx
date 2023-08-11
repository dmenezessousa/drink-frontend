import { useState, useEffect } from "react";
import "./Favorites.css";
import { useNavigate } from "react-router-dom";
import { Layout, Search, Sort, Drink } from "../../components";
import { getFavDrinks, createFavDrink } from "../../services/favorites";

const Favorites = (props) => {

  let navigate = useNavigate()

  const [drink, setFavDrink] = useState({
    drinkName: '',
    drinkCategory: '',
    drinkInstructions: '',
    drinkAlcoholic: '',
    drinkGlassType: '',
    drinkImage: '',
    drinkMeasure1: '',
    drinkIngredient1: '',
    drinkMeasure2: '',
    drinkIngredient2: '',
    drinkMeasure3: '',
    drinkIngredient3: '',
    drinkMeasure4: '',
    drinkIngredient4: '',
    drinkMeasure5: '',
    drinkIngredient5: '',
    drinkMeasure6: '',
    drinkIngredient6: '',
    drinkMeasure7: '',
    drinkIngredient7: '',
    drinkMeasure8: '',
    drinkIngredient8: '',
    drinkMeasure9: '',
    drinkIngredient9: '',
    drinkMeasure10: '',
    drinkIngredient10: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFavDrink({
      ...drink,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createFavDrink(drink)
    navigate('/favorites')
  }
  const [drinks, setFavDrinks] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('name-ascending')

  useEffect(() => {
    const fetchDrinks = async () => {
      const allFavDrinks = await getFavDrinks()
      setFavDrinks(allFavDrinks)
      setSearchResult(allFavDrinks)
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

  const handleFavoriteSearch = (event) => {
    const results = drinks.filter((drink) =>
      drink.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(results)
    setApplySort(true)
  }

  const handleFavoriteSubmit = (event) => event.preventDefault()

  return (
    <>
      <Layout user={props.user}>
        <Search onSubmit={handleFavoriteSubmit} handleSearch={handleFavoriteSearch} />
        <Sort onSubmit={handleFavoriteSubmit} handleSort={handleSort} />
        <div className='drinks'>
          {/* {searchResult.map((drink, index) => { */}
          {drinks.map((drink, index) => {
            return (
              <Drink
                id={drink._id}
                drinkName={drink.drinkName}
                drinkImage={drink.drinkImage}
                drinkCategory={drink.drinkCategory}
                drinkInstructions={drink.drinkInstructions}
                drinkAlcoholic={drink.drinkAlcoholic}
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
      </Layout>
      <Layout user={props.user}>
        <form className='create-form' onSubmit={handleSubmit}>
          <input
            className='input-name'
            placeholder='Name'
            value={drink.drinkName}
            name='drinkName'
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className='input-image-link'
            placeholder='Image Link'
            value={drink.drinkImage}
            name='drinkImage'
            required
            onChange={handleChange}
          />
          <input
            className='input-category'
            placeholder='Category'
            value={drink.drinkCategory}
            name='drinkCategory'
            required
            onChange={handleChange}
          />
          <textarea
            className='textarea-instructions'
            rows={10}
            placeholder='Instructions'
            value={drink.drinkInstructions}
            name='drinkInstructions'
            required
            onChange={handleChange}
          />
          <input
            className='input-alcoholic'
            placeholder='Alcoholic'
            value={drink.drinkAlcoholic}
            name='drinkAlcoholic'
            required
            onChange={handleChange}
          />
          <input
            className='input-glass-type'
            placeholder='Glass type'
            value={drink.drinkGlassType}
            name='drinkGlassType'
            required
            onChange={handleChange}
          />
          <input
            className='input-ingredient-amount-first'
            placeholder='First ingredient amount'
            value={drink.drinkMeasure1}
            name='drinkMeasure1'
            required
            onChange={handleChange}
          />
          <input
            className='input-ingredient-first'
            placeholder='First ingredient'
            value={drink.drinkIngredient1}
            name='drinkIngredient1'
            required
            onChange={handleChange}
          />
          <input
            className='input-ingredient-amount-second'
            placeholder='Second ingredient amount'
            value={drink.drinkMeasure2}
            name='drinkMeasure2'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-second'
            placeholder='Second ingredient'
            value={drink.drinkIngredient2}
            name='drinkIngredient2'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-amount-third'
            placeholder='Third ingredient amount'
            value={drink.drinkMeasure3}
            name='drinkMeasure3'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-third'
            placeholder='Third ingredient'
            value={drink.drinkIngredient3}
            name='drinkIngredient3'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-amount-fourth'
            placeholder='Fourth ingredient amount'
            value={drink.drinkMeasure4}
            name='drinkMeasure4'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-fourth'
            placeholder='Fourth ingredient'
            value={drink.drinkIngredient4}
            name='drinkIngredient4'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-amount-fifth'
            placeholder='Fifth ingredient amount'
            value={drink.drinkMeasure5}
            name='drinkMeasure5'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-fifth'
            placeholder='Fifth ingredient'
            value={drink.drinkIngredient5}
            name='drinkIngredient5'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-amount-sixth'
            placeholder='Sixth ingredient amount'
            value={drink.drinkMeasure6}
            name='drinkMeasure6'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-sixth'
            placeholder='Sixth ingredient'
            value={drink.drinkIngredient6}
            name='drinkIngredient6'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-amount-seventh'
            placeholder='Seventh ingredient amount'
            value={drink.drinkMeasure7}
            name='drinkMeasure7'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-seventh'
            placeholder='Seventh ingredient'
            value={drink.drinkIngredient7}
            name='drinkIngredient7'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-amount-eighth'
            placeholder='Eighth ingredient amount'
            value={drink.drinkMeasure8}
            name='drinkMeasure8'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-eighth'
            placeholder='Eighth ingredient'
            value={drink.drinkIngredient8}
            name='drinkIngredient8'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-amount-ninth'
            placeholder='Ninth ingredient amount'
            value={drink.drinkMeasure9}
            name='drinkMeasure9'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-ninth'
            placeholder='Ninth ingredient'
            value={drink.drinkIngredient9}
            name='drinkIngredient9'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-amount-tenth'
            placeholder='Tenth ingredient amount'
            value={drink.drinkMeasure10}
            name='drinkMeasure10'
            onChange={handleChange}
          />
          <input
            className='input-ingredient-tenth'
            placeholder='Tenth ingredient'
            value={drink.drinkIngredient10}
            name='drinkIngredient10'
            onChange={handleChange}
          />
          <button type='submit' className='submit-button'>
            Submit
          </button>
        </form>
      </Layout>
    </>
  )
}

export default Favorites