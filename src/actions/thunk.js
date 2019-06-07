import streams from '../apis/streams'
import { createStream, setStreams, setStream, editStreamSuccessed, deleteStreamSuccessed } from './index'

export const createStreamThunk = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth
  const { data } = await streams.post('/streams', { ...formValues, userId })
  dispatch(createStream(data))

  // Do programmatic navigation to get
  // the use back to the root route
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
}

export const deleteStreamThunk = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`)
  dispatch(deleteStreamSuccessed(id))
}
