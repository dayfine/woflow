import mori from 'mori'

export default (taskId, events) => {
  const ret = mori.toJs(mori.get(events, taskId))

  return ret !== null
    ? ret
    : { description: 'New Project Name', projectId: 0, duration: 0 }
}
