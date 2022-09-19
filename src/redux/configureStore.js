import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducers from './books/books';
import categoriesReducers from './categories/categories';

const rootReducer = combineReducers({
  booksReducers, categoriesReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
