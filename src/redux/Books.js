import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: { book: [] },
  reducers: {
    addBook: (state, action) => {
      state.book.push(action.payload);
    },
  },
});
export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
