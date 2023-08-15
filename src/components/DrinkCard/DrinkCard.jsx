import './DrinkCard.css';
import { Link } from 'react-router-dom'

const DrinkCard = (props) => {
    return (
        <div className="drink-card">
            <Link className="drink" to={`/drinks/${props.id}`}>
                <img className="drink-card-image" src={props.drinkImage} alt={props.drinkName} />
                <div>View</div>
            </Link>
        </div>
    )
}

export default DrinkCard