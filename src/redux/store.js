import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './Books';
export default configureStore({
  reducer: {
    books: bookReducer,
  },
});
