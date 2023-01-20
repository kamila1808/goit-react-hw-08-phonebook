import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await axios.get('https://connections-api.herokuapp.com/contacts');
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => {
      try {
        await axios.delete(`https://connections-api.herokuapp.com/contacts/${contactId}`)
        return contactId;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
      try {
        const { data } = await axios.post(`https://connections-api.herokuapp.com/contacts`, contact);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
