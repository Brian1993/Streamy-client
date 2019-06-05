import streams from '../apis/streams'
import { createStram, setStreams, setStream, editStreamSuccessed, deleteStreamSuccessed } from './index'

export const createStreamThunk = formValues => async dispatch => {
  const { data } = await streams.post('/streams', formValues)
  dispatch(createStram(data))
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
