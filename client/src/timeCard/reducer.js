import { SET_TIME, SET_STATUS, UPDATE_TIME, CLEAR_TIMER } from './actionTypes.js'
import { TIMER_STATUS as STATUS } from '../constants'

const initialState = {
  totalSeconds: 0,
  timePassed: 0,
  status: STATUS.STOPPED
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME:
      return { ...state, totalSeconds: action.totalSeconds }

    case SET_STATUS:
      return { ...state, status: action.status }

    case UPDATE_TIME:
      return { ...state, timePassed: state.timePassed + action.seconds }

    case CLEAR_TIMER:
      return initialState

    default:
      return state
  }
}
