import { combineReducers } from 'redux'

const initialState = {
  partyName: 'Jones',
  partySize: 2
}

const form = (state=initialState, action) => {
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

const hosterApp = combineReducers({
  form
})

export default hosterApp
