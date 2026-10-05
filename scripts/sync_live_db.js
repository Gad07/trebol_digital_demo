require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });
const mysql = require('mysql2/promise');

async function updateDB() {
  const host = process.env.MYSQL_HOST || 'auth-db868.hstgr.io';
  const user = process.env.MYSQL_USER || 'u380714863_tradm';
  const password = process.env.MYSQL_PASSWORD || 'trebolDigitial3';
  const database = process.env.MYSQL_DATABASE || 'u380714863_trebol';

  console.log(`🔌 Conectando a MySQL (${host}/${database})...`);
  const conn = await mysql.createConnection({ host, user, password, database });

  // 1. Actualizar correos en usuarios
  await conn.query("UPDATE usuarios SET email = REPLACE(email, '@treboldigital.com', '@treboldigital.com.mx') WHERE email LIKE '%@treboldigital.com%'");
  await conn.query("UPDATE usuarios SET email = 'contacto@treboldigital.com.mx' WHERE username = 'admin'");

  // 2. Actualizar correos en tarjetas
  await conn.query("UPDATE tarjetas SET email = REPLACE(email, '@treboldigital.com', '@treboldigital.com.mx') WHERE email LIKE '%@treboldigital.com%'");
  await conn.query("UPDATE tarjetas SET email = 'contacto@treboldigital.com.mx' WHERE slug = 'gadiel-palma'");

  const [users] = await conn.query('SELECT username, email, role FROM usuarios');
  const [tarjetas] = await conn.query('SELECT slug, first_name, email FROM tarjetas');

  console.log('✅ Base de datos MySQL actualizada exitosamente:');
  console.log('Usuarios:', users);
  console.log('Tarjetas:', tarjetas);

  await conn.end();
}

updateDB().catch((err) => {
  console.error('Error actualizando DB:', err);
  process.exit(1);
});
