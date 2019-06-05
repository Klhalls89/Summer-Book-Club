 import { loadingReducer } from './loadingReducer'
 import * as actions from '../actions/actions'

 describe('loadingReducer', () => {

  it('it should return inital', () => {
    const expected = false;
    const results = loadingReducer(undefined, {});

    expect(results).toEqual(expected);
  })
  describe('Case SET_ERROR', () => {
    const bool = true;

    it('should toggle loading on the state tree', () => {
      const expected = bool;
      const action = actions.toggleLoading(bool); 
      const results= loadingReducer(false, action);

      expect(results).toEqual(expected);
    });
  }); 
});