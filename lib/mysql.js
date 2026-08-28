import mysql from 'mysql2/promise';

let pool = null;

export function isMySQLConfigured() {
  return Boolean(
    (process.env.MYSQL_DATABASE || process.env.MYSQL_DB) &&
    (process.env.MYSQL_USER || process.env.MYSQL_USERNAME)
  );
}

export function getMySQLPool() {
  if (!isMySQLConfigured()) {
    return null;
  }
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST || 'localhost',
      port: Number(process.env.MYSQL_PORT) || 3306,
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      database: process.env.MYSQL_DATABASE || 'u380714863_trebol',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      charset: 'utf8mb4'
    });
  }
  return pool;
}

export async function queryMySQL(sql, params = []) {
  const p = getMySQLPool();
  if (!p) {
    throw new Error('MySQL connection not configured');
  }
  const [rows] = await p.execute(sql, params);
  return rows;
}
