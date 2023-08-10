import Nav from './components/Nav.jsx';
import Home from './screens/Home.jsx';
import Drinks from './screens/Drinks.jsx';
import DrinkDetail from './screens/DrinkDetail.jsx';
import DrinkCreate from './screens/DrinkCreate.jsx';
import DrinkEdit from './screens/DrinkEdit.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/drinks/:id" element={<DrinkDetail />} />
        <Route path="/add-drink" element={<DrinkCreate />} />
        <Route path="/drinks/:id/edit" element={<DrinkEdit />} />
      </Routes>
    </div>
  )
}

export default App;
