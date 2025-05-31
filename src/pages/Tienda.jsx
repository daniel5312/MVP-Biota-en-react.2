import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import products from "../data/products.js";
import NavbarApp from "../components/NavbarApp.jsx";

const Tienda = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("auth") === "true";
    const userStored = JSON.parse(localStorage.getItem("user"));

    if (!isLoggedIn || !userStored) {
      navigate("/login");
    }
  }, []);
  return (
    <>
    <NavbarApp />
    <div className="container mt-5">
      <h2>Tienda de Productos Orgánicos</h2>
      <div className="row mt-4">
        {products.map((producto) => (
          <div className="col-md-4 mb-4" key={producto.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="fw-bold">$ {producto.precio.toLocaleString()}</p>
                <Link to={`/producto/${producto.id}`} className="btn btn-success">
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Tienda;
