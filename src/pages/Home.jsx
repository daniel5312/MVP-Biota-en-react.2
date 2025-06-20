import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";
import "../styles/Home.css"


const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("auth") === "true";
    const userStored = JSON.parse(localStorage.getItem("user"));

    if (!isLoggedIn || !userStored) {
      navigate("/login");
    } else {
      setUser(userStored);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
    <NavbarApp />  
    
      <div className="container mt-5">
      {user && (
        <>
          <img src="" alt="" />
          <h1>Bienvenido, {user.nombre}</h1>
          <p>Rol: {user.rol}</p>
          <button className="btn btn-dark" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </>
      )}
    </div>
    
    <div className="perfil-section">
        
        {user && (
              
            <>
            <p><strong>Nombre:</strong> {user.nombre}</p>
            <p><strong>Correo:</strong> {user.email}</p>
            <p><strong>Rol:</strong> {user.rol}</p>
            <p><strong>Finca:</strong>{user.finca}</p>
            <p><strong>Municipio:</strong>{user.municipio}</p>
            <p><strong>Vereda:</strong>{user.vereda}</p>
            <p><strong>Productos:</strong>{user.productos}</p>
             <p><strong>Etapa:</strong>{user.etapa}</p>

            {user.rol === "productor" && (
                <div className="productor-section">
                <h3>Información para Productores</h3>
                <p>Productos y Finca.</p>
                </div>
            )}
            

            {user.rol === "consumidor" && (
                <div className="consumidor-section">
                <h3>Opciones para Consumidores</h3>
                <p>Explora productos, haz pedidos, guarda favoritos...</p>
                
                </div>
                
            )}
            </>
        )}
        </div>
  

    </>
  );
};

export default Home;
