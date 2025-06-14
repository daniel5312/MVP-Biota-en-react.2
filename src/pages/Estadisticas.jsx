// src/pages/Estadisticas.jsx

import { useEffect, useState } from "react";
import { obtenerEstadisticas } from "../services/api";

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
    <div className="container mt-5">
      <h2>📊 Estadísticas de Usuarios</h2>
      <ul className="list-group">
        <li className="list-group-item">Total Usuarios: {datos.total_usuarios}</li>
        <li className="list-group-item">Productores: {datos.productores}</li>
        <li className="list-group-item">Consumidores: {datos.consumidores}</li>
        <li className="list-group-item">
          Municipios más comunes:
          <ul>
            {datos.municipios_comunes.map(([municipio, cantidad], index) => (
              <li key={index}>{municipio}: {cantidad}</li>
            ))}
          </ul>
        </li>
        <li className="list-group-item">
          Etapas más comunes:
          <ul>
            {datos.etapas_comunes.map(([etapa, cantidad], index) => (
              <li key={index}>{etapa}: {cantidad}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Estadisticas;
