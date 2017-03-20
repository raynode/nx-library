import reducer, { defaultState } from 'redux/modules/testxy';
import deepFreeze from 'deep-freeze';

describe('(Redux) testxy', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
