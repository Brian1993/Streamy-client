import { createSwitch } from '../utils'
import ACTION_TYPES from '../actions/actionTypes'

const INITAIL_STATE = {
  isSignedIn: null,
  userId: null
}

const switchAction = createSwitch({
  [ACTION_TYPES.SIGN_IN]: signIn,
  [ACTION_TYPES.SIGN_OUT]: signOut
})

export default (state = INITAIL_STATE, action) => {
  return switchAction(state, action)
}

function signIn (state, { payload: userId }) {
  return { ...state, isSignedIn: true, userId: userId }
}

function signOut (state) {
  return { ...state, isSignedIn: false, userId: null }
}
