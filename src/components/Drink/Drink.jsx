import './Drink.css';
import { Link } from 'react-router-dom'

const Drink = (props) => {
    return (
        <>
            <Link className="drink" to={`/drinks/${props.id}`}>
                <img className="drink-image" src={props.drinkImage} alt={props.drinkName} />
                <div className="drink-name">{props.drinkName}</div>
            </Link>
        </>
    )
}
export default Drink