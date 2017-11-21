import m from 'mori'
import projectMapper from './projectMapper'

const now = new Date()
const start = now.getHours() + Math.floor(now.getMinutes() / 15) * 15

export default (_events, projects, setting) => {
  const { daySpan, numDays } = setting

  // Should first filter  recurring events v. nonrecurring events
  let events = Object.values(m.toJs(_events))
  events.sort((e1, e2) => e1.priority - e2.priority)

  let days = [[]], batchTotal = 0, dayIdx = 0, evtIdx = 0
  let DAY_LENGTH = daySpan[1] - daySpan[0]

  while (evtIdx < events.length && dayIdx < numDays) {
    let event = events[evtIdx++]
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
