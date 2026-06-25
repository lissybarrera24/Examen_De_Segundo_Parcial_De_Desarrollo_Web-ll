import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    // Consulta usando las columnas reales del CSV: category.code y value
    const [rows] = await pool.query(
      'SELECT `category.code` AS categoria, AVG(value) AS promedio FROM productos GROUP BY `category.code`'
    );

    const datosEstructurados = rows.map(row => ({
      categoria: row.categoria || 'Sin Categoría',
      promedio: parseFloat(row.promedio || 0)
    }));

    return NextResponse.json(datosEstructurados);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener promedios por categoría' },
      { status: 500 }
    );
  }
}
