 import { loadingReducer } from './loadingReducer'
 import * as actions from '../actions/actions'

 describe('loadingReducer', () => {

  it('it should return inital', () => {
    const expected = false
    const results = loadingReducer(undefined, {})

    expect(results).toEqual(expected)
  })
  
})