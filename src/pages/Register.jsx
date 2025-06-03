import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registrarUsuario } from "../services/api";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("consumidor");
  const [finca, setFinca] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [vereda, setVereda] = useState("");
  const [productos, setProductos] = useState("");
  const [etapa, setEtapa] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      nombre,
      email,
      password,
      rol,
      finca: rol === "productor" ? finca : "",
      municipio: rol === "productor" ? municipio : "",
      vereda: rol === "productor" ? vereda : "",
      productos: rol === "productor" ? productos : "",
      etapa: rol === "productor" ? etapa : "",
    };

    try {
      const resultado = await registrarUsuario(nuevoUsuario);
      console.log("Usuario registrado:", resultado);
      navigate("/login");
    } catch (err) {
      console.error("Error:", err.message);
      setError("Error al registrar usuario");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center">Registro</h2>
      {error && <p className="text-danger text-center">{error}</p>}

      <form onSubmit={handleRegister}>
        <div className="form-group mb-3">
          <label>Nombre:</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className="form-group mb-3">
          <label>Correo:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group mb-3">
          <label>Contraseña:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="form-group mb-3">
          <label>Rol:</label>
          <select className="form-select" value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="consumidor">Consumidor</option>
            <option value="productor">Productor</option>
          </select>
        </div>

        {/* Campos para productor */}
        {rol === "productor" && (
          <>
            <div className="form-group mb-3">
              <label>Finca:</label>
              <input type="text" className="form-control" value={finca} onChange={(e) => setFinca(e.target.value)} />
            </div>
            <div className="form-group mb-3">
              <label>Municipio:</label>
              <input type="text" className="form-control" value={municipio} onChange={(e) => setMunicipio(e.target.value)} />
            </div>
            <div className="form-group mb-3">
              <label>Vereda:</label>
              <input type="text" className="form-control" value={vereda} onChange={(e) => setVereda(e.target.value)} />
            </div>
            <div className="form-group mb-3">
              <label>Productos:</label>
              <input type="text" className="form-control" value={productos} onChange={(e) => setProductos(e.target.value)} />
            </div>
            <div className="form-group mb-3">
              <label>Etapa:</label>
              <input type="text" className="form-control" value={etapa} onChange={(e) => setEtapa(e.target.value)} />
            </div>
          </>
        )}

        <button className="btn btn-primary w-100" type="submit">Registrarse</button>

        <p className="mt-3 text-center">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
