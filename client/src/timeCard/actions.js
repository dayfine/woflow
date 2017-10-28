import { SET_TIME, SET_STATUS, UPDATE_TIME, CLEAR_TIMER } from './actionTypes.js'
import { STATUS } from './constants'

let timer = null

const setTime = totalSeconds => ({ type: SET_TIME, totalSeconds })
const setStatus = status => ({ type: SET_STATUS, status })
const updateTime = seconds => ({ type: UPDATE_TIME, seconds })
const clearTimer = () => ({ type: CLEAR_TIMER })

const tick = () => dispatch => dispatch(updateTime(1))

export const startTimer = totalSeconds => dispatch => {
  // Pass in totalSeconds to start a new Timer
  if (totalSeconds) dispatch(setTime(totalSeconds))
  clearInterval(timer)
  timer = setInterval(() => dispatch(tick()), 1000)
  dispatch(setStatus(STATUS.STARTED))
  dispatch(tick())
}

export const pauseTimter = () => dispatch => {
  clearInterval(timer)
  dispatch(setStatus(STATUS.PAUSED))
}

export const stopTimter = () => dispatch => {
  clearInterval(timer)
  dispatch(clearTimer())
}
