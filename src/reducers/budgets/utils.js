
export const resolveId = (nameOrId, state) => {
  if(state.hasOwnProperty(nameOrId))
    return nameOrId
  for( let item of Object.values(state) ) {
    if(item.name === nameOrId)
      return item.id
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
