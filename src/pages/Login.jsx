import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { iniciarSesion } from "../services/api"; // mporta tu función
import NavbarLogin from "../components/NavbarLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resultado = await iniciarSesion({ email, password }); // Llama al backend

      console.log("Usuario autenticado:", resultado);

      // Guarda sesión local y redirige
      localStorage.setItem("auth", "true");
      localStorage.setItem("user", JSON.stringify(resultado));

      navigate("/home");
    } catch (err) {
      console.error("Error de login:", err.message);
      setError("Credenciales inválidas o error de conexión.");
    }
  };

  return (
    <>
      <NavbarLogin />
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
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Contraseña:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
    </>
  );
};

export default Login;
