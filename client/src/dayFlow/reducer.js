import { ADD_BLOCK, UPDATE_BLOCK, MOVE_BLOCK, DELETE_BLOCK } from './actionTypes.js'
import mori from 'mori'

export default (state = mori.hashMap(), action) => {
  switch (action.type) {
    case ADD_BLOCK:
      return mori.assoc(state, action.id, mori.toClj(action.block))

    case UPDATE_BLOCK:
      const { block } = action
      const newBlock = mori.merge(mori.get(state, block.id), mori.toClj(block))
      return mori.assoc(state, block.id, newBlock)

    case MOVE_BLOCK:
      const { id, newPriority } = action
      const movedBlock = mori.assoc(mori.get(state, id), 'priority', newPriority)
      return mori.assoc(state, id, movedBlock)

    case DELETE_BLOCK:
      return mori.dissoc(state, action.id)

    default:
      return state
  }
}
