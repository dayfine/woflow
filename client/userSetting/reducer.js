import { SET_DAYSPAN, SET_NUM_DAYS, SET_COLORS, SET_TIMEZONE, SET_TIMEFORMAT } from './actionTypes.js'

export default (state = {}, action) => {
  switch (action.type) {
    case SET_DAYSPAN:
      return { ...state, daySpan: action.config_daySpan }

    case SET_NUM_DAYS:
      return { ...state, numDays: action.numDays }

    case SET_COLORS:
      return { ...state, colors: action.config_colors }

    case SET_TIMEZONE:
      return { ...state, timeZone: action.config_timeZone }

    case SET_TIMEFORMAT:
      return { ...state, timeFormat: action.config_timeFormat }

    default:
      return state
  }
}
