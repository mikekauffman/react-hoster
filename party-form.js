import React from 'react';
import { connect } from 'react-redux'
import { updatePartyName, updatePartySize, addParty } from './actions'
import { Button } from 'react-bootstrap'

const mapStateToProps = (state, props) => {
  return {
    partyName: state.form.partyName,
    partySize: state.form.partySize
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    updatePartyName(name) { dispatch(updatePartyName(name)); },
    updatePartySize(size) { dispatch(updatePartySize(size)); },
    addParty() { dispatch(addParty()); }
  };
}

function PartyForm({ updatePartyName, updatePartySize, addParty, partyName, partySize }) {
  return(
    <form>
      <input type='text' name='name' value={partyName} onChange={(e) => updatePartyName(e.target.value)}/>
      <input type='number' name='size' value={partySize} onChange={(e) => updatePartySize(parseInt(e.target.value, 10))}/>
      <Button onClick={addParty}>Submit</Button>
    </form>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyForm)
