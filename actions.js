import fetch from 'isomorphic-fetch'

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
    let state = getState()
    dispatch(beginAddParty())
    fetch('http://localhost:3000/api/v1/parties', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name: state.form.partyName,
        size: state.form.partySize
      })
    }).then(response => response.json()).then(response => {
      console.log('RESPONSE ->', response)
      dispatch(addPartySuccess())
    }).catch((error) => {
      dispatch(addPartyError())
    })
  }
}
export const beginAddParty = () => {
  return {
    type: 'BEGIN_ADD_PARTY'
  }
}
export const addPartySuccess = () => {
  return {
    type: 'ADD_PARTY_SUCCESS'
  }
}
export const addPartyError = () => {
  return {
    type: 'ADD_PARTY_ERROR'
  }
}
