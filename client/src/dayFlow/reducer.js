import { ADD_BLOCK, UPDATE_BLOCK, MOVE_BLOCK, DELETE_BLOCK, TOGGLE_BLOCK } from './actionTypes.js'
import mori from 'mori'

export default (state = mori.hashMap(), action) => {
  switch (action.type) {
    case ADD_BLOCK:
      return mori.assoc(state, action.id, mori.toClj(action.block))

    case UPDATE_BLOCK:
      return state

    case MOVE_BLOCK:
      return state

    case DELETE_BLOCK:
      return mori.dissoc(state, action.id)

    case TOGGLE_BLOCK:
      return mori.updateIn(state, [action.id], () => {})

    default:
      return state
  }
}
