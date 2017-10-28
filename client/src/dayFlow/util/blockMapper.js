import mori from 'mori'

const now = new Date()
const start = now.getHours() + Math.floor(now.getMinutes() / 15) * 15
console.log(start)
const todayRemaining = 8

export default (events, numDays) => {
  // Should first filter  recurring events v. nonrecurring events

  let days = [[]], batchTotal = 0, dayIdx = 0, evtIdx = 0
  const evtKeys = mori.intoArray(mori.keys(events))

  while (evtIdx < evtKeys.length && dayIdx < numDays) {
    const event = mori.toJs(mori.get(events, evtKeys[evtIdx++]))

    if (batchTotal < todayRemaining) {
      days[dayIdx].push(event)
      batchTotal += event.duration
    } else {
      days.push([])
      days[dayIdx++].push(event)
      batchTotal = event.duration
    }
  }

  return days
}
