// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const booksReducers = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const addBook = () => ({ type: ADD_BOOK });

export const removeBook = () => ({ type: REMOVE_BOOK });

export default booksReducers;
