import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../reducers/contactsSlice';
import styles from './App.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleAddContact = () => {
    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.appContainer}>
      <p className={styles.name}>Name</p>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <p className={styles.name}>Phone Number</p>
      <label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className={styles.addContactBtn} onClick={handleAddContact}>
        Add contact
      </button>
    </div>
  );
};

export default ContactForm;
