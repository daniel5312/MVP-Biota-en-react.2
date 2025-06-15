// src/services/api.js


{/*const API_URL = "http://localhost:8090/api";*/}
const API_URL = "http://localhost:8000/api";
// Registrar usuario
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
// Iniciar sesión
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
  
// Obtener todos los usuarios
export const obtenerUsuarios = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

// Obtener usuario por ID
export const obtenerUsuarioPorId = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

// Actualizar usuario
export const actualizarUsuario = async (id, datos) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
  return res.json();
};

// Eliminar usuario
export const eliminarUsuario = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

export const obtenerEstadisticas = async () => {
  const res = await fetch(`${API_URL}/estadisticas`);
  if (!res.ok) {
    throw new Error("Error al obtener estadísticas");
  }
  return res.json();
};