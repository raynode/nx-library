
import Actions from './constants'
import { uuid, resolveAccountId } from './utils'

export default {
  createAccount : (name, balance = 0) => ({
    type       : Actions.CREATE_ACCOUNT,
    id         : uuid(),
    created_at : new Date(),
    name, balance,
  }),

  updateAccount : (accountNameOrId, balance) => (dispatch, getState) => dispatch({
    type : Actions.UPDATE_ACCOUNT,
    id   : resolveAccountId(accountNameOrId, getState() ),
    balance,
  }),

  deleteAccount : accountNameOrId => (dispatch, getState) => dispatch({
    id   : resolveAccountId(accountNameOrId, getState() ),
    type : Actions.DELETE_ACCOUNT
  })
}
