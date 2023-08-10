import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/drinks">Drinks</NavLink>
      <NavLink to="/add-drink">Add New Drink</NavLink>
      {/* <NavLink to="/login">Login</NavLink> */}
    </nav>
  )
}