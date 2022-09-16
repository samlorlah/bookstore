import React from 'react';
import AddBook from './AddBook';
import BookLists from './BookLists';

const BooksContainer = () => (
  <div className="booksContainer">
    <BookLists />
    <div style={{ width: '80%', border: 'solid 1px #e8e8e8', margin: '50px 0' }} />
    <AddBook />
  </div>
);

export default BooksContainer;
