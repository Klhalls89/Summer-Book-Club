 import { errorReducer } from './errorReducer'
 import * as actions from '../actions/actions'

 describe('errorReducer', () => {

  it('it should return inital', () => {
    const expected = ''
    const results = errorReducer(undefined, {})

    expect(results).toEqual(expected)
  })
  describe('Case SET_ERROR', () => {

    const error = 'error'

    it('should set an error to the state tree', () => {
      const expected = error
      const action = actions.setError(error) 
      const results= errorReducer('', action)

      expect(results).toEqual(expected)
    })
  }) 
})