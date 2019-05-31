export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_BOOKS':
      return action.books
    default:
      return state
  };
}

