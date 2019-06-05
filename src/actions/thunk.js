import streams from '../apis/streams'
import { createStram } from './index'

export const createStreamThunk = formValues => async dispatch => {
  const { data } = await streams.post('/streams', formValues)
  dispatch(createStram(data))
}
