// pages/api/addSchool.js
import { query } from '../../lib/db';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = formidable({ 
    uploadDir: path.join(process.cwd(), 'public/schoolImages'),
    keepExtensions: true
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      res.status(500).json({ error: 'Error parsing form' });
      return;
    }

    const { name, address, city, state, contact, email_id } = fields;
    const image = files.image.newFilename;

    try {
      const result = await query(
        'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, address, city, state, contact, image, email_id]
      );
      res.status(200).json({ message: 'School added successfully' });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Error inserting data' });
    }
  });
}
