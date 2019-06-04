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
