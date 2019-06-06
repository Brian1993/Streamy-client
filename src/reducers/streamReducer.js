import ACTION_TYPES from '../actions/actionTypes'
import { createSwitch } from '../utils'
import _ from 'lodash'

const actionSwitch = createSwitch({
  [ACTION_TYPES.SET_STREAM]: setStream,
  [ACTION_TYPES.SET_STREAMS]: setStreams,
  [ACTION_TYPES.CREATE_STREAM]: createStream,
  [ACTION_TYPES.EDIT_STREAM_SUCCESSED]: editStreamSuccessed,
  [ACTION_TYPES.DELETE_STREAM_SUCCESSED]: deleteStreamSuccessed
})

function setStream (state, { payload }) {
  const { id } = payload
  return { ...state, [id]: payload }
}

function setStreams (state, { payload }) {
  return { ...state, ..._.mapKeys(payload, 'id') }
}

function createStream (state, { payload }) {
  return { ...state, [payload.id]: payload }
}

function editStreamSuccessed (state, { payload }) {
  return { ...state, [payload.id]: payload }
}
function deleteStreamSuccessed (state, { payload }) {
  return _.omit(state, payload)
}

const initialState = {
}

const reducer = (state = initialState, action) => {
  return actionSwitch(state, action)
}

export default reducer
