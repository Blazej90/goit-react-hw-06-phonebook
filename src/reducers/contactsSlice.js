import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    setContacts: (state, action) => {
      return action.payload;
    },
    addContact: (state, action) => {
      const newContact = {
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      };
      state.push(newContact);
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { setContacts, addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
