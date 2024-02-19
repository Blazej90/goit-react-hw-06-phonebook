import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers/contactsSlice';
import filterReducer from './reducers/filterSlice';

export default configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
