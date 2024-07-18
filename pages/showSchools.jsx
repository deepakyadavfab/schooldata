// pages/showSchools.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/showSchools.module.css';

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('/api/getSchools');
        setSchools(response.data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchSchools();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/deleteSchool?id=${id}`);
      // Update schools state after successful deletion
      setSchools((prevSchools) => prevSchools.filter((school) => school.id !== id));
      console.log('School deleted successfully');
    } catch (error) {
      console.error('Error deleting school:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>List of Schools</h1>
      <div className={styles.schoolsGrid}>
        {schools.map((school) => (
          <div key={school.id} className={styles.schoolCard}>
            <div className={styles.schoolImage}>
              <img src={`/schoolImages/${school.image}`} alt={school.name} />
            </div>
            <div className={styles.schoolDetails}>
              <h2>{school.name}</h2>
              <p><strong>Address:</strong> {school.address}, {school.city}</p>
              <p><strong>Contact:</strong> {school.contact}</p>
              <p><strong>Email:</strong> {school.email_id}</p>
              <div className={styles.actions}>
                <Link href={`/school/${school.id}`}>
                  <h1 className={styles.viewButton}>View Details</h1>
                </Link>
                <button className={styles.deleteButton} onClick={() => handleDelete(school.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Link href="/addSchool">
        <h1 className={styles.backButton}>Back to Add School</h1>
      </Link>
    </div>
  );
};

export default ShowSchools;
