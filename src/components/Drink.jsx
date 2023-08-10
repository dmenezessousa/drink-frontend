import { Link } from 'react-router-dom';

export default function Drink({ drink }) {
  return (
    <div>
      <Link to={`/drinks/${drink._id}`}>
        <img className='drink-images' src={drink.image} alt={drink.name} />
      </Link>
    </div>
  )
}