// pages/index.jsx
import React from 'react';
import Link from 'next/link';
import styles from '../styles/home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the School Management System</h1>
      <div className={styles.links}>
        <Link href="/addSchool">
          <div className={styles.link}>Add School</div>
        </Link>
        <Link href="/showSchools">
          <div className={styles.link}>Show Schools</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
