import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const AddBook = ({ handleSubmit }) => {
  const bookCategories = ['Fiction', 'Classics', 'Mystery', 'Contemporary'];
  const rand = Math.floor(Math.random() * bookCategories.length);
  const category = bookCategories[rand];
  const [newBook, setNewBook] = useState(
    {
      item_id: uuidv4(),
      title: '',
      author: '',
      category: '',
    },
  );

  const handleSubmitBook = (e) => {
    e.preventDefault();
    handleSubmit({ ...newBook, category });
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

AddBook.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddBook;
