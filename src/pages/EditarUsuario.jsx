import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditarUsuario = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "consumidor",
    finca: "",
    municipio: "",
    vereda: "",
    productos: "",
    etapa: "",
  });

  const [error, setError] = useState("");

  // Obtener datos del usuario por ID
  useEffect(() => {
    fetch(`http://localhost:8000/api/usuarios/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Usuario no encontrado");
        return res.json();
      })
      .then((data) => setUsuario(data))
      .catch((err) => setError(err.message));
  }, [id]);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8000/api/usuarios/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario),
      });

      if (!res.ok) throw new Error("Error al actualizar el usuario");
      alert("Usuario actualizado correctamente");
      navigate("/usuarios"); // Redirige a lista
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h2>Editar Usuario</h2>
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={usuario.nombre}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={usuario.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label>Contraseña:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={usuario.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label>Rol:</label>
          <select
            className="form-select"
            name="rol"
            value={usuario.rol}
            onChange={handleChange}
          >
            <option value="consumidor">Consumidor</option>
            <option value="productor">Productor</option>
          </select>
        </div>

        {/* Mostrar campos solo si es productor */}
        {usuario.rol === "productor" && (
          <>
            <div className="form-group mb-2">
              <label>Finca:</label>
              <input
                type="text"
                className="form-control"
                name="finca"
                value={usuario.finca}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-2">
              <label>Municipio:</label>
              <input
                type="text"
                className="form-control"
                name="municipio"
                value={usuario.municipio}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-2">
              <label>Vereda:</label>
              <input
                type="text"
                className="form-control"
                name="vereda"
                value={usuario.vereda}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-2">
              <label>Productos:</label>
              <input
                type="text"
                className="form-control"
                name="productos"
                value={usuario.productos}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-2">
              <label>Etapa:</label>
              <input
                type="text"
                className="form-control"
                name="etapa"
                value={usuario.etapa}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <button className="btn btn-primary mt-3" type="submit">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default EditarUsuario;
