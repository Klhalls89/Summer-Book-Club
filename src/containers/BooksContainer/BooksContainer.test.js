import BooksContainer from './BooksContainer'
import { mapStateToProps } from './BooksContainer'

describe('BooksContainer', () => {

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

    })
  })
})