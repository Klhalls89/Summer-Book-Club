export const storeBooks = (books) => ({
  type: 'STORE_BOOKS',
  books
});

export const toggleLoading = (bool) => ({
  type: 'TOGGLE_LOADING',
  bool
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  error
});