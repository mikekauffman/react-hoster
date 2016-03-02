import { combineReducers } from 'redux'
import form from './form'
import loader from './loader'

const hosterApp = combineReducers({
  form,
  loader
})

export default hosterApp
