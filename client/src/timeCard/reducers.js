import { SET_TIMER, TOGGLE_TIMER, UPDATE_TIMER, RESET_TIMER } from './actionTypes.js'

export default (state = {}, action) => {
  switch (action.type) {
    case SET_TIMER:
      return
    case TOGGLE_TIMER:
      return
    case UPDATE_TIMER:
      return
    case RESET_TIMER:
      return
    default:
      return state
  }
}
