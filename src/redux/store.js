import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import filterReduser from './filter/filterSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReduser,
  },
});

