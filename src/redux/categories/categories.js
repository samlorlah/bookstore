// Actions
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const categories = [];

// Reducer
const categoriesReducers = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Contruction';
    default:
      return state;
  }
};

// ActionsTypes
export const checkStatus = () => ({ type: CHECK_STATUS });

export default categoriesReducers;
