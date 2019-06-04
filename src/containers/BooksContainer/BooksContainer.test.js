import React from "react";
import { BooksContainer } from './BooksContainer';
import { mapStateToProps } from './BooksContainer';
import { shallow } from 'enzyme';


describe('BooksContainer', () => {
  let wrapper;
  let mockBooks;

  beforeEach(() => {
    mockBooks = [{ title: "the best one"}];
    wrapper = shallow(<BooksContainer books={mockBooks}/>);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {

    it('should return a props object from state', () => {
      const mockState = {
        loading: false,
        books: [],
        error: 'error'
      }
      const expected = {
        books: []
      }
      const results = mapStateToProps(mockState)
      expect(results).toEqual(expected)

    });
  });
});