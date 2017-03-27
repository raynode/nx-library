import expect from 'unexpected'
import transactions, { actions } from '..'
import { resolveId } from '../utils'
import fixtures from './fixtures'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

describe('transactions', () => {
  describe('actions', () => {
    it('should add an Transactions, update the Transactions, and delete the Transactions correctly', () => {
      const store = createStore(transactions, {}, applyMiddleware(thunk))
      store.dispatch(
        actions.createTransaction(
          fixtures.Transactions1.name,
          fixtures.Transactions1.initialAmount,
          fixtures.Transactions1.initialDesc,
          fixtures.Transactions1.initialCategories
        )
      )
      const id = resolveId(fixtures.Transactions1.name, store.getState() )
      const state2 = store.getState()
      expect(state2, 'to have property', id)
      const transaction2 = state2[id]
      expect(transaction2, 'to have property', 'id')
      expect(transaction2, 'to have property', 'created_at')
      expect(transaction2, 'to have property', 'amount')
      expect(transaction2, 'to have property', 'desc')
      expect(transaction2, 'to have property', 'categories')
      expect(transaction2.amount, 'to be', fixtures.Transactions1.initialAmount)
      expect(transaction2.name, 'to be', fixtures.Transactions1.name)
      expect(transaction2.desc, 'to be', fixtures.Transactions1.initialDesc)
      expect(transaction2.categories, 'to be', fixtures.Transactions1.initialCategories)

      store.dispatch(actions.updateTransaction(
        id,
        transaction2.name,
        fixtures.Transactions1.updatedAmount,
        fixtures.Transactions1.updatedDesc,
        fixtures.Transactions1.updatedCategories
      ))
      const state3 = store.getState()
      expect(state3, 'to have property', id)
      const transaction3 = state3[id]
      expect(transaction3.amount, 'to be', fixtures.Transactions1.updatedAmount)
      expect(transaction3.name, 'to be', fixtures.Transactions1.name)
      expect(transaction3.desc, 'to be', fixtures.Transactions1.updatedDesc)
      expect(transaction3.categories, 'to be', fixtures.Transactions1.updatedCategories)
      store.dispatch(actions.deleteTransaction(fixtures.Transactions1.name))
      const state4 = store.getState()
      expect(state4, 'not to have property', id)
    })
  })
})
