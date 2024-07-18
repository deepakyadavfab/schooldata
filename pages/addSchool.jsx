// pages/addSchool.jsx

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Link from 'next/link'; // Import Link from next/link for routing
import styles from '../styles/addSchool.module.css';

const AddSchool = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.append('image', data.image[0]);

    try {
      await axios.post('/api/addSchool', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccessMessage('School added successfully!');
      setErrorMessage('');
      reset();
    } catch (error) {
      console.error('Error adding school:', error);
      setErrorMessage('Error adding school. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add a School</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input type="text" placeholder="Name" className={styles.formInput} {...register('name', { required: true })} />
        {errors.name && <span>Name is required</span>}

        <input type="text" placeholder="Address" className={styles.formInput} {...register('address', { required: true })} />
        {errors.address && <span>Address is required</span>}

        <input type="text" placeholder="City" className={styles.formInput} {...register('city', { required: true })} />
        {errors.city && <span>City is required</span>}

        <input type="text" placeholder="State" className={styles.formInput} {...register('state', { required: true })} />
        {errors.state && <span>State is required</span>}

        <input type="number" placeholder="Contact" className={styles.formInput} {...register('contact', { required: true })} />
        {errors.contact && <span>Contact is required</span>}

        <input type="file" className={styles.formInput} {...register('image', { required: true })} />
        {errors.image && <span>Image is required</span>}

        <input type="email" placeholder="Email" className={styles.formInput} {...register('email_id', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email_id && <span>Valid email is required</span>}

        <button type="submit" className={styles.formButton}>Add School</button>
      </form>
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

      {/* Home Button */}
      <Link href="/">
        <h1 className={styles.homeButton}>Home</h1>
      </Link>
    </div>
  );
};

export default AddSchool;
