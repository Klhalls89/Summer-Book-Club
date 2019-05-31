import { combineReducers } from 'redux'
import { booksReducer } from './booksReducer'
import { loadingReducer } from './loadingReducer'

export const rootReducer = () => {
  books: booksReducer,
  loading: loadingReducer
};