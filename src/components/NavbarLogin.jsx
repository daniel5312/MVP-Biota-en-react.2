import React from "react";
import { Link, useNavigate } from "react-router-dom";
//import "./Sidebar.css"; // Estilos personalizados del sidebar

const NavbarLogin = () => {
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("auth"); // Elimina la sesión
    navigate("/login"); // Redirige al login
    
  };

  return (
    <div className="navbar">
      {/* Encabezado / logo */}
      <h2 className="navbar-title">
        <Link to="/login">Biota</Link>
      </h2>

      {/* Menú de navegación */}
      <nav className="navba-login">
        <button onClick={handleLogout} className="logout-btn">
            <Link to="/register"></Link>
          Register
        </button>
        <button onClick={handleLogout} className="logout-btn">
            <Link to="/Home"></Link>
         Login
        </button>
      </nav>
    </div>
  );
};

export default NavbarLogin;
