import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";

const AgregarProducto = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // 🔐 Redirigir si no hay sesión o si no es productor
  useEffect(() => {
    if (!user || user.rol !== "productor") {
      navigate("/home");
    }
  }, [navigate, user]);

  // 🎯 Estados del formulario
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [etapa, setEtapa] = useState("");
  const [fichaTecnica, setFichaTecnica] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [imagen, setImagen] = useState(""); // Imagen por URL
  const [imagenArchivo, setImagenArchivo] = useState(""); // Imagen por archivo (base64)

  // 📷 Convertir archivo en base64
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

  // ✅ Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos
    if (!nombre || !descripcion || !precio || !etapa || !fichaTecnica) {
      setMensaje("Todos los campos son obligatorios.");
      return;
    }

    // 🧾 Crear nuevo producto
    const nuevoProducto = {
      id: Date.now(),
      nombre,
      descripcion,
      precio: Number(precio),
      etapa,
      fichaTecnica,
      productorId: user.email,
      imagen: imagenArchivo || imagen // 🖼️ usa la imagen del archivo si está, si no la URL
    };

    // Guardar en localStorage
    const productosExistentes = JSON.parse(localStorage.getItem("products")) || [];
    productosExistentes.push(nuevoProducto);
    localStorage.setItem("products", JSON.stringify(productosExistentes));

    // Limpiar formulario
    setNombre("");
    setDescripcion("");
    setPrecio("");
    setEtapa("");
    setFichaTecnica("");
    setImagen("");
    setImagenArchivo("");
    setMensaje("Producto agregado con éxito ✔");

    // Puedes redirigir si deseas:
    // navigate("/tienda");
  };

  return (
    <>
      <NavbarApp />
      <div className="container" style={{ maxWidth: "600px", margin: "2rem auto" }}>
        <h2>Agregar Nuevo Producto</h2>

        {mensaje && <p style={{ color: mensaje.includes("éxito") ? "green" : "red" }}>{mensaje}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Nombre del producto:</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label>Imagen desde URL (opcional):</label>
            <input
              type="text"
              className="form-control"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              placeholder="https://..."
            />
          </div>

          <div className="form-group mb-3">
            <label>Imagen desde tu equipo (opcional):</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImagenChange}
            />
          </div>

          {/* Vista previa */}
          {imagenArchivo && (
            <img
              src={imagenArchivo}
              alt="Vista previa"
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover", marginBottom: "1rem" }}
            />
          )}

          <div className="form-group mb-3">
            <label>Descripción:</label>
            <textarea
              className="form-control"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label>Precio:</label>
            <input
              type="number"
              className="form-control"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label>Etapa del producto:</label>
            <input
              type="text"
              className="form-control"
              value={etapa}
              onChange={(e) => setEtapa(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label>Ficha técnica (URL o texto):</label>
            <input
              type="text"
              className="form-control"
              value={fichaTecnica}
              onChange={(e) => setFichaTecnica(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success w-100">Agregar producto</button>
        </form>
      </div>
    </>
  );
};

export default AgregarProducto;
