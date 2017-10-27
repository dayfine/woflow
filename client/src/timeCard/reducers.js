import { SET_TIMER, TOGGLE_TIMER, UPDATE_TIMER, STOP_TIMER } from './actionTypes.js'

const STATUS = {
  STOPPED: 'stopped',
  STARTED: 'started',
  PAUSED: 'paused'
}

const initialState = {
  totalSeconds: 0,
  status: STATUS.STOPPED
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIMER:
      const newState = {
        totalSeconds: action.totalSeconds,
        status: STATUS.STARTED
      }
      return newState

    case TOGGLE_TIMER:
      let newStatus
      if (state.status === 'stopped') newStatus = STATUS.STARTED
      if (state.status === 'paused') newStatus = STATUS.PAUSED
      return { ...state, status: newStatus }

    case UPDATE_TIMER:
      const newTime = action.something // change time here
      return { ...state, totalSeconds: newTime }

    case STOP_TIMER:
      return initialState

    default:
      return state
  }
}
