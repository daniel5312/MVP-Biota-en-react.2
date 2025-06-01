import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import staticProducts from "../data/products";
import NavbarApp from "../components/NavbarApp";

const ProductorDetalle = () => {
  const { email } = useParams(); // email del productor
  const navigate = useNavigate();

  const [productor, setProductor] = useState(null);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const usuarios = JSON.parse(localStorage.getItem("users")) || [];
    const encontrado = usuarios.find((u) => u.email === email);

    if (!encontrado) {
      navigate("/tienda");
    } else {
      setProductor(encontrado);

      // Cargar productos que pertenezcan a ese productor
      const extras = JSON.parse(localStorage.getItem("products")) || [];
      const todos = [...staticProducts, ...extras];
      const productosFiltrados = todos.filter((p) => p.productorId === email);
      setProductos(productosFiltrados);
    }
  }, [email]);

  if (!productor) return null;

  return (
    <>
      <NavbarApp />
      <div className="container mt-5">
        <h2>Perfil del Productor</h2>
        <img
        src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
        alt="productor"
        style={{ width: "100px", borderRadius: "50%" }}
        />

        <p><strong>Nombre:</strong> {productor.nombre}</p>
        <p><strong>Finca:</strong> {productor.finca}</p>
        <p><strong>Municipio:</strong> {productor.municipio}</p>
        <p><strong>Vereda:</strong> {productor.vereda}</p>
        <p><strong>Productos:</strong> {productor.productos}</p>
        <p><strong>Etapa:</strong> {productor.etapa}</p>

        <hr />
        <h4>Productos del productor</h4>
        <div className="row mt-3">
          {productos.length === 0 ? (
            <p>Este productor aún no ha registrado productos.</p>
          ) : (
            productos.map((producto) => (
              <div className="col-md-4 mb-4" key={producto.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p>{producto.descripcion}</p>
                    <p><strong>${producto.precio.toLocaleString()}</strong></p>
                    <Link to={`/producto/${producto.id}`} className="btn btn-outline-success">
                      Ver producto
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <Link to="/tienda" className="btn btn-outline-secondary mt-4">Volver a la tienda</Link>
      </div>
    </>
  );
};

export default ProductorDetalle;
