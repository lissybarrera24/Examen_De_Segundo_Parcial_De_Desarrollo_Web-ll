export const metadata = {
  title: 'Examen II Parcial - Desarrollo Web II',
  description: 'Análisis gráfico de productos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f9f9f9' }}>
        {children}
      </body>
    </html>
  );
}
