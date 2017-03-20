import expect from 'unexpected'
import <%= camelEntityName %>, { actions } from '..'
import { resolveId } from '../utils'
import fixtures from './fixtures'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'

describe('<%= camelEntityName %>', () => {
  describe('actions', () => {
    it('should add an <%= pascalEntityName %>, update the <%= pascalEntityName %>, and delete the <%= pascalEntityName %> correctly', () => {
      const store = createStore(<%= camelEntityName %>, {}, applyMiddleware(thunk))
      store.dispatch(actions.create<%= pascalEntityName %>(fixtures.<%= pascalEntityName %>1.name, fixtures.<%= pascalEntityName %>1.initialValue))
      const id = resolveId(fixtures.<%= pascalEntityName %>1.name, store.getState() )
      const state2 = store.getState()
      expect(state2, 'to have property', id)
      expect(state2[id], 'to have property', 'id')
      expect(state2[id], 'to have property', 'created_at')
      expect(state2[id], 'to have property', 'value')
      expect(state2[id].value, 'to be', fixtures.<%= pascalEntityName %>1.initialValue)
      store.dispatch(actions.update<%= pascalEntityName %>(id, fixtures.<%= pascalEntityName %>1.updatedValue))
      const state3 = store.getState()
      expect(state3, 'to have property', id)
      expect(state3[id].value, 'to be', fixtures.<%= pascalEntityName %>1.updatedValue)
      store.dispatch(actions.delete<%= pascalEntityName %>(fixtures.<%= pascalEntityName %>1.name))
      const state4 = store.getState()
      expect(state4, 'not to have property', id)
    })
  })
})
