import Hoster from './hoster'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import hosterApp from './reducers'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const store = createStoreWithMiddleware(hosterApp);

render(
  <Provider store={store}>
    <Hoster/>
  </Provider>,
  document.getElementById('react-hoster')
)
