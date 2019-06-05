import { booksReducer }  from './booksReducer';
import * as actions from '../actions/actions';

describe('booksReducer', () => {

  it('it should return inital', () => {
    const expected = [];
    const result = booksReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  describe('Case STORE_BOOKS', () => {
    const books = [{title: 'book1'}];

    it('Should add books to the state tree', () => {
      const action = actions.storeBooks(books);
      const results = booksReducer([], action);
      const expected = books;

      expect(results).toEqual(expected);
    });
  }); 
});