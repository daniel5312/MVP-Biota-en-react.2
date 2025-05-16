import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("consumidor");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!nombre || !email || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const newUser = { nombre, email, password, rol };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center">Registro</h2>
      {error && <p className="text-danger text-center">{error}</p>}

      <form onSubmit={handleRegister}>
        <div className="form-group mb-3">
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label>Correo:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label>Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label>Rol:</label>
          <select
            className="form-select"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          >
            <option value="consumidor">Consumidor</option>
            <option value="productor">Productor</option>
          </select>
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Registrarse
        </button>

        <p className="mt-3 text-center">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
