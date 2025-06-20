import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import staticProducts from "../data/products";
import NavbarApp from "../components/NavbarApp";

const ProductoDetalle = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [producto, setProducto] = useState(null);
    const [productor, setProductor] = useState(null);

    useEffect(() => {
    // Obtener productos adicionales
    const extras = JSON.parse(localStorage.getItem("products")) || [];
    const todos = [...staticProducts, ...extras];

    // Buscar producto por ID
    const encontrado = todos.find((p) => p.id === parseInt(id));

    if (!encontrado) {
      navigate("/tienda"); // Redirige si no existe
    } else {
      setProducto(encontrado);

      // Buscar al productor por email o ID
      const usuarios = JSON.parse(localStorage.getItem("users")) || [];
      const dueño = usuarios.find((u) => u.email === encontrado.productorId);
      setProductor(dueño || null);
    }
  }, [id, navigate]);

  if (!producto) return null;

  return (
    <>
      <NavbarApp />
      <div className="container mt-5">
        <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />

        <h2>{producto.nombre}</h2>
        <p><strong>Descripción:</strong> {producto.descripcion}</p>
        <p><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>
        <p><strong>Etapa:</strong> {producto.etapa}</p>
        <p><strong>Ficha técnica:</strong> {producto.fichaTecnica}</p>

        {productor && (
            
          <>
            <hr />
            <h4>Productor</h4>
            <p><strong>Nombre:</strong> {productor.nombre}</p>
            <p><strong>Finca:</strong> {productor.finca}</p>
            <p><strong>Municipio:</strong> {productor.municipio}</p>
            <p><strong>Vereda:</strong> {productor.vereda}</p>
            <p><strong>Productos:</strong> {productor.productos}</p>
            <p><strong>Etapa:</strong> {productor.etapa}</p>
            <Link to={`/productor/${productor.email}`} className="btn btn-outline-info mt-3">
            Ver perfil del productor
            </Link>
          </>
          
        )}

        <Link to="/tienda" className="btn btn-outline-primary mt-4">Volver a la tienda</Link>
      </div>
    </>
  );
};

export default ProductoDetalle;