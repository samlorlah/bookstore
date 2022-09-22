import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GCA8f6bNE9BdKFeFkTAX/books';

const books = [];

const booksReducers = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.payload.item_id,
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOKS:
      return Object.keys(action.books).map((key) => ({ ...action.books[key][0], id: key }));
    default:
      return state;
  }
};

export const addBook = (payload) => (
  async (dispatch) => {
    await axios.post(BASE_URL, payload);
    return dispatch({
      type: ADD_BOOK,
      payload,
    });
  }
);

export const removeBook = (id) => (
  async (dispatch) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return dispatch({
      type: REMOVE_BOOK,
      id,
    });
  }
);

export const getBooks = () => (
  async (dispatch) => {
    const response = await axios.get(BASE_URL);
    return dispatch({
      type: GET_BOOKS,
      books: response.data,
    });
  }
);

export default booksReducers;
