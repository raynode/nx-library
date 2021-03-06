

export const TRANSACTIONS_CREATE = "TRANSACTIONS_CREATE"
export const TRANSACTIONS_DELETE = "TRANSACTIONS_DELETE"
export const TRANSACTIONS_UPDATE = "TRANSACTIONS_UPDATE"

import { uuid } from './utils'

export const initialState = {}

const reducer = {
  [TRANSACTIONS_CREATE] : (state, { id, created_at, name, amount, desc, categories }) => Object.assign({}, state, ({
    [id] : {
      id, created_at, name, amount, desc, categories
    }
  })),

  [TRANSACTIONS_UPDATE] : (state, { id, updated_at, amount, desc, categories }) => Object.assign({}, state, {
    [id] : Object.assign({}, state[id], {
      updated_at, amount, desc, categories
    })
  }),

  [TRANSACTIONS_DELETE] : (_state, { id }) => {
    const state = Object.assign({}, state)
    delete state[id]
    return state
  }
}

export const createTransaction = (name, amount, desc, categories) => ({
  type       : TRANSACTIONS_CREATE,
  id         : uuid(),
  created_at : new Date(),
  name,
  amount,
  desc,
  categories,
})

export const updateTransaction = (id, name, amount, desc, categories = []) => ({
  type       : TRANSACTIONS_UPDATE,
  updated_at : new Date(),
  id,
  name,
  amount,
  desc,
  categories,
})

export const deleteTransaction = id => ({
  type : TRANSACTIONS_DELETE,
  id   : id,
})

export default (state = {}, action = {}) => {
  const { type } = action
  return reducer[type] ?
    reducer[type](state, action) :
    state
}

export const actions = {
  createTransaction,
  updateTransaction,
  deleteTransaction,
}
