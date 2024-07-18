// pages/api/deleteSchool.js

import { query } from '../../lib/db';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const deleteQuery = `
      DELETE FROM schools
      WHERE id = ?
    `;
    await query(deleteQuery, [id]);

    res.status(200).json({ message: 'School deleted successfully' });
  } catch (error) {
    console.error('Error deleting school:', error);
    res.status(500).json({ message: 'Failed to delete school' });
  }
}
