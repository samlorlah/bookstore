import React from 'react';
import { useSelector } from 'react-redux';
import BookListItem from './BookListItem';

const BookLists = () => {
  const books = useSelector((state) => state.booksReducers);
  return (
    <ul className="bookLists">
      {
        books.map((book) => (
          <BookListItem key={book.id} id={book.id} title={book.title} author={book.author} />
        ))
      }
    </ul>
  );
};

export default BookLists;
