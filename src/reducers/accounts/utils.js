

export const resolveAccountId = (accountNameOrId, state) => {
  if(!state)
    throw new Error('resolveAccountId needs a state to find account information')
  const { accounts } = state
  if(!accounts)
    throw new Error('Could not find account information in state')
  if(accounts.hasOwnProperty(accountNameOrId))
    return accountNameOrId
  for( let account of Object.values(accounts) ) {
    if(account.name === accountNameOrId)
      return account.id
  }
}

export const uuid = () => {
  let d = Date.now()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function')
    d += performance.now() //use high-precision timer if available
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}
