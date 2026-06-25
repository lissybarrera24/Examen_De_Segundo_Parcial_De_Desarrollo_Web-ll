'use client';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GraficoMarcas() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/api/productos/cantidad-marca')
      .then((res) => res.json())
      .then((data) => {
        const labels = data.map((item) => item.marca);
        const cantidades = data.map((item) => item.cantidad);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Cantidad de Productos',
              data: cantidades,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(54, 162, 235, 0.6)'
              ],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((err) => console.error('Error:', err));
  }, []);

  if (!chartData) return <p>Cargando gráfico de pie de marcas...</p>;

  return (
    <div style={{ width: '100%', maxWidth: '450px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Distribución de Productos por Marca</h3>
      <Pie data={chartData} />
    </div>
  );
}
