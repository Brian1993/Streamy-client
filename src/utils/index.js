import _ from 'lodash'

export function createSwitch (actionToReducerMap) {
  return function switchAction (state, action = {}) {
    const reducer = actionToReducerMap[action.type]

    return reducer
      ? reducer(state, action)
      : state
  }
}

export function keyMirror (actionTypes) {
  const actionsObjList = _.map(actionTypes, actionType => ({ [actionType]: actionType }))
  return _.assign(...actionsObjList)
}
