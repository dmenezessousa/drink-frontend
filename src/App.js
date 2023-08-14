import { useState, useEffect } from "react";
import "./App.css";
import Drinks from "./screens/Drinks/Drinks.jsx";
import DrinkCreate from "./screens/DrinkCreate/DrinkCreate.jsx";
import DrinkEdit from "./screens/DrinkEdit/DrinkEdit.jsx";
import DrinkDetail from "./screens/DrinkDetail/DrinkDetail.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { verifyUser } from "./services/users.js";
import SignUp from "./screens/SignUp/SignUp.jsx";
import SignIn from "./screens/SignIn/SignIn.jsx";
import SignOut from "./screens/SignOut/SignOut.jsx";
import Favorites from "./screens/Favorites/Favorites.jsx"

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Drinks user={user} />} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route path="/sign-in" element={<SignIn  setUser={setUser} />} />
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
        <Route
          path="/add-drink"
          element={
            user ? <DrinkCreate user={user} /> : <Navigate to="/sign-up" />
          }
        />
        <Route
          path="/favorites" element={<Favorites user={user} />} />
        <Route
          path="/:id/edit"
          element={user ? <DrinkEdit user={user} /> : <Navigate to="/" />}
        />
        <Route path="/drinks/:id" element={<DrinkDetail user={user} />} />
      </Routes>
    </div>
  );
};

export default App;
