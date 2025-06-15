// src/pages/Estadisticas.jsx

import { useEffect, useState } from "react";
import { obtenerEstadisticas } from "../services/api";
import NavbarApp from "../components/NavbarApp";

const Estadisticas = () => {
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultado = await obtenerEstadisticas();
        setDatos(resultado);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  if (error) return <p className="text-danger">{error}</p>;
  if (!datos) return <p>Cargando estadísticas...</p>;

  return (
    <>
    <NavbarApp />
    <div className="container mt-5">
      <h2>📊 Estadísticas de Usuarios</h2>

      <ul className="list-group mb-4">
        <li className="list-group-item">Total Usuarios: {datos.total_usuarios}</li>
        <li className="list-group-item">Productores: {datos.productores}</li>
        <li className="list-group-item">Consumidores: {datos.consumidores}</li>
        <li className="list-group-item">
          Porcentaje Productores: {datos.porcentaje_productores}%
        </li>
        <li className="list-group-item">
          Fincas registradas: {datos.cantidad_fincas_distintas}
        </li>
        <li className="list-group-item">
          Productos registrados: {datos.cantidad_productos_distintos}
        </li>
      </ul>

      <h4>🏙️ Municipios más comunes:</h4>
      <ul>
        {datos.municipios_comunes.map(([municipio, count], index) => (
          <li key={index}>{municipio}: {count}</li>
        ))}
      </ul>

      <h4>🌱 Etapas más comunes:</h4>
      <ul>
        {datos.etapas_comunes.map(([etapa, count], index) => (
          <li key={index}>{etapa}: {count}</li>
        ))}
      </ul>

      <h4>🧑‍🌾 Productores por Municipio:</h4>
      <ul>
        {Object.entries(datos.productores_por_municipio).map(([municipio, count]) => (
          <li key={municipio}>{municipio}: {count}</li>
        ))}
      </ul>

      <h4>🧑‍🌾 Productores por Etapa:</h4>
      <ul>
        {Object.entries(datos.productores_por_etapa).map(([etapa, count]) => (
          <li key={etapa}>{etapa}: {count}</li>
        ))}
      </ul>

      <h4>👤 Consumidores por Municipio:</h4>
      <ul>
        {Object.entries(datos.consumidores_por_municipio).map(([municipio, count]) => (
          <li key={municipio}>{municipio}: {count}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Estadisticas;
