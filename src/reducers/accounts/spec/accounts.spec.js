import expect from 'unexpected'
import accounts from '..'
import fixtures from './fixtures'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'

describe('accounts', () => {
  it('should have a reducer, actions, utils and constants', () => {
    expect(accounts, 'to have property', 'reducer')
    expect(accounts, 'to have property', 'actions')
    expect(accounts, 'to have property', 'constants')
    expect(accounts, 'to have property', 'utils')
  })

  describe('actions', () => {
    let actions

    beforeEach( () => {
      actions = accounts.actions
    })

    it('should have an action to create a new account', () => {
      expect(actions, 'to have property', 'createAccount')
      expect(actions.createAccount, 'to be a function')
    })

    it('should have an action to update an existing account', () => {
      expect(actions, 'to have property', 'updateAccount')
      expect(actions.updateAccount, 'to be a function')
    })

    it('should have an action to delete an existing account', () => {
      expect(actions, 'to have property', 'deleteAccount')
      expect(actions.deleteAccount, 'to be a function')
    })

    it('should add an account, update the account, and delete the account correctly', () => {
      const store = createStore(combineReducers(accounts.reducer), {}, applyMiddleware(thunk))
      store.dispatch(actions.createAccount(fixtures.account1.name, fixtures.account1.initialValue))
      const accountId = accounts.utils.resolveAccountId(fixtures.account1.name, store.getState() )
      const state2 = store.getState().accounts
      expect(state2, 'to have property', accountId)
      expect(state2[accountId], 'to have property', 'id')
      expect(state2[accountId], 'to have property', 'name')
      expect(state2[accountId], 'to have property', 'created_at')
      expect(state2[accountId], 'to have property', 'balance')
      expect(state2[accountId].balance, 'to be', fixtures.account1.initialValue)
      store.dispatch(actions.updateAccount(accountId, fixtures.account1.updatedValue))
      const state3 = store.getState().accounts
      expect(state3, 'to have property', accountId)
      expect(state3[accountId], 'to have property', 'balance')
      expect(state3[accountId].balance, 'to be', fixtures.account1.updatedValue)
      store.dispatch(actions.deleteAccount(fixtures.account1.name))
      const state4 = store.getState().accounts
      expect(state4, 'not to have property', accountId)
    })
  })

  describe('constants', () => {
    let constants

    beforeEach( () => {
      constants = accounts.constants
    })

    it('should have the actionTypes', () => {
      expect(constants, 'to have property', 'CREATE_ACCOUNT')
    })
  })

})
