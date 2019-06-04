import { createSwitch } from '../utils'
import ACTION_TYPES from '../actions/actionTypes'

const INITAIL_STATE = {
  isSignedIn: null
}

const switchAction = createSwitch({
  [ACTION_TYPES.SIGN_IN]: signIn,
  [ACTION_TYPES.SIGN_OUT]: signOut
})

export default (state = INITAIL_STATE, action) => {
  return switchAction(state, action)
}

function signIn (state) {
  return { ...state, isSignedIn: true }
}

function signOut (state) {
  return { ...state, isSignedIn: false }
}
