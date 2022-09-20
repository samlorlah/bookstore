import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookListItem = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <ul className="list-action-btns">
          <li>Comments</li>
          <li>
            <button type="button" onClick={() => dispatch(removeBook(id))} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
              Remove
            </button>
          </li>
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
};

BookListItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BookListItem;
