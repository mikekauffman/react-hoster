import React from 'react';
import { connect } from 'react-redux'
import { updatePartyName, updatePartySize, addParty } from '../actions/actions'
import { Button } from 'react-bootstrap'
import Loader from 'react-loader'

const mapStateToProps = (state, props) => {
  return {
    partyName: state.form.partyName,
    partySize: state.form.partySize,
    loaded: state.loader.loaded
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    updatePartyName(name) { dispatch(updatePartyName(name)); },
    updatePartySize(size) { dispatch(updatePartySize(size)); },
    addParty() { dispatch(addParty()); }
  };
}

function PartyForm({ updatePartyName, updatePartySize, addParty, partyName, partySize, loaded }) {
  return(
    <Loader loaded={loaded}>
      <form>
        <input type='text' name='name' value={partyName} onChange={(e) => updatePartyName(e.target.value)}/>
        <input type='number' name='size' value={partySize} onChange={(e) => updatePartySize(parseInt(e.target.value, 10))}/>
        <Button onClick={addParty}>Submit</Button>
      </form>
    </Loader>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyForm)
