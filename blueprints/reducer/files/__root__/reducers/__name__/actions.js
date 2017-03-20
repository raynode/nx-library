
import Actions from './constants'
import { uuid, resolveAccountId } from './utils'

export default {
  create<%= pascalEntityName %> : (name, value) => ({
    type       : Actions.<%= upperCaseName %>_CREATE,
    id         : uuid(),
    created_at : new Date(),
    name,
    value,
  }),

  update<%= pascalEntityName %> : (id, value) => (dispatch, getState) => dispatch({
    type : Actions.<%= upperCaseName %>_UPDATE,
    id,
    value,
  }),

  delete<%= pascalEntityName %> : id => (dispatch, getState) => dispatch({
    type : Actions.<%= upperCaseName %>_DELETE,
    id,
  })
}
