import React from 'react';
import PartyForm from './party-form'

export default class Hoster extends React.Component {
  render() {
    return(
      <div>
        <h1 className='text-center col-xs-12'>Hoster</h1>
        <PartyForm/>
      </div>
    )
  }
}
