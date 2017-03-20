

export const ACCOUNTS_CREATE = "ACCOUNTS_CREATE"
export const ACCOUNTS_DELETE = "ACCOUNTS_DELETE"
export const ACCOUNTS_UPDATE = "ACCOUNTS_UPDATE"

import { uuid, resolveId } from './utils'

export const initialState = {}

const reducer = {
  [ACCOUNTS_CREATE] : (state, { id, created_at, name, value }) => Object.assign({}, state, ({
    [id] : {
      id, created_at, name, value
    }
  })),

  [ACCOUNTS_UPDATE] : (state, { id, updated_at, value }) => Object.assign({}, state, ({
    [id] : Object.assign({}, state[id], {
      updated_at, value
    })
  })),

  [ACCOUNTS_DELETE] : (_state, { id }) => {
    const state = Object.assign({}, state)
    delete state[id]
    return state
  }
}

export const createAccounts = (name, value) => ({
  type       : ACCOUNTS_CREATE,
  id         : uuid(),
  created_at : new Date(),
  name,
  value,
})

export const updateAccounts = (idOrName, value) => (dispatch, getState) => dispatch({
  type : ACCOUNTS_UPDATE,
  id   : resolveId(idOrName, getState()),
  value,
})

export const deleteAccounts = idOrName => (dispatch, getState) => dispatch({
  type : ACCOUNTS_DELETE,
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
  createAccounts,
  updateAccounts,
  deleteAccounts,
}
