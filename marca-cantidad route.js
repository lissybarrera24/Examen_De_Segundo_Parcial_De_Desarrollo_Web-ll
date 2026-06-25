import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    // Consulta usando la columna real del CSV: brand.code
    const [rows] = await pool.query(
      'SELECT `brand.code` AS marca, COUNT(*) AS cantidad FROM productos GROUP BY `brand.code`'
    );

    const datosEstructurados = rows.map(row => ({
      marca: row.marca || 'Sin Marca',
      cantidad: parseInt(row.cantidad || 0)
    }));

    return NextResponse.json(datosEstructurados);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener cantidades por marca' },
      { status: 500 }
    );
  }
}
