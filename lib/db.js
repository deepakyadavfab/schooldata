// lib/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Deepak@67',
  database: 'edunify',
});

export async function query(sql, values) {
  const [results] = await pool.query(sql, values);
  return results;
}
