

export const BUDGETS_CREATE = "BUDGETS_CREATE"
export const BUDGETS_DELETE = "BUDGETS_DELETE"
export const BUDGETS_UPDATE = "BUDGETS_UPDATE"

import { uuid, resolveId } from './utils'

export const initialState = {}

const reducer = {
  [BUDGETS_CREATE] : (state, { id, created_at, name, value }) => Object.assign({}, state, ({
    [id] : {
      id, created_at, name, value
    }
  })),

  [BUDGETS_UPDATE] : (state, { id, updated_at, value }) => Object.assign({}, state, ({
    [id] : Object.assign({}, state[id], {
      updated_at, value
    })
  })),

  [BUDGETS_DELETE] : (_state, { id }) => {
    const state = Object.assign({}, state)
    delete state[id]
    return state
  }
}

export const createBudgets = (name, value) => ({
  type       : BUDGETS_CREATE,
  id         : uuid(),
  created_at : new Date(),
  name,
  value,
})

export const updateBudgets = (idOrName, value) => (dispatch, getState) => dispatch({
  type : BUDGETS_UPDATE,
  id   : resolveId(idOrName, getState()),
  value,
})

export const deleteBudgets = idOrName => (dispatch, getState) => dispatch({
  type : BUDGETS_DELETE,
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
  createBudgets,
  updateBudgets,
  deleteBudgets,
}
