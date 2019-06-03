import * as actions from './actions'

describe('actions', () => {

  describe('toggleLoading', () => {
    it('should have a type of TOGGLE_LOADING', () => {
      const bool = true
      const expectedAction = {
        type: 'TOGGLE_LOADING',
        bool
      }
      const result = actions.toggleLoading(bool)

      expect(result).toEqual(expectedAction)
    })
  })
})