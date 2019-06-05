import ACTION_TYPES from '../actions/actionTypes'
import { createSwitch } from '../utils'
import { setStreams } from '../actions'
import _ from 'lodash'

const actionSwitch = createSwitch({
  [ACTION_TYPES.SET_STREAM]: setStream,
  [ACTION_TYPES.SET_STREAMS]: setStreams,
  [ACTION_TYPES.CREATE_STREAM]: createStream,
  [ACTION_TYPES.EDIT_STREAM_SUCCESSED]: editStreamSuccessed,
  [ACTION_TYPES.DELETE_STREAM_SUCCESSED]: deleteStreamSuccessed,
})

const reducer = (state, action) => {
  return actionSwitch(state, action)
}
function setStream (state, { payload }) {
  return { ...state, [payload.id]: payload }
}

function createStream (state, { payload }) {
  return { ...state, [payload.id]: payload }
}

function editStreamSuccessed (state, { payload }) {
  return { ...state, [payload.id]: payload } 
}
function deleteStreamSuccessed (state, { payload }) {
  return _.omit(state, payload)
}
export default reducer
