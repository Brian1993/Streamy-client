import ACTION_TYPES from './actionTypes'

export const signIn = () => {
  return {
    type: ACTION_TYPES.SIGN_IN
  }
}

export const signOut = () => {
  return {
    type: ACTION_TYPES.SIGN_OUT
  }
}
