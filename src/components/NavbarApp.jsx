import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavbarApp.css";

const NavbarApp = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/home" className="navbar-logo">
          Biota Orgánicos
        </Link>
        <Link to="/home" className="navbar-link">
          Home
        </Link>
        <Link to="/tienda" className="navbar-link">
          Tienda
        </Link>

        <Link to="/usuarios" className="nav-link">
          Lista de Usuarios
        </Link>

        {user?.rol === "productor" && (
        <Link className="navbar-link" to="/agregar-producto">
          Agregar Producto</Link>
        )}

        {user?.rol === "productor" && (
        <Link className="nav-link" to="/panel-productor">Mi Panel</Link>
        )}

      </div>
      
      <div className="navbar-right">
        {user && (
          <span className="navbar-user">
            Rol: <strong>{user.rol}</strong>
          </span>
        )}
        <button className="logout-btn" onClick={handleLogout}>
          Cerrar sesión
        </button>
        <Link to="/estadisticas" className="btn btn-info m-2">
          Ver Estadísticas
        </Link>
        <Link to="/estadisticas-graficas">📊 Ver Gráficas</Link>


      </div>
    </nav>
  );
};

export default NavbarApp;
