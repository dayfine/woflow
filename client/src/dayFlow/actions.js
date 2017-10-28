import { ADD_BLOCK, MOVE_BLOCK, DELETE_BLOCK, TOGGLE_BLOCK } from './actionTypes.js'

const addBlock = block => ({ type: ADD_BLOCK, block })
const moveBlock = (id, newIdx) => ({ type: MOVE_BLOCK, id, newIdx })
const deleteBlock = id => ({ type: DELETE_BLOCK, id })
const toggleBlock = id => ({ type: TOGGLE_BLOCK, id })

let nextId = 1000
