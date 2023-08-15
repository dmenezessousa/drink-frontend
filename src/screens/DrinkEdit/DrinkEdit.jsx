import { useState, useEffect } from 'react'
import './DrinkEdit.css'
import { useParams, useNavigate } from 'react-router-dom'
import { Layout } from '../../components'
import { getDrink, updateDrink } from '../../services/drinks'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const DrinkEdit = (props) => {

  let navigate = useNavigate()
  const notify = () => toast.success("Drink updated!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  const [drink, setDrink] = useState({
    drinkName: '',
    drinkCategory: '',
    drinkInstructions: '',
    drinkIsAlcoholic: '',
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
    drinkIngredient7: ''
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className='drink-edit'>
      <div className='image-container'>
          <img
            className='edit-drink-image'
            src={drink.drinkImage}
            alt={drink.drinkName}
          />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={drink.drinkImage}
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
          value={drink.drinkName}
          name='drinkName'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='input-info'
          placeholder='Category'
          value={drink.drinkCategory}
          name='drinkCategory'
          required
          onChange={handleChange}
        />
        <input
          className='input-info'
          placeholder='Alcoholic'
          value={drink.drinkIsAlcoholic}
          name='drinkIsAlcoholic'
          required
          onChange={handleChange}
          />
        <input
          className='input-info'
          placeholder='Glass type'
          value={drink.drinkGlassType}
          name='drinkGlassType'
          required
          onChange={handleChange}
          />
            <input
              className='input-info'
              placeholder='Extra ingredient'
              value={drink.drinkIngredient1}
              name='drinkIngredient1'
              required
              onChange={handleChange}
            />
            <input
              className='input-info'
              placeholder='Extra ingredient'
              value={drink.drinkIngredient2}
              name='drinkIngredient2'
              onChange={handleChange}
            />
            <input
              className='input-info'
              placeholder='Extra ingredient'
              value={drink.drinkIngredient3}
              name='drinkIngredient3'
              onChange={handleChange}
            />
            <input
              className='input-info'
              placeholder='Extra ingredient'
              value={drink.drinkIngredient4}
              name='drinkIngredient4'
              onChange={handleChange}
            />
            <input
              className='input-info'
              placeholder='Extra ingredient'
              value={drink.drinkIngredient5}
              name='drinkIngredient5'
              onChange={handleChange}
            />
            <input
              className='input-info'
              placeholder='Extra ingredient'
              value={drink.drinkIngredient6}
              name='drinkIngredient6'
              onChange={handleChange}
            />
          <input
            className='input-info'
            placeholder='Extra ingredient amount'
            value={drink.drinkMeasure1}
            name='drinkMeasure1'
            required
            onChange={handleChange}
          />
          <input
            className='input-info'
            placeholder='Extra ingredient amount'
            value={drink.drinkMeasure2}
            name='drinkMeasure2'
            onChange={handleChange}
          />
          <input
            className='input-info'
            placeholder='Extra ingredient amount'
            value={drink.drinkMeasure3}
            name='drinkMeasure3'
            onChange={handleChange}
          />
          <input
            className='input-info'
            placeholder='Extra ingredient amount'
            value={drink.drinkMeasure4}
            name='drinkMeasure4'
            onChange={handleChange}
          />
          <input
            className='input-info'
            placeholder='Extra ingredient amount'
            value={drink.drinkMeasure5}
            name='drinkMeasure5'
            onChange={handleChange}
          />
          <input
            className='input-info'
            placeholder='Extra ingredient amount'
            value={drink.drinkMeasure6}
            name='drinkMeasure6'
            onChange={handleChange}
          />
            <textarea
              className='textarea-instruction'
            rows={7}
            col={50}
              placeholder='Instructions'
              value={drink.drinkInstructions}
              name='drinkInstructions'
              required
              onChange={handleChange}
            />
          <div className='form-btn'>
            <button className='back-button'>
              <Link to={`/drinks/${id}`}></Link>  
              Back
            </button>
            <button
              type='submit'
              className='save-button'
              onClick={notify}
            >
                Save
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default DrinkEdit
