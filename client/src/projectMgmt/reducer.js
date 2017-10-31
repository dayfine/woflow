import { ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT, GET_PROJECTS } from './actionTypes.js'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return [...state, action.project]

    case UPDATE_PROJECT:
      const lnIdx = state.findIndex(p => p.id === action.project.id)
      const nextState = state.slice()

      nextState.splice(lnIdx, 1, action.project)

      return nextState

    case DELETE_PROJECT:
      return state.filter(p => p.id !== action.id)

    case GET_PROJECTS:
      return action.projects

    default:
      return state
  }
}
