import React from "react";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Tienda from "./pages/Tienda";
import AgregarProducto from "./pages/AgregarProducto.jsx";
import ProductoDetalle from "./pages/ProductoDetalle.jsx";
import ProductorDetalle from "./pages/ProductorDetalle.jsx";
import PanelProductor from "./pages/PanelProductor.jsx";
import EditarProducto from "./pages/EditarProducto.jsx";
import UsuariosList from "./pages/UsuariosList";
import EditarUsuario from "./pages/EditarUsuario.jsx"
import Estadisticas from "./pages/Estadisticas";
import EstadisticasGraficas from "./pages/EstadisticasGraficas";


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
      <Route path="/estadisticas" element={<Estadisticas />} />
      <Route path="/estadisticas-graficas" element={<EstadisticasGraficas />} />
      <Route path="/agregar-producto" element={<AgregarProducto />} />  
      
      <Route path="/producto/:id" element={<ProductoDetalle />} />
      <Route path="/productor/:email" element={<ProductorDetalle />} />
      <Route path="/panel-productor" element={<PanelProductor />} />
      <Route path="/editar-producto/:id" element={<EditarProducto />} />
      <Route path="/usuarios" element={<UsuariosList />} />
      <Route path="/usuarios/editar/:id" element={<EditarUsuario />} />
      {/* Si la ruta no existe */}
      <Route path="*" element={<Navigate to="/login" />} />
      
    </Routes>
  );
};

export default App;
