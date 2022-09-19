// Actions
const CHECK_STATUS = 'CHECK_STATUS';

// Reducer
const categoriesReducers = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return ['Under Contruction'];
    default:
      return state;
  }
};

// ActionsTypes
export const checkStatus = () => ({ type: CHECK_STATUS });

export default categoriesReducers;
