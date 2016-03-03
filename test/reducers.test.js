import expect from 'expect';
import reducer from '../reducers/form';

const defaultState = {
  partyName: null,
  partySize: 2
};

describe('form reducer', () => {

  it('should return default state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(defaultState);
  })

  it('should return state', () => {
    const text = 'Blergh'
    expect(
      reducer(defaultState, {
        type: 'UPDATE_PARTY_NAME',
        text
      })
    ).toEqual(
      {
        partyName: text,
        partySize: 2
      }
    )
  })
})
