import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Import de la Navbar
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Restaurants from "./pages/Restaurants";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Ajout de la barre de navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
