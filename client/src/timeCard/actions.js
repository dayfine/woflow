import { SET_TIMER, TOGGLE_TIMER, UPDATE_TIMER, STOP_TIMER } from './actionTypes.js'

export const setTimer = totalSeconds => ({ type: SET_TIMER, totalSeconds })
export const toggleTimer = () => ({ type: TOGGLE_TIMER })
export const updateTimer = something => ({ type: UPDATE_TIMER, something })
export const stopTimter = () => ({ type: STOP_TIMER })
