import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../redux/contactsSlice';
import styles from '../App.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleAddContact = () => {
    const isNameExist = contacts.some(
      contact =>
        contact.name && contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${name} is already in contacts!`);
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));

      const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];

      const updatedContacts = [
        ...storedContacts,
        { id: nanoid(), name, number },
      ];
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));

      setName('');
      setNumber('');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact();
  };

  return (
    <div className={styles.appContainer}>
      <form onSubmit={handleSubmit}>
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
        <button className={styles.addContactBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
