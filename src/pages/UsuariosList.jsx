import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";

const UsuariosList = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const usuariosPorPagina = 10;
  const navigate = useNavigate();

  // Obtener usuarios
  const fetchUsuarios = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/usuarios");
      const data = await res.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  };

  // Eliminar usuario
  const eliminarUsuario = async (id) => {
    const confirmar = window.confirm("¿Seguro que deseas eliminar este usuario?");
    if (!confirmar) return;

    try {
      const res = await fetch(`http://localhost:8000/api/usuarios/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setUsuarios(usuarios.filter((u) => u.id !== id));
        alert("Usuario eliminado correctamente");
      } else {
        alert("Error al eliminar usuario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al eliminar");
    }
  };

  // Redirigir a editar
  const handleEditar = (id) => {
    navigate(`/usuarios/editar/${id}`);
  };

  // Calcular usuarios por página
  const indiceUltimo = paginaActual * usuariosPorPagina;
  const indicePrimero = indiceUltimo - usuariosPorPagina;
  const usuariosVisibles = usuarios.slice(indicePrimero, indiceUltimo);
  const totalPaginas = Math.ceil(usuarios.length / usuariosPorPagina);

  const cambiarPagina = (numero) => {
    setPaginaActual(numero);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <>
      <NavbarApp />
      <div className="container mt-5">
        <h2>Lista de Usuarios</h2>

        {usuarios.length === 0 ? (
          <p>No hay usuarios registrados.</p>
        ) : (
          <>
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Finca</th>
                  <th>Municipio</th>
                  <th>Vereda</th>
                  <th>Productos</th>
                  <th>Etapa</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuariosVisibles.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.rol}</td>
                    <td>{usuario.finca}</td>
                    <td>{usuario.municipio}</td>
                    <td>{usuario.vereda}</td>
                    <td>{usuario.productos}</td>
                    <td>{usuario.etapa}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleEditar(usuario.id)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-success btn-sm mt-2"
                        onClick={() => eliminarUsuario(usuario.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Paginación */}
            <nav className="d-flex justify-content-center">
              <ul className="pagination">
                {Array.from({ length: totalPaginas }, (_, index) => index + 1).map((numero) => (
                  <li
                    key={numero}
                    className={`page-item ${paginaActual === numero ? "active" : ""}`}
                  >
                    <button onClick={() => cambiarPagina(numero)} className="page-link">
                      {numero}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
};

export default UsuariosList;
