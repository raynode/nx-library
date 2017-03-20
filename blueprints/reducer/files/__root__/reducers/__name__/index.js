

export const <%= upperCaseName %>_CREATE = "<%= upperCaseName %>_CREATE"
export const <%= upperCaseName %>_DELETE = "<%= upperCaseName %>_DELETE"
export const <%= upperCaseName %>_UPDATE = "<%= upperCaseName %>_UPDATE"

import { uuid, resolveId } from './utils'

export const initialState = {}

const reducer = {
  [<%= upperCaseName %>_CREATE] : (state, { id, created_at, name, value }) => Object.assign({}, state, ({
    [id] : {
      id, created_at, name, value
    }
  })),

  [<%= upperCaseName %>_UPDATE] : (state, { id, updated_at, value }) => Object.assign({}, state, ({
    [id] : Object.assign({}, state[id], {
      updated_at, value
    })
  })),

  [<%= upperCaseName %>_DELETE] : (_state, { id }) => {
    const state = Object.assign({}, state)
    delete state[id]
    return state
  }
}

export const create<%= pascalEntityName %> = (name, value) => ({
  type       : <%= upperCaseName %>_CREATE,
  id         : uuid(),
  created_at : new Date(),
  name,
  value,
})

export const update<%= pascalEntityName %> = (idOrName, value) => (dispatch, getState) => dispatch({
  type : <%= upperCaseName %>_UPDATE,
  id   : resolveId(idOrName, getState()),
  value,
})

export const delete<%= pascalEntityName %> = idOrName => (dispatch, getState) => dispatch({
  type : <%= upperCaseName %>_DELETE,
  id   : resolveId(idOrName, getState()),
})

export default (state = {}, action = {}) => {
  const { accounts = initialState } = state
  const { type } = action
  return reducer[type] ?
    reducer[type](accounts, action) :
    state
}

export const actions = {
  create<%= pascalEntityName %>,
  update<%= pascalEntityName %>,
  delete<%= pascalEntityName %>,
}
