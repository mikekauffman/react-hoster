import Parties from '../services/parties'

export const updatePartyName = (text) => {
  return {
    type: 'UPDATE_PARTY_NAME',
    text
  }
}
export const updatePartySize = (number) => {
  return {
    type: 'UPDATE_PARTY_SIZE',
    number
  }
}
export const addParty = () => {
  return (dispatch, getState) => {
    dispatch(beginAddParty())

    let state = getState()
    let name = state.form.partyName
    let size = state.form.partySize
    Parties.create(name, size).then(response => {
      console.log('RESPONSE ->', response)
      dispatch(addPartySuccess())
    }).catch((error) => {
      console.log('ERROR ->', error)
      dispatch(addPartyError(error))
    })
  }
}
export const beginAddParty = () => beginLoading()
export const addPartySuccess = () => endLoading()
export const addPartyError = (error) => {
  return {
    type: 'ADD_PARTY_ERROR'
  }
}
export const beginLoading = () => {
  return {
    type: 'BEGIN_LOADING'
  }
}
export const endLoading = () => {
  return {
    type: 'END_LOADING'
  }
}
