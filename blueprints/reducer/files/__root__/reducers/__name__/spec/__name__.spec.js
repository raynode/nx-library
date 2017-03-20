import expect from 'unexpected'
import <%= camelEntityName %> from '..'
import fixtures from './fixtures'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'

describe('<%= camelEntityName %>', () => {
  it('should have a reducer, actions, utils and constants', () => {
    expect(<%= camelEntityName %>, 'to have property', 'reducer')
    expect(<%= camelEntityName %>, 'to have property', 'actions')
    expect(<%= camelEntityName %>, 'to have property', 'constants')
    expect(<%= camelEntityName %>, 'to have property', 'utils')
  })

  describe('actions', () => {
    let actions

    beforeEach( () => {
      actions = <%= camelEntityName %>.actions
    })

    it('should have an action to create a new <%= pascalEntityName %>', () => {
      expect(actions, 'to have property', 'create<%= pascalEntityName %>')
      expect(actions.create<%= pascalEntityName %>, 'to be a function')
    })

    it('should have an action to update an existing <%= pascalEntityName %>', () => {
      expect(actions, 'to have property', 'update<%= pascalEntityName %>')
      expect(actions.update<%= pascalEntityName %>, 'to be a function')
    })

    it('should have an action to delete an existing <%= pascalEntityName %>', () => {
      expect(actions, 'to have property', 'delete<%= pascalEntityName %>')
      expect(actions.delete<%= pascalEntityName %>, 'to be a function')
    })

    it('should add an <%= pascalEntityName %>, update the <%= pascalEntityName %>, and delete the <%= pascalEntityName %> correctly', () => {
      const store = createStore(combineReducers(<%= camelEntityName %>.reducer), {}, applyMiddleware(thunk))
      store.dispatch(actions.create<%= pascalEntityName %>(fixtures.<%= pascalEntityName %>1.name, fixtures.<%= pascalEntityName %>1.initialValue))
      const id = <%= camelEntityName %>.utils.resolveId(fixtures.<%= pascalEntityName %>1.name, store.getState() )
      const state2 = store.getState().<%= camelEntityName %>
      expect(state2, 'to have property', id)
      expect(state2[id], 'to have property', 'id')
      expect(state2[id], 'to have property', 'created_at')
      expect(state2[id], 'to have property', 'value')
      expect(state2[id].value, 'to be', fixtures.<%= pascalEntityName %>1.initialValue)
      store.dispatch(actions.update<%= pascalEntityName %>(id, fixtures.<%= pascalEntityName %>1.updatedValue))
      const state3 = store.getState().<%= camelEntityName %>
      expect(state3, 'to have property', id)
      expect(state3[id].value, 'to be', fixtures.<%= pascalEntityName %>1.updatedValue)
      store.dispatch(actions.delete<%= pascalEntityName %>(fixtures.<%= pascalEntityName %>1.name))
      const state4 = store.getState().<%= camelEntityName %>
      expect(state4, 'not to have property', id)
    })
  })
})
