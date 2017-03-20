

export const TRANSACTIONS_CREATE = "TRANSACTIONS_CREATE"
export const TRANSACTIONS_DELETE = "TRANSACTIONS_DELETE"
export const TRANSACTIONS_UPDATE = "TRANSACTIONS_UPDATE"

import { uuid, resolveId } from './utils'

export const initialState = {}

const reducer = {
  [TRANSACTIONS_CREATE] : (state, { id, created_at, name, value }) => Object.assign({}, state, ({
    [id] : {
      id, created_at, name, value
    }
  })),

  [TRANSACTIONS_UPDATE] : (state, { id, updated_at, value }) => Object.assign({}, state, ({
    [id] : Object.assign({}, state[id], {
      updated_at, value
    })
  })),

  [TRANSACTIONS_DELETE] : (_state, { id }) => {
    const state = Object.assign({}, state)
    delete state[id]
    return state
  }
}

export const createTransactions = (name, value) => ({
  type       : TRANSACTIONS_CREATE,
  id         : uuid(),
  created_at : new Date(),
  name,
  value,
})

export const updateTransactions = (idOrName, value) => (dispatch, getState) => dispatch({
  type : TRANSACTIONS_UPDATE,
  id   : resolveId(idOrName, getState()),
  value,
})

export const deleteTransactions = idOrName => (dispatch, getState) => dispatch({
  type : TRANSACTIONS_DELETE,
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
  createTransactions,
  updateTransactions,
  deleteTransactions,
}
