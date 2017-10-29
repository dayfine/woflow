// Time Number Convetion
// Input / Display S

export const parseSeconds = totalSeconds => {
  const
    timePad = n => n < 10 ? `0${n}` : n,
    seconds = timePad(totalSeconds % 60),
    minutes = timePad(Math.floor(totalSeconds / 60) % 60),
    hours = timePad(Math.floor(totalSeconds / 3600))

  return `${hours}${minutes}${seconds}`
}

export const makeTimeStr = numberString => {
  return numberString.match(/.{2}/g).join(':')
}

export const parseTimeStr = numberString => {
  // console.log(numberString)
  const [ hours, minutes, seconds ] = makeTimeStr(numberString).split(':').map(str => parseInt(str))
  return hours * 3600 + minutes * 60 + seconds
}
