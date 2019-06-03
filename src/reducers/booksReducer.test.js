import { booksReducer }  from './booksReducer';
import * as actions from '../actions/actions'

describe('booksReducer', () => {

  it('it should return inital', () => {
    const expected = []

    const result = booksReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})