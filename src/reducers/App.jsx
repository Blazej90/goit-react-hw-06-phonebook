import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { addContact } from '../reducers/contactsSlice';
import styles from './App.module.css';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(addContact(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.pageTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.contactsHeading}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
