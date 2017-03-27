import expect from 'unexpected'
import accounts, { actions } from '..'
import { resolveId } from '../utils'
import fixtures from './fixtures'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'

describe('accounts', () => {
  describe('actions', () => {
    it('should add an Accounts, update the Accounts, and delete the Accounts correctly', () => {
      const store = createStore(accounts, {}, applyMiddleware(thunk))
      store.dispatch(actions.createAccounts(fixtures.Accounts1.name, fixtures.Accounts1.initialBalance))
      const id = resolveId(fixtures.Accounts1.name, store.getState() )
      const state2 = store.getState()
      expect(state2, 'to have property', id)
      expect(state2[id], 'to have property', 'id')
      expect(state2[id], 'to have property', 'created_at')
      expect(state2[id], 'to have property', 'balance')
      expect(state2[id].balance, 'to be', fixtures.Accounts1.initialBalance)
      store.dispatch(actions.updateAccounts(id, fixtures.Accounts1.updatedBalance))
      const state3 = store.getState()
      expect(state3, 'to have property', id)
      expect(state3[id].balance, 'to be', fixtures.Accounts1.updatedBalance)
      store.dispatch(actions.deleteAccounts(fixtures.Accounts1.name))
      const state4 = store.getState()
      expect(state4, 'not to have property', id)
    })
  })
})
