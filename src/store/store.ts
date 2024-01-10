import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import booksSlice from './reducers/books/booksSlice';
import bookSlice from './reducers/book/bookSlice';


export const store = configureStore({
  reducer: {
    state: booksSlice,
    currentBook: bookSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
