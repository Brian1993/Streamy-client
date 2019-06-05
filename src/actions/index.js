import ACTION_TYPES from './actionTypes'

export const signIn = (userId) => {
  return {
    type: ACTION_TYPES.SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: ACTION_TYPES.SIGN_OUT
  }
}

export const createStram = data => {
  return {
    type: ACTION_TYPES.CREATE_STREAM,
    payload: data
  }
}

export const setStreams = (data) => {
  return {
    type: ACTION_TYPES.SET_STREAMS,
    payload: data
  }
}

export const setStream = (data) => {
  return {
    type: ACTION_TYPES.SET_STREAM,
    payload: data
  }
}

export const editStreamSuccessed = (data) => {
  return {
    type: ACTION_TYPES.EDIT_STREAM_SUCCESSED,
    payload: data
  }
}

export const deleteStreamSuccessed = (data) => {
  return {
    type: ACTION_TYPES.DELETE_STREAM_SUCCESSED,
    payload: data
  }
}
