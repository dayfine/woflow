import mori from 'mori'

export default (taskId, events) => {
  return mori.toJs(mori.get(events, taskId))
}
