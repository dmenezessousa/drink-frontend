import './DrinkCard.css';
import { Link } from 'react-router-dom'

const DrinkCard = (props) => {
    return (
        <div className="drink-card">
            <Link className="drink" to={`/drinks/${props._id}`}>
                <img className="drink-card-image" src={props.imgURL} alt={props.name} />
                <div>View</div>
            </Link>
        </div>
    )
}

export default DrinkCard