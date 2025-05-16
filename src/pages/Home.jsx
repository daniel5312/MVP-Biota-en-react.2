import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";

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
  }, []);

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
          <h1>Bienvenido, {user.nombre}</h1>
          <p>Rol: {user.rol}</p>
          <button className="btn btn-danger" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </>
      )}
    </div>

    </>
  );
};

export default Home;
