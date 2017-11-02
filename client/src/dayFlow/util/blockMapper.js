import mori from 'mori'
import projectMapper from './projectMapper'

const now = new Date()
const start = now.getHours() + Math.floor(now.getMinutes() / 15) * 15

export default (events, projects, setting) => {
  // Should first filter  recurring events v. nonrecurring events
  const { daySpan, numDays } = setting

  let days = [[]], batchTotal = 0, dayIdx = 0, evtIdx = 0
  let DAY_LENGTH = daySpan[1] - daySpan[0]
  const evtKeys = mori.intoArray(mori.keys(events)).sort((a, b) => a - b)

  while (evtIdx < evtKeys.length && dayIdx < numDays) {
    let event = mori.toJs(mori.get(events, evtKeys[evtIdx++]))
    event = projectMapper(event, projects)

    if (DAY_LENGTH - batchTotal > event.duration) {
      days[dayIdx].push(event)
      batchTotal += event.duration
    } else {
      days.push([])
      days[++dayIdx].push(event)
      batchTotal = event.duration
    }
  }

  return days
}
