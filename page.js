import GraficoCategorias from '@/components/GraficoCategorias';
import GraficoMarcas from '@/components/GraficoMarcas';

export default function DashboardProductos() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px', color: '#333' }}>
        Dashboard de Análisis de Inventario - Examen II Parcial
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', alignItems: 'center' }}>
        <section style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', width: '100%', maxWidth: '700px' }}>
          <GraficoCategorias />
        </section>

        <section style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', width: '100%', maxWidth: '500px' }}>
          <GraficoMarcas />
        </section>
      </div>
    </main>
  );
}
