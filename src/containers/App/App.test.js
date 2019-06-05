import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './App';
import { mapStateToProps, mapDispatchToProps } from './App'
import { fetchBooks } from '../../utils/fetch';
import { storeBooks, toggleLoading, setError } from '../../actions/actions'

jest.mock("../../utils/fetch")

describe('App', () => {
  let wrapper;
  let mockBooks;
  let mockLoading;
  let mockError;

  beforeEach(() => {
    mockBooks = [{ title: "the best one"}];
    mockLoading = true
    mockError=' error'
    wrapper = shallow(
      <App
        fetchBooks={fetchBooks}
        loading={mockLoading} 
        error={mockError}
        books={mockBooks}
      />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });


  describe('MSTP', () => {
    it('should return a props object from state', () => {
      const mockState = {
        loading: false,
        books: [],
        error: 'error'
      }
      const expected = {
        loading: false,
        books: [],
        error: 'error'
      }
      const results = mapStateToProps(mockState)
      expect(results).toEqual(expected)
    })
  })
  describe('MDTP', () => {
    it('should call toggleLoading with dispatch', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = toggleLoading(true)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.toggleLoading(true)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call storeBooks with dispatch', () => {
      const books = [{title: 'book'}]
      const mockDispatch = jest.fn()
      const actionToDispatch = storeBooks(books)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.storeBooks(books)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call setError with dispatch', () => {
      const error = 'error'
      const mockDispatch = jest.fn()
      const actionToDispatch = setError(error)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setError(error)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
