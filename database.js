import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',                  // Usuario por defecto de MySQL local
  password: '',                  // Contraseña (vacío por defecto si usas XAMPP)
  database: 'inventario_productos', // Nombre de la base de datos del proyecto
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
