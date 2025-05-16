import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Tienda from "./pages/Tienda";


const App = () => {
  return (
    <Routes>
      {/* Redirigir la raíz a /login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Ruta privada protegida */}
      <Route path="/tienda" element={<Tienda />} />

      <Route path="/home" element={<Home />} />


      {/* Si la ruta no existe */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
