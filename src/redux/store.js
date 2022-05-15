import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import bookReducer from './Books';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, bookReducer);

export default configureStore({
  reducer: {
    books: persistedReducer,
  },
});
