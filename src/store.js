import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers/contactsSlice';
import filterReducer from './reducers/filterSlice'; // Dodaj import reduktora filtru

export default configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer, // Dodaj reduktor filtru
  },
});
