import { SET_TIME, SET_STATUS, UPDATE_TIME, CLEAR_TIMER } from './actionTypes.js'
import { STATUS } from './constants'

let TIMER = null

const setTime = totalSeconds => ({ type: SET_TIME, totalSeconds })
const setStatus = status => ({ type: SET_STATUS, status })
const updateTime = seconds => ({ type: UPDATE_TIME, seconds })
const clearTimer = () => ({ type: CLEAR_TIMER })

const tick = () => (dispatch, getState) => {
  const { timer } = getState()
  timer.totalSeconds > timer.timePassed
    ? dispatch(updateTime(1))
    : dispatch(stopTimter())
}

export const startTimer = totalSeconds => dispatch => {
  if (totalSeconds) dispatch(setTime(totalSeconds))
  clearInterval(TIMER)
  TIMER = setInterval(() => dispatch(tick()), 1000)
  dispatch(setStatus(STATUS.STARTED))
  dispatch(tick())
}

export const pauseTimter = () => dispatch => {
  clearInterval(TIMER)
  dispatch(setStatus(STATUS.PAUSED))
}

export const stopTimter = () => dispatch => {
  clearInterval(TIMER)
  dispatch(clearTimer())
}
