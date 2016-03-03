const initialFormState = {
  partyName: null,
  partySize: 2
}

export default function form(state=initialFormState, action) {
  console.log(action)
  switch (action.type) {
    case 'UPDATE_PARTY_NAME':
      return {
      ...state,
      partyName: action.text
    }
    case 'UPDATE_PARTY_SIZE':
      return {
      ...state,
      partySize: action.number
    }
    default:
      return state
  }
}
