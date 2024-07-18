// pages/api/getSchools.js
import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const results = await query(`
      SELECT id, name, address, city, image FROM schools
    `);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch schools' });
  }
}
