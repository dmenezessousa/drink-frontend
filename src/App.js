import { useState, useEffect } from "react";
import "./App.css";
import Home from "./screens/Home/Home.jsx";
import Products from "./screens/Products/Products.jsx";
import ProductCreate from "./screens/ProductCreate/ProductCreate.jsx";
import ProductEdit from "./screens/ProductEdit/ProductEdit.jsx";
import ProductDetail from "./screens/ProductDetail/ProductDetail.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { verifyUser } from "./services/users.js";
import SignUp from "./screens/SignUp/SignUp.jsx";
import SignIn from "./screens/SignIn/SignIn.jsx";
import SignOut from "./screens/SignOut/SignOut.jsx";

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
        <Route path="/" element={<Home user={user} />} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
        <Route path="/products" element={<Products user={user} />} />
        <Route
          path="/add-product"
          element={
            user ? <ProductCreate user={user} /> : <Navigate to="/sign-up" />
          }
        />
        <Route
          path="/products/:id/edit"
          element={user ? <ProductEdit user={user} /> : <Navigate to="/" />}
        />
        <Route path="/products/:id" element={<ProductDetail user={user} />} />
      </Routes>
    </div>
  );
};

export default App;
