import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState(
    {
      id: '',
      title: '',
      author: '',
    },
  );

  const handleSubmitBook = (e) => {
    e.preventDefault();
    setNewBook({ ...newBook, id: uuidv4 });
    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={handleSubmitBook}>
      <h3>ADD NEW BOOK</h3>
      <div className="form-control">
        <input
          placeholder="Book title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <button type="submit">
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

export default AddBook;
