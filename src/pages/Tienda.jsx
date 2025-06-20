import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import staticProducts from "../data/products.js"; // productos del archivo
import NavbarApp from "../components/NavbarApp.jsx";
import "../styles/Product.css"

const Tienda = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);

  // Validar si hay usuario logueado
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("auth") === "true";
    const userStored = JSON.parse(localStorage.getItem("user"));

    if (!isLoggedIn || !userStored) {
      navigate("/login");
    }
  }, [navigate]);

  // Cargar productos (combinados)
  useEffect(() => {
    const extras = JSON.parse(localStorage.getItem("products")) || [];
    const combinados = [...staticProducts, ...extras];
    setProductos(combinados);
  }, []);

  return (
    <>
      <NavbarApp />
      <div className="container mt-5">
        <h2>Tienda de Productos Orgánicos</h2>
        <div className="row mt-4">
          {productos.map((producto) => (
            <div className="col-md-4 mb-4" key={producto.id}>
              <div className="card h-100">
                <div className="card-body">
                  <img src={producto.imagen} alt={producto.nombre} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">{producto.descripcion}</p>
                  <p className="fw-bold">$ {producto.precio.toLocaleString()}</p>
                  <Link to={`/producto/${producto.id}`} className="btn btn-success">
                    Ver más
                  </Link>
                  <Link to={`/perfil-productor/${producto.productor}`} className="btn"> Productores</Link>
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
