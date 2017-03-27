

export const ACCOUNTS_CREATE = "ACCOUNTS_CREATE"
export const ACCOUNTS_DELETE = "ACCOUNTS_DELETE"
export const ACCOUNTS_UPDATE = "ACCOUNTS_UPDATE"

import { uuid, resolveId } from './utils'

export const initialState = {}

const reducer = {
  [ACCOUNTS_CREATE] : (state, { id, created_at, name, balance }) => Object.assign({}, state, ({
    [id] : {
      id, created_at, name, balance
    }
  })),

  [ACCOUNTS_UPDATE] : (state, { id, updated_at, balance }) => Object.assign({}, state, ({
    [id] : Object.assign({}, state[id], {
      updated_at, balance
    })
  })),

  [ACCOUNTS_DELETE] : (_state, { id }) => {
    const state = Object.assign({}, state)
    delete state[id]
    return state
  }
}

export const createAccounts = (name, balance) => ({
  type       : ACCOUNTS_CREATE,
  id         : uuid(),
  created_at : new Date(),
  name,
  balance,
})

export const updateAccounts = (idOrName, balance) => (dispatch, getState) => dispatch({
  type : ACCOUNTS_UPDATE,
  id   : resolveId(idOrName, getState()),
  balance,
})

export const deleteAccounts = idOrName => (dispatch, getState) => dispatch({
  type : ACCOUNTS_DELETE,
  id   : resolveId(idOrName, getState()),
})

export default (state = initialState, action = {}) => {
  const { type } = action
  return reducer[type] ?
    reducer[type](state, action) :
    state
}

export const actions = {
  createAccounts,
  updateAccounts,
  deleteAccounts,
}
