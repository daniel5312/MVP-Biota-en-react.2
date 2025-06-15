import { useEffect, useState } from "react";
import { obtenerEstadisticas } from "../services/api";
import {
  PieChart, Pie, Cell, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import NavbarApp from "../components/NavbarApp";

const COLORS = ["#00C49F", "#FF8042", "#FFBB28", "#8884d8", "#0088FE", "#82ca9d"];

const EstadisticasGraficas = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      const resultado = await obtenerEstadisticas();
      setDatos(resultado);
    };
    cargar();
  }, []);

  if (!datos) return <p>Cargando datos...</p>;

  // 🔍 Procesar los datos para gráficos
  const rolesData = [
    { name: "Productores", value: datos.productores },
    { name: "Consumidores", value: datos.consumidores },
  ];

  const municipiosData = datos.municipios_comunes.map(([name, value]) => ({ name, value }));
  const etapasData = datos.etapas_comunes.map(([name, value]) => ({ name, value }));

  return (
    <> 
    <NavbarApp />
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📊 Visualización de Estadísticas</h2>

      {/* Pie: Roles */}
      <h4>👥 Distribución de Roles</h4>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={rolesData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
            {rolesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Bar: Municipios */}
      <h4 className="mt-4">🏙️ Municipios más comunes</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={municipiosData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      {/* Bar: Etapas */}
      <h4 className="mt-4">🌱 Etapas más comunes</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={etapasData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#00C49F" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </>
  );
};

export default EstadisticasGraficas;
