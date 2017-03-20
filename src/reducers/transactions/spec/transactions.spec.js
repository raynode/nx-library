import expect from 'unexpected'
import transactions, { actions } from '..'
import { resolveId } from '../utils'
import fixtures from './fixtures'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'

describe('transactions', () => {
  describe('actions', () => {
    it('should add an Transactions, update the Transactions, and delete the Transactions correctly', () => {
      const store = createStore(transactions, {}, applyMiddleware(thunk))
      store.dispatch(actions.createTransactions(fixtures.Transactions1.name, fixtures.Transactions1.initialValue))
      const id = resolveId(fixtures.Transactions1.name, store.getState() )
      const state2 = store.getState()
      expect(state2, 'to have property', id)
      expect(state2[id], 'to have property', 'id')
      expect(state2[id], 'to have property', 'created_at')
      expect(state2[id], 'to have property', 'value')
      expect(state2[id].value, 'to be', fixtures.Transactions1.initialValue)
      store.dispatch(actions.updateTransactions(id, fixtures.Transactions1.updatedValue))
      const state3 = store.getState()
      expect(state3, 'to have property', id)
      expect(state3[id].value, 'to be', fixtures.Transactions1.updatedValue)
      store.dispatch(actions.deleteTransactions(fixtures.Transactions1.name))
      const state4 = store.getState()
      expect(state4, 'not to have property', id)
    })
  })
})
