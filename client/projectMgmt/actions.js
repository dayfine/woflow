import { ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT, GET_PROJECTS } from './actionTypes.js'

export const addProject = project => ({ type: ADD_PROJECT, project })
export const updateProject = project => ({ type: UPDATE_PROJECT, project })
export const deleteProject = id => ({ type: DELETE_PROJECT, id })
export const getProjects = projects => ({ type: GET_PROJECTS, projects })
