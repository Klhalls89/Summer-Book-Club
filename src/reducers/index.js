import { combineReducers } from 'redux';
import { booksReducer } from './booksReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  books: booksReducer,
  loading: loadingReducer,
  error: errorReducer
});