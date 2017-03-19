import expect from 'unexpected'
import accounts from '..'

describe('accounts', () => {
  it('should have a reducer, actions, utils and constants', () => {
    expect(accounts, 'to have property', 'reducer')
    expect(accounts, 'to have property', 'actions')
    expect(accounts, 'to have property', 'constants')
    expect(accounts, 'to have property', 'utils')
  });
});
