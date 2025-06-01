import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";

const EditarProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [producto, setProducto] = useState(null);
  const [imagenArchivo, setImagenArchivo] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Cargar producto específico
  useEffect(() => {
    if (!user || user.rol !== "productor") {
      navigate("/home");
      return;
    }

    const productos = JSON.parse(localStorage.getItem("products")) || [];
    const encontrado = productos.find(p => p.id === parseInt(id));

    if (!encontrado || encontrado.productorId !== user.email) {
      navigate("/panel-productor");
    } else {
      setProducto(encontrado);
    }
  }, [id]);

  // Convertir archivo a base64
  const handleImagenChange = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagenArchivo(reader.result);
      };
      reader.readAsDataURL(archivo);
    }
  };

  // Actualizar producto
  const handleSubmit = (e) => {
    e.preventDefault();
    const productos = JSON.parse(localStorage.getItem("products")) || [];

    const actualizados = productos.map(p => {
      if (p.id === parseInt(id)) {
        return {
          ...p,
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          precio: Number(producto.precio),
          etapa: producto.etapa,
          fichaTecnica: producto.fichaTecnica,
          imagen: imagenArchivo || producto.imagen
        };
      }
      return p;
    });

    localStorage.setItem("products", JSON.stringify(actualizados));
    setMensaje("✅ Producto actualizado con éxito");

    setTimeout(() => {
      navigate("/panel-productor");
    }, 1500);
  };

  if (!producto) return null;

  return (
    <>
      <NavbarApp />
      <div className="container" style={{ maxWidth: "600px", marginTop: "2rem" }}>
        <h2>Editar Producto</h2>
        {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              value={producto.nombre}
              onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
            />
          </div>

          <div className="form-group mb-3">
            <label>Descripción:</label>
            <textarea
              className="form-control"
              value={producto.descripcion}
              onChange={(e) => setProducto({ ...producto, descripcion: e.target.value })}
            />
          </div>

          <div className="form-group mb-3">
            <label>Precio:</label>
            <input
              type="number"
              className="form-control"
              value={producto.precio}
              onChange={(e) => setProducto({ ...producto, precio: e.target.value })}
            />
          </div>

          <div className="form-group mb-3">
            <label>Etapa:</label>
            <input
              type="text"
              className="form-control"
              value={producto.etapa}
              onChange={(e) => setProducto({ ...producto, etapa: e.target.value })}
            />
          </div>

          <div className="form-group mb-3">
            <label>Ficha técnica:</label>
            <input
              type="text"
              className="form-control"
              value={producto.fichaTecnica}
              onChange={(e) => setProducto({ ...producto, fichaTecnica: e.target.value })}
            />
          </div>

          <div className="form-group mb-3">
            <label>Reemplazar imagen (opcional):</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImagenChange}
            />
          </div>

          {(imagenArchivo || producto.imagen) && (
            <img
              src={imagenArchivo || producto.imagen}
              alt="Vista previa"
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover", marginBottom: "1rem" }}
            />
          )}

          <button type="submit" className="btn btn-primary w-100">Actualizar producto</button>
        </form>
      </div>
    </>
  );
};

export default EditarProducto;
