import React from 'react';

const AddBook = () => (
  <form>
    <h3>ADD NEW BOOK</h3>
    <div className="form-control">
      <input placeholder="Book title" />
      <input placeholder="Author" />
      <button type="button">ADD BOOK</button>
    </div>
  </form>
);

export default AddBook;
