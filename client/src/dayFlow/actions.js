import { ADD_BLOCK, MOVE_BLOCK, DELETE_BLOCK, TOGGLE_BLOCK } from './actionTypes.js'

export const addBlock = block => ({ type: ADD_BLOCK, block })
export const moveBlock = (id, newIdx) => ({ type: MOVE_BLOCK, id, newIdx })
export const deleteBlock = id => ({ type: DELETE_BLOCK, id })
export const toggleBlock = id => ({ type: TOGGLE_BLOCK, id })

let nextId = 1000
