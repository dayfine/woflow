import { ADD_BLOCK, UPDATE_BLOCK, MOVE_BLOCK, DELETE_BLOCK, TOGGLE_BLOCK } from './actionTypes.js'

let nextId = 1000

export const addBlock = block => ({ type: ADD_BLOCK, id: nextId++, block })
export const updateBlock = block => ({ type: UPDATE_BLOCK, block })
export const moveBlock = (id, newPriority) => ({ type: MOVE_BLOCK, id, newPriority })
export const deleteBlock = id => ({ type: DELETE_BLOCK, id })
export const toggleBlock = id => ({ type: TOGGLE_BLOCK, id })
