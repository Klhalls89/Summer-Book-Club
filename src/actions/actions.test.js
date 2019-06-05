import * as actions from './actions'

describe('actions', () => {

  describe('storeBooks', () => {

    it('should have a type of STORE_BOOKS', () => {
      const books = [{titel: 'This is us'}]
      const expectedAction = {
        type: 'STORE_BOOKS',
        books
      };
      const results = actions.storeBooks(books);

      expect(results).toEqual(expectedAction);
    });
  });

  describe('toggleLoading', () => {

    it('should have a type of TOGGLE_LOADING', () => {
      const bool = true
      const expectedAction = {
        type: 'TOGGLE_LOADING',
        bool
      };
      const results = actions.toggleLoading(bool);

      expect(results).toEqual(expectedAction);
    });
  });

  describe('setError', () => {

    it('should have a type of SET_ERROR', () => {
      const error = 'error'
      const expectedAction = {
        type: 'SET_ERROR',
        error
      };
      const results = actions.setError(error);
      
      expect(results).toEqual(expectedAction);
    });
  });
});