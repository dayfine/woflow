import { SET_TIME, SET_STATUS, UPDATE_TIME } from './actionTypes.js'
import { STATUS } from './constants'

const initialState = {
  totalSeconds: 3599,
  status: STATUS.STOPPED
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME:
      return { ...state, totalSeconds: action.totalSeconds }

    case SET_STATUS:
      return { ...state, status: action.status }

    case UPDATE_TIME:
      return { ...state, totalSeconds: state.totalSeconds + action.seconds }

    default:
      return state
  }
}
