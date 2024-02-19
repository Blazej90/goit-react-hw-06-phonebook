import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../reducers/contactsSlice';
import styles from './App.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          {contact.name} - {contact.number}
          <button
            onClick={() => handleDeleteContact(contact.id)}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
