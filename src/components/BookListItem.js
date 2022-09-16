import React from 'react';

const BookListItem = () => (
  <li>
    <div>
      <p className="title">The Hunger Games</p>
      <p className="author">Suzanne Collins</p>
      <ul className="list-action-btns">
        <li>Comments</li>
        <li>Remove</li>
        <li>Edit</li>
      </ul>
    </div>
    <div className="completion-status">
      <div className="chart" />
      <p>64%</p>
      <p>Completed</p>
    </div>
    <div className="chapter-section">
      <p style={{ opacity: '0.5' }}>CURRENT CHAPTER</p>
      <p>Chapter 17</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </li>
);

export default BookListItem;
