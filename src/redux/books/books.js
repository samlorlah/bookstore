// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const books = [
  {
    id: 1,
    title: 'Book Reading',
    author: 'Amadi Ojo',
  },
  {
    id: 2,
    title: 'Coming unto the mountain',
    author: 'Prince Ethan',
  },
  {
    id: 3,
    title: 'Free from trial',
    author: 'Jsuting wizkid',
  },
];

const booksReducers = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default booksReducers;
