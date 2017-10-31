// ACTION TYPE
const SET = 'CURRENTTASK/SET'

// ACTION CREATOR
export const setCurrTask = taskId => ({ type: SET, taskId })

/*
  REDUCER
 */
export default (currentTaskId = -1, action) => {
  switch (action.type) {
    case SET:
      return action.taskId
    default:
      return currentTaskId
  }
}
