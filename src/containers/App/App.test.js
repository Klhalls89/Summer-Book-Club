import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mapStateToProps, mapDispatchToProps } from './App'

describe('App', () => {
  describe('MSTP', () => {
    it('should return a props object from state', () => {
      const mockState = {
        loading: false,
        books: [],
        error: 'error'
      }
      const expected = {
        loading: false
      }
      const results = mapStateToProps(mockState)
      expect(results).toEqual(expected)
    })
  })
})
