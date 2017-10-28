import { SET_DAYSPAN, SET_NUM_DAYS, SET_COLORS, SET_TIMEZONE, SET_TIMEFORMAT } from './actionTypes.js'

export const setDaySpan = config_daySpan => ({ type: SET_DAYSPAN, config_daySpan })
export const setNumDays = numDays => ({ type: SET_NUM_DAYS, numDays })
export const setColors = config_colors => ({ type: SET_COLORS, config_colors })
export const setTimeZone = config_timeZone => ({ type: SET_TIMEZONE, config_timeZone })
export const setTimeFormat = config_timeFormat => ({ type: SET_TIMEFORMAT, config_timeFormat })
