import './Drink.css';
import { Link } from 'react-router-dom'

const Drink = (props) => {
    return (
        <>
            <Link className="drink" to={`/drinks/${props._id}`}>
                <img className="drink-image" src={props.imgURL} alt={props.name} />
                <div className="drink-name">{props.name}</div>
                <div className="drink">{`$${props.price}`}</div>
            </Link>
        </>
    )
}
export default Drink