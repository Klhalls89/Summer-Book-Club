 import { errorReducer } from './errorReducer'
 import * as actions from '../actions/actions'

 describe('errorReducer', () => {

  it('it should return inital', () => {
    const expected = ''
    const results = errorReducer(undefined, {})

    expect(results).toEqual(expected)
  })
 
})