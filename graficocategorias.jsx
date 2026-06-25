'use client';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function GraficoCategorias() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/api/productos/promedio-categoria')
      .then((res) => res.json())
      .then((data) => {
        const labels = data.map((item) => item.categoria);
        const valores = data.map((item) => item.promedio);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Valor Promedio ($)',
              data: valores,
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              tension: 0.3,
            },
          ],
        });
      })
      .catch((err) => console.error('Error:', err));
  }, []);

  if (!chartData) return <p>Cargando gráfico lineal de categorías...</p>;

  return (
    <div style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Valor Promedio por Categoría</h3>
      <Line data={chartData} />
    </div>
  );
}
