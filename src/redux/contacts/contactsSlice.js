import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts } from './contacts-operations';
import { deleteContact } from './contacts-operations';
import { addContact } from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })

      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      })

      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export default contactsSlice.reducer;
