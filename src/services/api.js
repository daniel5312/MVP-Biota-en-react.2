// src/services/api.js


const API_URL = "http://localhost:8090/api";
{/*const API_URL = "http://localhost:8000/api";*/}

// ✅ Ya tienes esta función
export const registrarUsuario = async (datos) => {
  const res = await fetch(`${API_URL}/usuarios/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Error al registrar");
  }

  return res.json();
};

// ✅ Aquí pones la nueva función
export const iniciarSesion = async ({ email, password }) => {
  const res = await fetch(`${API_URL}/usuarios/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "Error al iniciar sesión");
  }

  return res.json();
};
