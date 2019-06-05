import { keyMirror } from '../utils'

const ACTION_TYPES_LSIT = [
  'SIGN_IN',
  'SIGN_OUT',
  'CREATE_STREAM'
]

const ACTION_TYPES = keyMirror(ACTION_TYPES_LSIT)

export default ACTION_TYPES
