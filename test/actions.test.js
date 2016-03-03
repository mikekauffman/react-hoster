import expect from 'expect'
import * as actions from '../actions/actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'John Whatever'
    const expectedAction = {
      type: 'UPDATE_PARTY_NAME',
      text
    }
    expect(actions.updatePartyName(text)).toEqual(expectedAction)
  })

  it('blah', () => {
    const number = 3
    const expectedAction = {
      type: 'UPDATE_PARTY_SIZE',
      number
    }
    expect(actions.updatePartySize(number)).toEqual(expectedAction)
  })
})
