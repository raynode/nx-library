
import Actions from './constants'

export const initialState = {}

export default {
  [Actions.CREATE_ACCOUNT] : (state, { id, created_at, name, balance }) => Object.assign({}, state, ({
    [id] : {
      id, created_at, name, balance, updated_at : created_at
    }
  })),

  [Actions.UPDATE_ACCOUNT] : (state, { id, updated_at, balance }) => Object.assign({}, state, ({
    [id] : {
      balance, updated_at
    }
  })),

  [Actions.DELETE_ACCOUNT] : (_state, { accountId }) => {
    const state = Object.assign({}, state)
    delete state[accountId]
    return state
  }
}
