// Importamos React y useState para el manejo del formulario
import React, { useState } from "react";
// Importamos useNavigate para redirigir al login al registrarse
import { useNavigate } from "react-router-dom";
import NavbarLogin from "../components/NavbarLogin.jsx"

const Register = () => {
  // Estados para manejar los datos del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Hook para redireccionar
  const navigate = useNavigate();

  // Función que se ejecuta cuando se envía el formulario
  const handleRegister = (e) => {
    e.preventDefault(); // Evita recargar la página

    // Validación básica
    if (!email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Revisar si ya hay usuarios registrados
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      setError("Este correo ya está registrado.");
      return;
    }

    // Agregar el nuevo usuario a la lista
    const newUser = { email, password };
    users.push(newUser);

    // Guardar en localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Redirigir al login
    navigate("/login");
  };

  return (
    <>
    <NavbarLogin />
    <div className="register-container" style={{ maxWidth: "400px", margin: "5rem auto", border: "1px solid #ccc", padding: "2rem", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center" }}>Crear una cuenta</h2>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      <form onSubmit={handleRegister}>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Contraseña */}
        <div className="form-group" style={{ marginTop: "1rem" }}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirmar contraseña */}
        <div className="form-group" style={{ marginTop: "1rem" }}>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Botón para registrarse */}
        <button
          type="submit"
          style={{ marginTop: "1.5rem", width: "100%" }}
        >
          Registrarme
        </button>
      </form>
    </div>
  </>
  );
    
};

export default Register;
