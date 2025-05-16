import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userFound = users.find(
      (u) => u.email === email && u.password === password
    );

    if (userFound) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("user", JSON.stringify(userFound));
      navigate("/tienda");
    } else {
      setError("Credenciales inválidas.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center">Iniciar sesión</h2>
      {error && <p className="text-danger text-center">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Email:</label>
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

        <button className="btn btn-success w-100" type="submit">
          Ingresar
        </button>

        <p className="mt-3 text-center">
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
