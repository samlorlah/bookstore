import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesContainer = () => {
  const dispatch = useDispatch();

  const handleChangeStatus = () => dispatch(checkStatus());
  const status = useSelector((state) => state.categoriesReducers);

  return (
    <div className="categoriesContainer">
      <h2>{status}</h2>
      <button type="button" onClick={handleChangeStatus}>CHECK STATUS</button>
    </div>
  );
};

export default CategoriesContainer;
