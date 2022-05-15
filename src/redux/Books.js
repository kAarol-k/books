import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: { book: [] },
  reducers: {
    addBook: (state, action) => {
      state.book.push(action.payload);
    },

    deleteBook: (state, action) => {
      state.book = state.book.filter((book) => book.id !== action.payload.id);
    },
  },
});
export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
