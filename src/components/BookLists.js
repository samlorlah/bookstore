import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookListItem from './BookListItem';
import { getBooks } from '../redux/books/books';

const BookLists = () => {
  const books = useSelector((state) => state.booksReducers);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getBooks()); }, []);
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
