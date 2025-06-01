import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";

const PanelProductor = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (!user || user.rol !== "productor") {
      navigate("/home");
    }

    const all = JSON.parse(localStorage.getItem("products")) || [];
    const propios = all.filter(p => p.productorId === user.email);
    setProductos(propios);
  }, []);

  return (
    <>
      <NavbarApp />
      <div className="container mt-5">
        <h2>Panel del Productor</h2>
        {productos.length === 0 ? (
          <p>No tienes productos registrados aún.</p>
        ) : (
          <div className="row">
            {productos.map(producto => (
              <div className="col-md-4 mb-4" key={producto.id}>
                <div className="card h-100">
                  <img
                    src={producto.imagen || "https://via.placeholder.com/300x200?text=Sin+imagen"}
                    alt={producto.nombre}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="fw-bold">${producto.precio}</p>
                    <Link to={`/editar-producto/${producto.id}`} className="btn btn-warning w-100">
                      Editar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PanelProductor;
