import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import filterReduser from './filter/filterSlice';
import authReducer from './auth/authSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReduser,
    auth: authReducer
  },
});

