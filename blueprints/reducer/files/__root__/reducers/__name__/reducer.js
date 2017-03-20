

import Actions from './constants'

export const initialState = {}

export default {
  [Actions.<%= upperCaseName %>_CREATE] : (state, { id, created_at, name, value }) => Object.assign({}, state, ({
    [id] : {
      id, created_at, name, value
    }
  })),

  [Actions.<%= upperCaseName %>_UPDATE] : (state, { id, updated_at, value }) => Object.assign({}, state, ({
    [id] : {
      updated_at, value
    }
  })),

  [Actions.<%= upperCaseName %>_DELETE] : (_state, { id }) => {
    const state = Object.assign({}, state)
    delete state[id]
    return state
  }
}
