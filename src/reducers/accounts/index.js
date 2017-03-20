
import constants from './constants'
import actions from './actions'
import reducer, { initialState } from './reducer'
import * as utils from './utils'

export default {
  actions, constants, utils,
  reducer : {
    accounts : (state = {}, action = {}) => {
      const { accounts = initialState } = state
      const { type } = action
      return reducer[type] ?
        reducer[type](accounts, action) :
        state
    }
  }
}
