import expect from 'unexpected'
import budgets, { actions } from '..'
import { resolveId } from '../utils'
import fixtures from './fixtures'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'

describe('budgets', () => {
  describe('actions', () => {
    it('should add an Budgets, update the Budgets, and delete the Budgets correctly', () => {
      const store = createStore(budgets, {}, applyMiddleware(thunk))
      store.dispatch(actions.createBudgets(fixtures.Budgets1.name, fixtures.Budgets1.initialValue))
      const id = resolveId(fixtures.Budgets1.name, store.getState() )
      const state2 = store.getState()
      expect(state2, 'to have property', id)
      expect(state2[id], 'to have property', 'id')
      expect(state2[id], 'to have property', 'created_at')
      expect(state2[id], 'to have property', 'value')
      expect(state2[id].value, 'to be', fixtures.Budgets1.initialValue)
      store.dispatch(actions.updateBudgets(id, fixtures.Budgets1.updatedValue))
      const state3 = store.getState()
      expect(state3, 'to have property', id)
      expect(state3[id].value, 'to be', fixtures.Budgets1.updatedValue)
      store.dispatch(actions.deleteBudgets(fixtures.Budgets1.name))
      const state4 = store.getState()
      expect(state4, 'not to have property', id)
    })
  })
})
