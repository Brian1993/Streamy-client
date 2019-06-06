import { combineReducers } from 'redux'
import authReducer from '../reducers/authReducer'
import { reducer as formReducer } from 'redux-form'
import streamsReducer from './streamReducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer
})
