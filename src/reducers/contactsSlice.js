import { createSlice, createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact');
const deleteContact = createAction('contacts/deleteContact');
const setContacts = createAction('contacts/setContacts');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addContact, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContact, (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
      })
      .addCase(setContacts, (state, action) => {
        return action.payload;
      });
  },
});

export { addContact, deleteContact, setContacts };
export default contactsSlice.reducer;
