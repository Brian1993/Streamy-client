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
  // put could override the object if we only update some of properties of a object
  /**
   * ex: user = {
   *  id: 4,
   *  userId: 'A123456789',
   *  title: 'This is a title',
   *  description: 'This is a description'
   * }
   * If we only want to update title and description, so we "PUT" only the id, title, description the api
   * responseUser = {
   *  id: 4,
   *  title: 'modified title',
   *  description: 'This is a description'
   * }
   * The userId gets deleted
   */
  const { data } = await streams.patch(`/streams/${id}`, formValue)
  dispatch(editStreamSuccessed(data))
  history.push('/')
}

export const deleteStreamThunk = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`)
  dispatch(deleteStreamSuccessed(id))
  history.push('/')
}
