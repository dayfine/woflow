import { ADD_BLOCK, MOVE_BLOCK, DELETE_BLOCK, TOGGLE_BLOCK } from './actionTypes.js'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_BLOCK:
      return [ ...state, action.block ]

    case MOVE_BLOCK:
      return state

    case DELETE_BLOCK:
      return state.filter(el => el.id !== action.id)

    case TOGGLE_BLOCK:
      return state

    default:
      return state
  }
}
