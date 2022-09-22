import React from 'react';
import { useDispatch } from 'react-redux';
import AddBook from './AddBook';
import BookLists from './BookLists';
import { addBook } from '../redux/books/books';

const BooksContainer = () => {
  const dispatch = useDispatch();
  const handleSubmit = (newBook) => {
    dispatch(addBook(newBook));
  };
  return (
    <div className="booksContainer">
      <BookLists />
      <div style={{ width: '85%', border: 'solid 1px #e8e8e8', margin: '50px 0' }} />
      <AddBook handleSubmit={handleSubmit} />
    </div>
  );
};

export default BooksContainer;
