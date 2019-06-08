import streams from '../apis/streams'
import {
  createStream,
  setStreams,
  setStream,
  editStreamSuccessed,
  deleteStreamSuccessed
} from './index'
import history from '../history'

export const createStreamThunk = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth
  const { data } = await streams.post('/streams', { ...formValues, userId })
  dispatch(createStream(data))
  history.push('/')
}

export const fetchStreamsThunk = () => async dispatch => {
  const { data } = await streams.get('./streams')
  dispatch(setStreams(data))
}

export const fetchStreamThunk = (id) => async dispatch => {
  const { data } = await streams.get(`./streams/${id}`)
  dispatch(setStream(data))
}

export const editStreamThunk = (id, formValue) => async dispatch => {
  const { data } = await streams.put(`/streams/${id}`, formValue)
  dispatch(editStreamSuccessed(data))
  history.push('/')
}

export const deleteStreamThunk = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`)
  dispatch(deleteStreamSuccessed(id))
}
